"use strict";
let net = require('net');
/**
 * 
 * 
 * @export
 * @class TCP TCP套接字客户端
 */
class TCP {
    constructor(host, port) {
        this.host = host;
        this.port = port;
    }
    /**
     * @param {String} data 发送字符串
     * @returns {Promise} promise实例
     * 
     * @memberOf TCP
     */
    send(data) {
        return new Promise((resolve, reject) => {
            try {
                const client = net.connect({
                    host: this.host,
                    port: this.port
                }, () => {
                    client.write(data);
                });
                client.on('error', (err) => {
                    reject(err);
                });
                client.on('data', (data) => {
                    resolve(data.toString('utf8'));
                    client.destroy();
                });
            } catch (err) {
                reject(err);
            }
        });

    }

}
module.exports = TCP;