// load express for our back-end
const express = require('express')
const mongoose = require('mongoose')
// this allows to control the app's Cross origin resource Sharing
const cors = require('cors')
const courseRoutes = require('./routes/courseRoutes');


const app = express();
// we create an app variable that store results of the express function that initialize our express apllication and allow us to access different methods that will make back-end creation easy

mongoose.connect('mongodb+srv://admin:forthegame123@sandbox.y0vqcrf.mongodb.net/an22_sample_database?retryWrites=true&w=majority',{
	useNewUrlParser: true,
	useUnifiedTopology: true
});
mongoose.connection.once('open', () => console.log('Now connected to MongoDB Atlas.'))

// allows all resource
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// define the /users string to be included for all users routes defined in the 'users' routes file
app.use('/course', courseRoutes);

app.listen(process.env.PORT || 5000, () => { 
	console.log(`Server Running on Localhost: ${ process.env.PORT || 5000}`)
})

