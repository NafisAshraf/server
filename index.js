import express from 'express';
import { Server } from 'socket.io';
import { createServer } from 'http';

const port = 3000;

const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3001",
        methods: ["GET", "POST"]
    },
}
  );

// app.get('/', (req, res) => {
//     res.send('Hello World!');
//     });

io.on('connection', (socket) => {
    console.log('a user connected');
    console.log("ID: ", socket.id);
});

server.listen(port, () => {
  console.log('Server is running on port 3000');
});

