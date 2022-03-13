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

// fruit.updateOne(
//   { _id: '622d5aa4127b5a1b2474d77d' },
//   { name: 'Nanas' },
//   function (error) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Berhasil update data mangga menjadi nanas');
//     }
//   }
// );

fruit.deleteOne({ name: 'Nanas' }, function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log('Berhasil delete data nanas');
  }
});

fruit.find(function (error, fruits) {
  if (error) {
    console.log(error);
  } else {
    mongoose.connection.close();

    console.log('Data buah setelah berhasil didelete');

    fruits.forEach(function (fruit) {
      console.log(fruit.name);
    });
  }
});
