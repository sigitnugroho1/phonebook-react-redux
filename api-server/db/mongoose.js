const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/react-bread', {
   useNewUrlParser: true,
   useCreateIndex: true,
   useFindAndModify: false
})