import config from '../config/app.config'
const sqlite3 = require('sqlite3').verbose()
let db;
const person = {
    init: function () {
        db = new sqlite3.Database(config.dbpath, (err) =>{
            if (err) {
              alert("没有找到数据库文件, 请重新安装!");
            }
        })
    },
    query_all: function () {
        if (db == undefined) this.init();
        let selSql = 'select * from person';
        db.all(selSql, [], function (err, rows) {
            if (err) {
                alert("查询数据库失败");
                return;
            }
            // var json_persons = {}
            for (var i = 0; i < rows.length; i++) {
                console.log(rows[i].name)
            }

        })
    }

}

export default person;