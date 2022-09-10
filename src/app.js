const express = require('express');
// require('express-async-errors');
const cors = require('cors');
const skillRouter = require('./routes/skill.route');

const errorMiddleware = require('./middleware/error.middleware');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/skill', skillRouter);
app.use(errorMiddleware);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
