var admin = require("firebase-admin");
const express = require('express')
const app = express();
const morgan = require ('morgan');
const request = require('request');
var cors = require('cors');
const cron = require('node-cron');
var precio;
var rtaCreateSigner;
var rtaGetWalletBalance;
var token;
var serviceAccount = require("./serviceAccountKey.json");
const firebase = require('firebase-admin');
const uuidv4 = require('uuid/v4');

var task = cron.schedule('*/30 * * * * *', () =>  {
  console.log(' Precio BTC '+
  new Date().getMinutes() + ":" + new Date().getSeconds()+ " "+precio);
  createToken();
  try {
    precio=precioActual();
  }
  catch(error) {
    console.error(error);
   }
});
   
//Middleware
app.use(morgan('dev'))
app.use(cors()); 
app.use(express.json());

app.get('/', function (req, res) { 
    contents = "Hola mundo API";
    res.end(contents);
  });

app.post('/login', function(req, res) {
    //var auth = appFB.auth();
    var user_name = req.body.user_name;
    var password = req.body.password;
    var action = req.body.action;

    bitacora(req.body, (data) => {
      console.log(data);
    });
    res.end('Successful access');
});

function bitacora(req, cb){
  var bitacoraRef = ref.child("bitacora");
  var id = uuidv4();
  var all_request = JSON.parse('{"'+id+'":'+JSON.stringify(req)+'}');
  console.log(all_request);
    // ... Clone the object avoiding sending all_request.
    bitacoraRef.update({
    ...all_request
  });   

  cb('Successful');
};

app.get('/token', (req, res) => {
  createToken();
});

app.get('/prueba', (req, res1) => {
    precio1=precio;

      res1.json({
        'precio':precio1
    }
  );
});

app.get('/create-signer', (req, res1) => {
  createSigner();
  console.log("create signer: "+rtaCreateSigner);
      res1.json({
        'Status: ':rtaCreateSigner
    }
  );
});

app.post('/get-wallet-balance', (req, res1) => {
  getWalletBalance(req.body.currency, (data) => {
    console.log("get wallet balance: "+data);
        res1.json({
          Balance:data
      }
    );
  });
});

function createSigner(){
  var myJson= {    
    labels:{
      domain: "datalica",
      name:"Jairo Reyes"
    }
  }
  var headersOpt = {  
    "content-type": "application/json",
    "Authorization": "Bearer " + token
  };
  
  request(
        {
        method:'post',
        url:'https://api-tst.minka.io/v1/signer',
        headers: headersOpt,
        json: myJson,
    }, function (error, response, body) {  
        //Print the Response
        console.log(body);  
        rtaCreateSigner = body.error.message;
        console.log("Respuesta: "+body.error.message);
        //return body.error.message;
  }); 
}

function getWalletBalance(currency, cb){
  var headersOpt = {  
    "content-type": "application/json",
    "Authorization": "Bearer " + token
  };
  request(
    {
      method:'get',
      url:'https://api-tst.minka.io/v1/wallet/$banco_minka/balance?unit=$'+currency,
      headers: headersOpt,
      json: true,
    }, function (error, response, body) {  
        console.log(body.status);
        cb(body.amount);  
    }); 
}

function createToken(){
  var form = {
    client_id: 'dF91bb557B2e6ad7B6DBf729f3d23EEa',
    secret: 'AFcc2EB8c12A3a07fcB5EaD365c83dC8d78e8FBa6FABA963',
    grant_type: 'client_credentials'
};

  request.post('https://api-tst.minka.io/oauth/token', { form: form }, (err, res, body) => {
      if (err) { return console.log(err); }
      token = JSON.parse(body).access_token;
      console.log(token);      
  }); 
  return token;
}

function precioActual(){
  
    request('https://localbitcoins.com/bitcoinaverage/ticker-all-currencies/', { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
        try{
        precio = body.COP.rates.last;
        }
        catch (err){
          console.log("Error precio actual "+err);
        }
      }); 
    return precio;
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://minka-hack-data.firebaseio.com"
});

var db = firebase.database();
var ref = db.ref("restricted_access/secret_document");
ref.once("value", function(snapshot) {
  console.log(snapshot.val());
});

var usersRef = ref.child("users");

// Basic users
usersRef.set({
  "1aa501b4-26de-4f38-b884-19d32c2b3132":
   {
    id_client: "alanisawesome",
    date_of_birth: "June 23, 1912",
    full_name: "John Wick",
    user_name: "johnwick",
    password: "Hide",
    email : "johnwick@gmail.com"
  },
  "f9b5cf04-a455-4193-9e32-0593966b76ef": {
    id_client: "gracehop",
    date_of_birth: "December 9, 1906",
    full_name: "Minka ass",
    user_name: "banco_minka",
    password: "Hide",
    email : "Minka_hack@gmail.com"
  }
});

app.get('/generate-id',(req,res) => {
  var id = uuidv4();
  console.log(id);
  res.end(id);
});

app.get('/test', (req, res) => {  
   // This funcion contain learned lessons 
   /*
     // Get all information
     console.log("All information of all users");
    ref.on("value", function(snapshot) {
      console.log(snapshot.val());
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });        
  */
    
  /*
    console.log("key of Information of a field");
    var search_by_name = "Grace Hopper";

    ref.child('users').orderByChild('full_name').equalTo(search_by_name).on("value", function(snapshot) {
      // console.log(snapshot.val());
      snapshot.forEach(function(data){
        rta = data.key;
        console.log(rta);
        res.end(search_by_name +": "+ rta);
      });
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
  */

 console.log("Subquery val of Information of a field");
 //var search_by_name = "Grace Hopper";
 var search_by_name = "gracehop";

 ref.child('users').orderByChild('id_client').equalTo(search_by_name).on("value", function(snapshot) {
   // console.log(snapshot.val());
   snapshot.forEach(function(data){
     rta = data.val().date_of_birth;
     console.log(rta);
     res.end(search_by_name +": "+ rta);
   });
 }, function (errorObject) {
   console.log("The read failed: " + errorObject.code);
 });
  
/*
  // Error,  structured
 console.log("Val of Information of a field by key");
 var search_by_name = "gracehop";

 ref.Child('users').equalTo(search_by_name).on("value", function(snapshot) {
   console.log(snapshot.val());
   snapshot.forEach(function(data){
     //rta = data.val().date_of_birth;
     rta = data.key;
     console.log(rta);
     res.end(search_by_name +": "+ rta);
   });
 }, function (errorObject) {
   console.log("The read failed: " + errorObject.code);
 });
*/
});

app.get('*', (req, res) => {
    res.end('Archivo no encontrado :(');
});

app.listen(process.env.PORT || 5000, ()=>{
    console.log('Servidor Funcionando: 127.0.0.1:5000');
    precioActual();
    createToken();
  });