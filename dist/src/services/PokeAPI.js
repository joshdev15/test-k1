"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const baseURL = 'https://pokeapi.co/api/v2/';
const PokeAPI = axios_1.default.create({
    baseURL
});
exports.default = PokeAPI;
//# sourceMappingURL=PokeAPI.js.map