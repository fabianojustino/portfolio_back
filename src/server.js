const app = require('./app');
require('dotenv').config();

const port = process.env.PORT || 3001;

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.listen(port, () => console.log('ouvindo porta', port));