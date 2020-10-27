const options = {
  /* ... */
};
const io = require("socket.io")(options);

io.on("connection", (socket) => {
  socket.on("joinChat100", () => {
    socket.join("room1", () => {
      io.to("room1").emit("update", "Welcome to the room");
    });
  });
  socket.on("joinChat200", () => {
    socket.join("room2", () => {
      io.to("room2").emit("update", "Welcome to the room");
    });
  });
});

io.listen(5004);
