const express = require('express');
const server = express();

const port = 3535;
const host = "0.0.0.0"

server.get("/hello", (req, res, next) => {
    res.status(200).json({ message: 'world' })
})


server.listen(port, host, () => {
    console.log(`Server up&running at ${host}:${port}`)
})