"use strict";
let {
    getStrLength,
    PrefixInteger,
    strap,dealError
} = require('./base');
let TCP = require('./tcp');
class FIX {
    /**
     * Creates an instance of Fix.
     * 
     * @param {string} [host='127.0.0.1'] 发送主机地址
     * @param {any} port 发送主机端口
     * 
     * @memberOf Fix
     */
    constructor(host = '127.0.0.1', port) {
        this.host = host;
        this.port = port;
        this.soh = '\x01';
        /**
         * 处理发送数据
         * @param {Array} keys 键名
         * @param {Array} values 键值
         * @returns {String} 格式化的发送数据
         */
        this.dealSendData = function (keys, values) {
            let data = keys.length + this.soh + '1' + this.soh;
            let tmparray = keys.concat(values);
            data = data + tmparray.join(this.soh) + this.soh;
            let header = 'F017' + PrefixInteger(getStrLength(data), 5) + 'UTF-8   ';
            return header + data;
        };
        /**
         * 处理应答数据
         * @param {String} data 应答数据
         * @returns {Object} JSON化应答数据
         */
        this.dealRecvData = function (data) {
            let tmparray = strap(data.toString().substring(17), this.soh).split(this.soh);
            let count = parseInt(tmparray.splice(0, 1)[0]);
            tmparray.splice(0, 1);
            let obj = {};
            tmparray.some(function (ele, index) {
                obj[ele] = tmparray[count + index];
                return count + index >= tmparray.length - 1;
            });
            return obj;
        }
    }

    /**
     *发送fix报文 
     * 
     * @param {Array} keys 键名
     * @param {Array} values 键值
     * 
     * @memberOf Fix
     */
    async send(keys, values) {
        let t = new TCP(this.host, this.port);
        let data = this.dealSendData(keys, values);
        try{
            return this.dealRecvData(await t.send(data));
        }catch(err){
            return dealError(err.toString());
        }
    }
}
module.exports = FIX;