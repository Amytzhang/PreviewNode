// const WebSocket = require("ws");
// const wss = new WebSocket.Server({ port: 8080 });
// wss.on("connection", (ws) => {
//   console.log("client connected");
//   ws.on("message", (message) => {
//     console.log("Received:" + message);
//     wss.clients.forEach((element) => {
//       if (element !== ws && element.readyState === WebSocket.OPEN) {
//         element.send("Broadcast" + message);
//       }
//     });
//   });
//   ws.on("close", () => {
//     console.log("client disconnected");
//   });
// });
