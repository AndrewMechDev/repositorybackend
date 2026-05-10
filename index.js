require("dotenv").config();
const http = require("http");

const requestController = (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Bienvenidos al curso");
};

const server = http.createServer(requestController);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log("Aplicacion corriendo en:", PORT);
});