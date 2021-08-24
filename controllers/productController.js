var bodyParser=require('body-parser');
var urlencodedParser=bodyParser.urlencoded({extended:false});

var con=require('../models/db');
module.exports=function(app){

    app.get('/backlog',function(req,resp){
        
        var sql="SELECT * FROM tasks_table";
        con.query(sql, function (err, result) {
            if (err) throw err;
            // console.log("Result: " + JSON.stringify(result));
            // console.log(result[0].tasks_name);
            resp.render('backlog',{list:result});
          });


       // resp.render('backlog',{list:data});
    });
    // app.get('/cart',function(req,resp){
    //     resp.render('cart',{cartlist:cartItem});
    // });

    app.get('/cart',function(req,resp){
        
        var sql="SELECT * FROM cart_table";
        con.query(sql, function (err, result) {
            if (err) throw err;
            // console.log("Result: " + JSON.stringify(result));
            // console.log(result[0].tasks_name);
            resp.render('cart',{cartlist:result});
          });
        // resp.render('cart',{cartlist:cartItem});
    });





    app.post('/backlog',urlencodedParser,function(req,resp){
          
        // data.push(req.body);

        var sql="INSERT INTO tasks_table (tasks_name) VALUES ('"+req.body.item+"')";
        con.query(sql, function (err, result) {
            if (err) throw err;
           // console.log("Result: " + JSON.stringify(result));
            console.log("Rows Affected "+result.affectedRows);
            resp.render('backlog',{list:result});
          });
     
        
    });

    // [{id: 1, task: "asdad"}, {id: 2, task: 'adasd'}]
    // let data;
    // app.get('/get', (req, res) => {
    //     con.query("select * from table", function(err, result){
    //         this.data = result;
    //     })
    // })

    // app.delete('/backlog/:item',function(req,resp){
    //    data=data.filter(function(list){
    //         return list.item.replace(/ /g,'-')!=req.params.item;
    //    }); 
    //         resp.render('backlog',{list:data});
    //     });

    app.delete('/backlog/:item',function(req,resp){
       
        console.log("Test params"+req.params.item);
       
            var sql = "DELETE FROM todo.tasks_table WHERE tasks_name = '"+req.params.item+"'";
            con.query(sql, function (err, result) {
              if (err) console.log(err);
              console.log(result);
              console.log("Number of records deleted: " + result.affectedRows);
              resp.render('backlog',{list:result});
            });
        
             
         });
    
        // app.post('/cart',urlencodedParser,function(req,resp){
           
        //     cartItem.push(req.body);
        //          resp.render('cart',{cartlist:cartItem});
        //      });
        app.post('/cart',urlencodedParser,function(req,resp){
           
            console.log("Heyoooo")

            var sql="INSERT INTO cart_table (tasks_name) VALUES ('"+req.body.item+"')";
            con.query(sql, function (err, result) {
                if (err) throw err;
               // console.log("Result: " + JSON.stringify(result));
                console.log("Rows Affected "+result.affectedRows);
                resp.render('cart',{cartlist:result});
              });
            
            
                });    


                app.delete('/cart/:item',function(req,resp){
       
                    console.log(req.params.item);
                   
                        var sql = "DELETE FROM cart_table WHERE tasks_name = '"+req.params.item+"'";
                        con.query(sql, function (err, result) {
                          if (err) throw err;
                          console.log("Number of records deleted: " + result.affectedRows);
                          resp.render('cart',{cartlist:result});
                        });
                    
                         
                     });



};