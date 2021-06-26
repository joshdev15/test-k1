"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPokemon = void 0;
const PokeAPI_1 = require("../services/PokeAPI");
const localRoute = 'pokemon';
const getPokemon = async (name) => {
    console.log(name);
    try {
        const response = await PokeAPI_1.default.get(`${localRoute}/${name}`);
        return response;
    }
    catch (err) {
        return err;
    }
};
exports.getPokemon = getPokemon;
exports.default = {
    getPokemon: exports.getPokemon
};
//# sourceMappingURL=pokemon.js.map