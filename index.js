const express = require('express');
const app = express();

const server = require('http').createServer(app);
const io = require('socket.io')(server);

const stock = require("./stock.js");

var unicoin = {
    name: "UniCoin",
    rate: 1.002,
    variance: 0.6,
    startingPoint: 16,
};

var bacoin = {
    name: "BaCoin",
    rate: 1.001,
    variance: 0.4,
    startingPoint: 13,
};

var icecreamcoin = {
    name: "IceCreamCoin",
    rate: 1.0015,
    variance: 0.6,
    startingPoint: 19,
};

var currencies = [unicoin, bacoin, icecreamcoin];

io.origins(['https://project.heidipatja.me:443', "http://localhost:3000"]);

io.on('connection', function(socket) {
    console.log('a user connected');
    socket.on('disconnect', function() {
        console.log('user disconnected');
    });
});

setInterval(function () {
    currencies.map((currency) => {
        currency["startingPoint"] = stock.getStockPrice(currency);
        return currency;
    });

    console.log(currencies);

    io.emit("currencies", currencies);
}, 3000);

server.listen(8383);

console.log('Socket server is running on port 8383')
