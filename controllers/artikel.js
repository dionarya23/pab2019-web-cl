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
            console.log("Result Ini : ", result);
            console.log("fields Ini : ", fields);
            res.render('artikel', {artikel: result[0]});
        })
    },

    newArtikel(req, res) {
        const {
            title,
            content,
        } = req.body

        const query = `INSERT INTO artikel(title, content) VALUES("${title}","${content}")`;

        db.query(query, function(err, result, fields) {
            if (err) {
                res.json({
                    message: err
                })
            } else {
                res.redirect("/")
            }
        })
    },

    showAdd(req, res) {
        res.render('post');
    }
}