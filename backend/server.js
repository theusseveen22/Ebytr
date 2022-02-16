const express = require('express')
const app = express()
const cors = require('cors');
const routerTasks = require('./routes/taksRouter')

app.use(cors());
app.use(express.json());

const PORT = 3001

app.use('/tasks', routerTasks);

app.listen(PORT, () => console.log(`Servidor conectado na porta ${PORT}`))