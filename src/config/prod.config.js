/*
  生产环境配置
*/
const path = require("path")
import {remote} from 'electron'
export default {
    dbpath: path.join(remote.app.getAppPath(), '../db/jiapu.db'),       // sqlite 数据库文件路径
    pageTitle: '家谱管理系统',
};
