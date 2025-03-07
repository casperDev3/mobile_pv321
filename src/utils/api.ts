import {BASE_URL_FAKE_STORE} from "../constants/urls.ts";

class Api{
    private base_url_store: string;
    constructor() {
        this.base_url_store = BASE_URL_FAKE_STORE;
    }
    async getAll(endpoint: string): Promise<Response> {
        let product = await fetch(`${this.base_url_store}/${endpoint}`);
        product = await product.json();
        return product;
    }
}

// singleton
const api = new Api();
export default api;
