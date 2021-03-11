var express = require('express');
var Todo = require("../models/todo");
var HTMLParser = require('node-html-parser');

var router = express.Router();


router.get('/', function(req, res, next) {

    Todo.find().then((todos) => {
        res.json(todos);
    }).catch((err) => {
        res.json(err);
    });

});

router.post("/", function(req, res, next){
    var html = JSON.stringify(req.body.html);
    console.log(html)

    var root = HTMLParser.parse(html);
    var all = root.toString();

    console.log(root.querySelector('body'))
    console.log(all)

    new Todo({
        title: all,
        date: req.body.date,
        completed: req.body.completed,
    }).save().then(() => {
        res.json(all);
    }).catch((err) => {
        res.json(err);
    });



});

router.put("/:id", function(req, res, next){

    var id = req.params.id;

    Todo.findByIdAndUpdate({"_id": id}, req.body).then((newTodo) => {
        res.json("Güncelleme İşlemi Başarılı.");
    }).catch((err) => {
        res.json("Güncelleme İşleminde Hata Oluştu.");
    });

});


router.delete("/:id", function(req, res, next){

    var id = req.params.id;
    Todo.findByIdAndRemove(id).then(() => {
        res.json("Silme İşlemi Başarılı.");
    }).catch((err) => {
        res.json("Silme İşleminde Hata Oluştu.");
    });

});


module.exports = router;