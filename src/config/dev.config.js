/*
  dev环境配置
*/
const path = require("path")

export default  {
    dbpath: path.join(__static, 'jiapu.db'),     // 数据库地址
    withCredentials: true,
    pageTitle: '家谱管理系统',
};