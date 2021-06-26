import Pokemon from './src/api/pokemon';
export { Pokemon };
declare const _default: {
    Pokemon: {
        getByName: (name: string) => Promise<any>;
        getByID: (id: string) => Promise<any>;
    };
};
export default _default;
