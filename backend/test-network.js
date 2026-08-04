const net = require("net");

const socket = net.createConnection({
    host: "16.58.187.204",
    port: 5432,
    family: 4,
    timeout: 10000,
});

socket.on("connect", () => {
    console.log("✅ Node can reach Neon over IPv4!");
    socket.destroy();
});

socket.on("timeout", () => {
    console.log("❌ Node connection timed out");
    socket.destroy();
});

socket.on("error", (error) => {
    console.error("❌ Node network error:");
    console.error(error);
});
