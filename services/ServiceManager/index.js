export default class ServiceManager {
    constructor() {
        console.log('ServiceManager')
        const path = 'services/ProductService/index.js'
        // import(/* webpackMode: eager */`~/${path}`).then(definition => new definition.default());
    }

    async load() {
        const path = 'services/ProductService/index.js'
        const definition = await import(/* webpackMode: eager */`~/${path}`);
        new definition.default();
    }
}