import express from 'express'
import { createServer } from "http"
import { Server } from "socket.io"
import cors from 'cors'

const app= express()
app.use(cors())
const httpServer= createServer(app)
const io= new Server(httpServer, {
    cors: {
        origin: "*"
    }
})


io.on("connection", (socket) => {
	socket.emit("me", socket.id);
	console.log(socket.id)
	socket.on("disconnect", () => {
		socket.broadcast.emit("callEnded")
	});

	socket.on("callUser", ({ userToCall, signalData, from, name }) => {
		io.to(userToCall).emit("callUser", { signal: signalData, from, name });
	});

	socket.on("answerCall", (data) => {
		io.to(data.to).emit("callAccepted", data.signal)
	});
});

httpServer.listen(5000, ()=> console.log("Server run on post 5000"))