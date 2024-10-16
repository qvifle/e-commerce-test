class ProductsService {
  private baseUrl = process.env.NEXT_PUBLIC_API_URL + "/products";

  async getProducts() {
    return fetch(this.baseUrl);
  }
}

const productService = new ProductsService();
export default productService;
