const Fix = require('./funcs/fix.js');
const {
    json2arrays
} = require('./funcs/base.js');
const config = require('./config/config.js');
const fix = new Fix(config.online.host, config.online.port);


/**
 * 获取推荐组合信息
 * 
 * @param {any} data 请求主体
 * @returns 应答主体
 */
exports.getRecommendedGroup =async function (data) {
    let result = {};
    let tmp = json2arrays(data);
    result = await fix.send(tmp.fieldArray, tmp.valueArray);
    return result;
}