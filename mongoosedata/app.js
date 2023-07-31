const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/practice")
.then(()=>{console.log("connection successfull...")})
.catch((err)=>{console.log(err)});

// Schema.......

const playlistSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    ctype : String,
    videos : Number,
    author : String,
    active : Boolean,
    date : {
        type : Date,
        default : Date.now
    }
})

//Collection creation.....

const Playlist = new mongoose.model("Playlist",playlistSchema);


// Create document or insert...

const createDocument = async () =>{
    try{
        const jsPlaylist = new Playlist({
            name : "js",
            ctype : "front-end",
            videos : 10,
            author : "Kishan",
            active : true,
        })
        const nodePlaylist = new Playlist({
            name : "Node.js",
            ctype : "back-end",
            videos : 10,
            author : "Kishan",
            active : true,
        })
        const expressPlaylist = new Playlist({
            name : "express.js",
            ctype : "Back-end",
            videos : 10,
            author : "Kishan",
            active : true,
        })
        const mongoosePlaylist = new Playlist({
            name : "mongoose",
            ctype : "database",
            videos : 10,
            author : "Kishan",
            active : true,
        })
        let result = await Playlist.insertMany([jsPlaylist, nodePlaylist, expressPlaylist, mongoosePlaylist]);
        console.log(result);
    }catch(err){
        console.log(err);
    }
}

createDocument();
