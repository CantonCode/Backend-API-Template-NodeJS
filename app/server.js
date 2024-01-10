const express = require('express');
const mongoose = require('mongoose');
const { MONGO_URI } = require('./config');
require("dotenv").config();
const swagger = require('./swagger')
 
const app = express();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const errorHandler = require('./_middleware/error-handler');

var cors = require('cors');

// use it before all route definitions
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

app.use(cors({credentials: true, origin: ['*']}));

const PORT = process.env.NODE_DOCKER_PORT || 8080

//BodyParser Middleware
app.use(express.json());

app.get('/',(req,res) => { 
    res.send("Hello from Node")
});

mongoose.connect(MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB Connected'))
    .catch(err=> console.log(err));

// app.use('/projects', require('./routes/project/project.controller'));
// app.use('/jobs', require('./routes/job/job.controller'));
// app.use('/api/jobs',jobRoutes);
// app.use('/accounts', require('./routes/account/account.controller'));
app.use('/items', require('./routes/item/item.controller'));
app.use(errorHandler);

swagger(app);

app.listen(PORT,() => console.log('ruinning on port ' + PORT));