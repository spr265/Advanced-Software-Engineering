var express = require('express');
var app = express();

var collection = null;

var ObjectID = require('mongodb').ObjectID;

app.use(express.static('./public/'));

app.get('/get', function(req, res){

	collection.find().toArray(function(err, result){ //find = select in SQL

		if(err)
			throw err;
		else
			res.send(JSON.stringify(result));		
	});   
});


app.get('/delete/:s_id',function(req,res){
	var find={};

	if(req.params.s_id)
		find._id = new ObjectID(req.params.s_id);

		collection.remove(find,function(err,result){
			if(err)
				throw err;
			res.send('Delete Success');
		});
});


app.get('/insertSubject/',function(req,res){
	var newData = 
	{
		ssn : req.query.ssn,
		userName : req.query.userName,
		email : req.query.email,
		phno : req.query.phno
		
	};

	collection.insert(newData,function(err,result){
		if(err)
			throw err;
		else
			res.send("Insert Success !");
	});
});


app.get('/editSubject/:s_id',function(req,res){
	var find={};
	var newData={};

	if(req.params.s_id){
		find._id = new ObjectID(req.params.s_id);
	}
	if(req.query.ssn){
		newData.ssn = req.query.ssn;
	}
	if(req.query.userName){
		newData.userName = req.query.userName;
	}
	if(req.query.email){
		newData.email = req.query.email;
	}
	if(req.query.phno){
		newData.phno = req.query.phno;
	}

	collection.update(find,{'$set':newData},
		function(err,result){
			if(err)
				throw err;
			else
				res.send("Update success !");
	});
});


// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://user:user@ds135797.mlab.com:35797/lab10", function(err, db) {
  if(!err) {
  	collection = db.collection('User_DataBase'); // collection use to update,read,insert,delete
    console.log("We are connected 127.0.0.1");
    app.listen(3000);
  }
  else
  	throw err;
});
