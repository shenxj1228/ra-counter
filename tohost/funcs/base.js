"use strict";
/**
 * 获取字符串长度，汉字长度为2
 * 
 * @export
 * @param {String} str
 * @param {Number} length
 * @returns {Number} 字符串长度
 */
exports.getStrLength = function (str, length) {
    return str.replace(/[^\x00-\xff]/g, "aa").length;
};

/**
 * 数字未达长度，前面补0，
 * 
 * @export
 * @param {Number} num 数字
 * @param {Number} length 长度
 * @returns {String} 数字前面补0的字符串
 */
exports.PrefixInteger = function (num, length) {
    return (Array(length).join('0') + num).slice(-length);
};

/**
 * 删除字符串首尾分隔符
 * 
 * @export
 * @param {String} str 字符串
 * @param {String} char 分隔符
 * @returns
 */
exports.strap = function (str, char) {
    if (char) {
        return str.replace(new RegExp('^\\' + char + '+|\\' + char + '+$', 'g'), '');
    }
    return str.replace(/^\s+|\s+$/g, '');
};

/**
 *将json转成一个字段数组和一个值数组
 * 
 * @param {Object} json json对象
 * @returns {fieldArray，valueArray}
 */
exports.json2arrays = function (json) {
    let result = {
        fieldArray: [],
        valueArray: []
    };
    for (var key in json) {
        result.fieldArray.push(key);
        result.valueArray.push(json[key]);
    }
    return result;
}

exports.dealError=function(strErr){
    return {errcode:'9999',errmsg:strErr};
}