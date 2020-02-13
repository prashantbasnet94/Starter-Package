"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// app/server.ts
var app_1 = __importDefault(require("./app"));
// const port = process.env.PORT || 3000;
var server = app_1.default.listen(3000);
var express = require('express')();
var io = require('socket.io').listen(server);
//# sourceMappingURL=server.js.map