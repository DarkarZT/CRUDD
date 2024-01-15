const express = require ('express');
const morgan = require ('morgan');

//Importar rutas 

const taskRoutes = require('./routes/tasks.routes');
const app = express();
app.use(morgan('dev'))

//Utilizar rutas
app.use(taskRoutes);
//creo el puerto del servidor

app.listen(4000)
console.log('server on port 4000')