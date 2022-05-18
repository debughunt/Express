const mongoose = require('mongoose');

mongoose.connect('randomcodesopeopledonthackme', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=> console.log('Connected to DB'))
    .catch(err=> console.log(`There was an error: ${err}`));

