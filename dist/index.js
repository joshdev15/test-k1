"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saludo = exports.run = void 0;
const axios = require('axios');
const baseURL = 'https://swapi.dev/api/';
const run = async (category = 'people/1') => {
    const response = await axios.get(`${baseURL}${category}`);
    return response.data;
};
exports.run = run;
const saludo = (name) => {
    return `Hola, mi nombre es ${name}`;
};
exports.saludo = saludo;
exports.default = {
    run: exports.run,
    saludo: exports.saludo
};
//# sourceMappingURL=index.js.map