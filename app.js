import express from "express";

const app = express();
const PORT = 3000;
function handleListening() {
    console.log(`Listening on: http://localhost:${PORT}`);
  }

  app.listen(PORT, handleListening);