const express = require('express');
const app = express();
const body_parser = require('body-parser'); 



app.use(body_parser.json());

// Start server
app.listen(3000, ()=> console.log('server is up and running'));


// import trips history route
const trips_routes = require('./Routes/Trip_history');
app.use('/Trips', trips_routes);

// import edit info route
const edit_info_routes = require('./Routes/Edit_info');
app.use('/Editinfo', edit_info_routes);

// import ride route
const ride_route = require('./Routes/Ride');
app.use('/ride', ride_route);

