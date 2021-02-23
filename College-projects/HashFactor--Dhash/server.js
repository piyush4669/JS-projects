var Express = require('express');
var multer = require('multer');
var bodyParser = require('body-parser');
const imgFolder = './Images/';
const fs = require('fs');
const imageHash = require('image-hash');
const SHA256 = require("crypto-js/sha256");
var dhash = require('dhash');

var app = Express();
app.use(bodyParser.json());


app.use(Express.static('public'));
//Utility function
function HammingDistance(s1 , s2) {
  // store the final count
  var count = 0;
  // loop through one of the strings and check to see if
  // each character from both words matches up
  for (var i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      count++;
    }
  }

 return count;

}

var saturationVal = 8;
var bitLength = 8;
//BlockChain Implementation

class Block {
    constructor(index, timestamp, data, previousHash = '') {
        this.index = index;
        this.previousHash = previousHash;
        this.timestamp = timestamp;
        this.data = data;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }

    calculateHash() {
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce).toString();
    }

    mineBlock(difficulty) {
        while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
            this.nonce++;
            this.hash = this.calculateHash();
        }
        console.log("BLOCK MINED: " + this.hash);
    }
}

class Blockchain{
    constructor() {
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 2;
    }

    createGenesisBlock() {
        return new Block(0 , Date.now() + "" , "Genesis block" , "0");
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    chainLen() {
          return this.chain.length
    }

    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.mineBlock(this.difficulty);
        this.chain.push(newBlock);
    }

    isChainValid() {
        for (let i = 1; i < this.chain.length; i++){
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }

            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }
        }
        return true;
    }

    checkHash(data) {
        for (let i = 1; i < this.chain.length; i++){
            let currentBlock = this.chain[i];
            let hd = HammingDistance(currentBlock.data,data);
            if (hd <= saturationVal ) {
                return true;
            }
        }
        return false;
    }
}

let piyushCoin = new Blockchain();
//Uploading the Images On blockChain

var currentFile;
var currHash;

var Storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "./Images");
    },
    filename: function (req, file, callback) {
        currentFile = file.fieldname + "_" + Date.now();
        callback(null, currentFile);
    }
});


var upload = multer({ storage: Storage }).array("imgUploader", 1); //Field name and max count



app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/api/Upload", function (req, res) {
     upload(req, res, function (err) {
        if (err) {
            console.log(err);
            return res.end("Something went wrong in image upload!");
        }

//        imageHash("./Images/" + currentFile , 16, true, (error, hash) => {
          dhash("./Images/" + currentFile, function(err, hash){
          if (err) throw err;
          if(piyushCoin.isChainValid()){

               if(piyushCoin.checkHash(hash)){
                  fs.unlinkSync("./Images/" + currentFile);
                  return res.end("Image already exists on blockChain");
               }else{
                    piyushCoin.addBlock(new Block(Math.random() , Date.now() + "" , hash));
                    console.log("Length : " + piyushCoin.chainLen());
                    console.log(hash);
                    return res.end("Image Has been added to BlockChain");
               }

          }else{
            return res.end("BlockChain has been tampered");
          }
        },bitLength);
  //      });



    });
});

app.listen(8000, function (a) {
    console.log("Listening to port 8000");
});
