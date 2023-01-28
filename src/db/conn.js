const mongoose = require('mongoose');


mongoose.set('strictQuery', true);
mongoose.connect("mongodb://localhost:27017/DemoRegistration").then(() =>{
    console.log(`connection succesfull  `);
}).catch((e) =>{
    console.log(e);
});


