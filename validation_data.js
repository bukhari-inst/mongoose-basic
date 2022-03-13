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

// input data tunggal
const mangga = new fruit({
  name: 'Mangga',
  rating: 11,
  review: 'Rasanya manis',
});

mangga.save(function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log('Berhasil simpan buah mangga ke dalam database');
  }
});
