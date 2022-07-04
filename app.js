
//Lo primero importar express para conectar con el servidor
//Que el motor de express se conecte con la carpeta public para acceder a los recursos dfdfsfsf

const exoress = require('express');

const app = express();

const path = require('path');

const port = 3030;





app.listen(port , () => {console.log("Server corriendo")});

app.get(path.join( __dirname , 'view/'))
