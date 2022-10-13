const mongoose = require("mongoose");

// Replace this with your MONGOURI.
const MONGOURI = "mongodb+srv://admin:020593@cluster0.rrtec.mongodb.net/myFirstDatabase?retryWrites=true";
const InitiateMongoServer = async () => { 
  try {
    await mongoose.connect(MONGOURI, {
    useNewUrlParser: true,
    });
    console.log("Connected to DB !!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const MONGOURI = "mongodb+srv://admin:<password>@cluster0.rrtec.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// const InitiateMongoServer = async () => client.connect(err => {

//     const collection = client.db("Demo_nodejs").collection("devices");
   
//   // perform actions on the collection object
//   client.close();
// });

module.exports = InitiateMongoServer;