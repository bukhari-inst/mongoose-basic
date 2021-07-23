const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/db-mongoose', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
});

const fruit = mongoose.model('fruit', fruitSchema);

// input data tunggal
// const apple = new fruit({
//   name: 'Apple',
//   rating: 8,
//   review: 'Rasanya manis',
// });

// apple.save(function (error) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Berhasil simpan buah apple ke dalam database');
//   }
// });

// input data banyak
const kiwi = new fruit({
  name: 'Kiwi',
  rating: 10,
  review: 'Buah yang terbaik',
});

const jeruk = new fruit({
  name: 'Jeruk',
  rating: 5,
  review: 'Asem rasanya',
});

const pisang = new fruit({
  name: 'Pisang',
  rating: 6,
  review: 'Manis dan menyegarkan',
});

fruit.insertMany([kiwi, jeruk, pisang], function (error) {
  if (error) {
    console.log(error);
  } else {
    mongoose.connection.close();
    console.log('Berhasil simpan buah kiwi, jeruk, pisang ke dalam database');
  }
});
