import axios from 'axios'
const PRODUCT_API_BASE_URL ='http://localhost:8080/products'
class AxiosCall{

    getProducts() {
        return axios.get(PRODUCT_API_BASE_URL);
    }

    findProduct(productId) {
    return axios.get(PRODUCT_API_BASE_URL+`/${productId}`);
    }
    
    addProduct(product){
        return axios.post(PRODUCT_API_BASE_URL,product);
    }

    updateProduct(product,productId){
        return axios.put(PRODUCT_API_BASE_URL+`/${productId}`,product);
    }

    deleteProduct(productId){
        return axios.delete(PRODUCT_API_BASE_URL+`/${productId}`);
    }

}
export default new AxiosCall