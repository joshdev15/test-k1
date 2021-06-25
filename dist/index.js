"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = exports.run = void 0;
const axios = require('axios');
const baseURL = 'https://swapi.dev/api/';
const run = async (category = 'people/1') => {
    const response = await axios.get(`${baseURL}${category}`);
    return response.data;
};
exports.run = run;
const test = (text) => {
    return text;
};
exports.test = test;
exports.default = {
    run: exports.run,
    test: exports.test
};
//# sourceMappingURL=index.js.map