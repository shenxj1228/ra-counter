let fs = require('fs');
let path = require('path');
let Client = require('ssh2').Client;
class SSH {
    /**
     * Creates an instance of SSH.
     * 
     * @param {Object} options {host:'127.0.0.1',port:'22',username:'root',password:'password',privateKey:'D:\XX'}
     * 
     * @memberOf SSH
     */
    constructor(options) {
        options.host = options.host || '127.0.0.1';
        options.port = options.port || '22';
        if (typeof options.privateKey != 'undefined') {
            options.privateKey = fs.readFileSync(options.privateKey)
        }
        this.options = options;
    }

    /**
     * 执行远程命令
     * 
     * @param {String} cmd 命令
     * @returns Promise 命令执行结果
     * 
     * @memberOf SSH
     */
    execCmd(cmd) {
        return new Promise((resolve, reject) => {
            let conn = new Client();
            conn.on('ready', () => {
                conn.exec(cmd, (err, stream) => {
                    if (err) reject(err);
                    stream.on('close', (code, signal) => {
                        console.log('Stream :: close :: code: ' + code + ', signal: ' + signal);
                        conn.end();
                    }).on('data', function(data) {
                        data = data.toString('utf8');
                        console.log('STDOUT: ' + data);
                        resolve(data);
                    }).stderr.on('data', function(data) {
                        data = data.toString('utf8');
                        console.log('STDERR: ' + data);
                        reject(data);
                    });
                });
            }).on('error', err => reject(err)).connect(this.options)

        });
    }

    /**
     * 上传文件
     * 传入参数必须都是文件路径或者都是目录
     * @param {String} localPath 本地路径
     * @param {String} remotePath 远程路径
     * @returns Promise
     * 
     * @memberOf SSH
     */
    uploadfile(localPath, remotePath) {
        return new Promise((resolve, reject) => {
            let conn = new Client();
            conn.on('ready', () => {
                conn.sftp((err, sftp) => {
                    if (err) {
                        reject(err);
                    }
                    if (!fs.existsSync(localPath)) {
                        reject(err);
                    }
                    fs.stat(localPath, (err, stats) => {
                        if (stats.isDirectory()) {
                            fs.readdir(localPath, (err, files) => {
                                if (err) {
                                    reject(err);
                                }
                                files.forEach((filename, index, array) => {
                                    sftp.fastPut(path.join(localPath, filename), path.join(remotePath, filename).replace(/[\\]/g, '/'), {}, err => {
                                        if (err) {
                                            conn.end();
                                            reject(err);
                                        }
                                        if (index == array.length - 1) {
                                            conn.end();
                                            resolve('上传完成');
                                        }
                                    });
                                });
                            })
                        } else if (stats.isFile()) {
                            sftp.fastPut(localPath, remotePath, {}, err => {
                                conn.end();
                                if (err) {
                                    reject(err);
                                }
                                resolve('上传完成');
                            });

                        } else {
                            reject(localPath + '无法识别类型（文件or目录）');
                        }
                    })
                })
            }).on('error', err => reject(err)).connect(this.options)
        })
    }

    /**
     * 下载文件
     * 传入参数必须都是文件路径或者都是目录
     * @param {any} remotePath 远程路径
     * @param {any} localPath 本地路径
     * @returns Promise
     * 
     * @memberOf SSH
     */
    downloadfile(remotePath, localPath) {
        return new Promise((resolve, reject) => {
            let conn = new Client();
            conn.on('ready', () => {
                conn.sftp((err, sftp) => {
                    if (err) {
                        reject(err);
                    }
                    sftp.stat(remotePath, (err, stats) => {
                        if (typeof stats == 'undefined') {
                            reject(remotePath + '不存在');
                        }
                        if (stats.isDirectory()) {
                            sftp.readdir(remotePath, (err, files) => {
                                if (err) {
                                    reject(err);
                                }
                                files.forEach((file, index, array) => {
                                    sftp.fastGet(path.join(remotePath, file.filename).replace(/[\\]/g, '/'), path.join(localPath, file.filename), {}, err => {
                                        if (err) {
                                            conn.end();
                                            reject(err);
                                        }
                                        if (index == array.length - 1) {
                                            conn.end();
                                            resolve('下载完成');
                                        }
                                    });
                                });
                            })
                        } else if (stats.isFile()) {
                            sftp.fastGet(remotePath, localPath, {}, err => {
                                conn.end();
                                if (err) {
                                    reject(err);
                                }
                                resolve('下载完成');
                            });

                        } else {
                            reject(localPath + '无法识别类型（文件or目录）');
                        }
                    })
                })
            }).on('error', err => reject(err)).connect(this.options)
        })
    }
}
module.exports=SSH;