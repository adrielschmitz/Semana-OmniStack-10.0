const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')
const cors = require('cors');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-ajht8.mongodb.net/week10?retryWrites=true&w=majority', {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
// Query params: request.query (Filtros, ordenação, paginação...)
// Route params: request.params (identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

//MongoDB
