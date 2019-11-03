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
            var persons = new Array();
            for (var i = 0; i < rows.length; i++) {
                var person = new PersonModel();
                person.id = rows[i].id;
                person.name = rows[i].name;
                person.sex = rows[i].sex;
                person.avatar = rows[i].avatar;
                person.mate_name = rows[i].mate_name;
                person.mate_sex = rows[i].mate_sex;
                person.mate_avatar = rows[i].mate_avatar;
                persons.push(person);
            }
            console.log(persons);
        })
    }
}

function PersonModel() {
    this.id = 0;
    this.name = "";
    this.sex = "";
    this.mate_name = "";
    this.mate_sex = "";
    this.mate_avatar = "";
    this.avatar = "";

}


export default person;