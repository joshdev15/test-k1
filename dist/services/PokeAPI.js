"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var baseURL = 'https://pokeapi.co/api/v2/';
var PokeAPI = axios_1["default"].create({
    baseURL: baseURL
});
exports["default"] = PokeAPI;
//# sourceMappingURL=PokeAPI.js.map