const express = require('express');
const app = express();

const MongoClient = require('mongodb').MongoClient
const uri = "mongodb+srv://omarmayousef:G7IQyLiT1OKcn0Lj@cluster0.shg8nan.mongodb.net/?retryWrites=true&w=majority";



app.get("/rooms", async (req, res) => {

    const client = await MongoClient.connect(uri);
    console.log("connected");
    const db = client.db('analysis_db');
    const collection = db.collection('analysis_coll');
    const rooms= await collection.findOne({item:'rooms'});
    console.log(rooms.number);
    client.close();
    res.send({'rooms':rooms.number});
    
});

app.get("/players", async (req, res) => {

    const client = await MongoClient.connect(uri);
    console.log("connected");
    const db = client.db('analysis_db');
    const collection = db.collection('analysis_coll');
    const players= await collection.findOne({item:'players'});
    console.log(players.number);
    client.close();
    res.send({'players':players.number});


});


app.get("/update", async (req, res) => {

    const client = await MongoClient.connect(uri);
    console.log("connected");
    const db = client.db('analysis_db');
    const collection = db.collection('analysis_coll');
    const result= await collection.findOneAndUpdate({item:'players'},{$inc:{number:1}});
    client.close();
    res.send({'status':'True'});



});


app.listen(3000);