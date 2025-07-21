import express from 'express';
const app = express()
app.get("/", (req, res) => {res.send("Bienvenido a mi API REST!");});



const PORT = 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`)); //Creo servidor con express y en linea 3 agrego una ruta básica para que funcione
