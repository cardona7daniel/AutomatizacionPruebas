// var express=require("express");
// var bodyParser=require("body-parser");
// var mysql = require('mysql');
// var app=require('../app');
// var router = express.Router();
//
// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'pruebas',
//     port: 3306
// });
//
// var resultado;
// router.post('/guardarapp', function(req, res){
//
//     connection.query("SELECT * FROM pasos", function (error, result) {
//             if (error) {
//                 throw error;
//             } else {
//                 resultado=result;
//                 console.log(result);
//             }
//         }
//     );
//
// });


// exports.edit = function(req, res){
//
//     var id = req.params.id;
//
//     req.getConnection(function(err,connection){
//
//         connection.query('SELECT * FROM customer WHERE id = ?',[id],function(err,rows)
//         {
//
//             if(err)
//                 console.log("Error Selecting : %s ",err );
//
//             res.render('edit_customer',{page_title:"Edit Customers - Node.js",data:rows});
//
//         });
//
//     });
// };


// exports.save = function(req,res){
//
//     var input = JSON.parse(JSON.stringify(req.body));
//
//     req.getConnection(function (err, connection) {
//
//         var data = {
//             id    : input.id,
//             nombre : input.nombre,
//             descripcion  : input.descripcion
//         };
//
//         var query = connection.query("INSERT INTO customer set ? ",data, function(err, rows)
//         {
//
//             if (err)
//                 console.log("Error inserting : %s ",err );
//
//             res.redirect('/customers');
//
//         });
//
//         // console.log(query.sql); get raw query
//
//     });
// };/*Save edited customer*/
// exports.save_edit = function(req,res){
//
//     var input = JSON.parse(JSON.stringify(req.body));
//     var id = req.params.id;
//
//     req.getConnection(function (err, connection) {
//
//         var data = {
//
//             name    : input.name,
//             address : input.address,
//             email   : input.email,
//             phone   : input.phone
//
//         };
//
//         connection.query("UPDATE customer set ? WHERE id = ? ",[data,id], function(err, rows)
//         {
//
//             if (err)
//                 console.log("Error Updating : %s ",err );
//
//             res.redirect('/customers');
//
//         });
//
//     });
// };
//
// exports.delete_customer = function(req,res){
//
//     var id = req.params.id;
//
//     req.getConnection(function (err, connection) {
//
//         connection.query("DELETE FROM customer  WHERE id = ? ",[id], function(err, rows)
//         {
//
//             if(err)
//                 console.log("Error deleting : %s ",err );
//
//             res.redirect('/customers');
//
//         });
//
//     });
// };
