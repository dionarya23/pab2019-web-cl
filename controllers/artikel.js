const db = require('../config/connection');

module.exports = {
    home(req, res) {
        const query = "SELECT * FROM artikel";
        db.query(query, function (err, result, fields) {
            res.render('home', {artikels: result});
        })
    },

    getOneArtikel(req, res) {
        const query = "SELECT * FROM artikel WHERE id_artikel="+req.params.artikel_id;
        db.query(query, function(err, result, fields) {
            res.render('artikel', {artikel: result});
        })
    },

    newArtikel(req, res) {
        const {
            title,
            content,
            date,
            author
        } = req.body

        const query = `INSERT INTO artikel(title, content, author, date) VALUES(${title}, ${content}, ${date}, ${author})`;

        db.query(query, function(err, result, fields) {
            res.redirect('/');
        })
    },
    showAdd(req, res) {
        res.render('post');
    }
}