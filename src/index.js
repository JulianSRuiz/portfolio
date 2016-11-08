// const express = require('express');
// const session = require('express-session');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const passport = require('passport');
// const VimeoStrategy = require('passport-vimeo-oauth2').Strategy;
// const config = require('./server/config/config.js');
// const mongoose = require('mongoose');
// const mongoUri = config.mLabUri;
// import User from "./server/features/users/User.js"
// const app = express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

const port = 4000;

app.listen(port, () => console.log("listening on " + port))
