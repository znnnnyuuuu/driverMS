const db = require('./db.js');

exports.showDriver = (req, res) => {
    let sql = 'select * from drivers order by grid'
    db.base(sql, null, (results) => {
        res.render('index', {
            list: results,
        })
    })
}

exports.addDriver = (req, res) => {
    let sql = 'insert into drivers set?';
    let data = req.body;
    db.base(sql, data, (results) => {
        if (results.affectedRows == 1) {
            res.redirect('/');
        }
    });
}

exports.reviseDriver = (req, res) => {
    let sql = 'update drivers set team=?,name=?,score=?,grid=? where number=?'
    let info = req.body;
    let data = [info.team, info.name, info.score, info.grid, info.number];
    db.base(sql, data, (results) => {
        if (results.affectedRows == 1) {
            res.redirect('/');
        }
    })
}

exports.deleteDriver = (req, res) => {
    let sql = 'delete from drivers where number=?'
    let info = req.query.number;
    let data = [info];
    db.base(sql, data, (results) => {
        if (results.affectedRows == 1) {
            res.redirect('/');
        }
    })
}