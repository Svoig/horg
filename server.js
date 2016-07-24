"use strict";

const express = require("express");

const app = express();

const port = (process.env.PORT || 8000);

app.get("/", function(req, res) {

	const rgbd = new Date("March 23, 1965 12:00:00");
	const now = Date.now();

	let horg = now - rgbd;

	horg = Math.floor((horg / 1000) / 31536000);
	res.send("<h1>Richard Grieco " + horg + " </h1>");
});

app.listen(port, function() {
	console.log("HORG is running on: ", port);
});