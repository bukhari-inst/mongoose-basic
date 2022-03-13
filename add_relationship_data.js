const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/db-mongoose', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Data name tidak ada, please isi ya!!'],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

const fruit = mongoose.model('fruit', fruitSchema);

const peopleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Data name tidak ada, please isi ya!!'],
  },
  age: {
    type: Number,
  },
  favoriteFruit: fruitSchema,
});

const People = mongoose.model('people', peopleSchema);

// input data tunggal
const fruitDuku = new fruit({
  name: 'Duku',
  rating: 8,
  review: 'Rasanya manis',
});

fruitDuku.save(function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log('Berhasil simpan buah duku ke dalam database');
  }
});

const people = new People({
  name: 'Bukhari',
  age: 24,
  favoriteFruit: fruitDuku,
});

people.save(function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log('Berhasil cretae bukhari relationshipnya dengan duku');
  }
});
