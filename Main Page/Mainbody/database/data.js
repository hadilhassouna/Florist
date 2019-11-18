const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const URI = "mongodb+srv://nours:nour1236@floristcluster-riqdf.mongodb.net/florist?retryWrites=true&w=majority"
mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true}); //, useMongoClient: true

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("We're Connected to database!");
});

const FlowerSchema = Schema({
  image1:{type: String}, 
  image2:{type: String}, 
  image3:{type: String},
  dprice:{type: Number},
  pprice:{type: Number},
  sprice:{type: Number},
  productifo: {type: String},

})

const Flower = mongoose.model('Flower', FlowerSchema);

const UserSchema = Schema({
  username: {type: String, unique: true},
  email: {type: String, unique: true},
  token: {type: String}
})

const User = mongoose.model('User', UserSchema);

let save = (flower) => {  
  var store = new Flower({
    image1: flower.image1,
    image2: flower.image2,
    image3: flower.image3,
    dprice: flower.dprice,
    pprice: flower.pprice,
    sprice: flower.sprice,
    productifo: flower.productifo
  })
  store.save();
}

let saveuser = (user) => {  
  var buyer = new User({
  username: user.username,
  email: user.email,
  token: user.token
  })
  buyer.save();
}

module.exports={Flower, User, save, saveuser};
