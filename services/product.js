import { api } from '.'

const ProductService = {
    list({
        offset = 0,
        limit = 20,
        special,
        search,
        is_new,
        sortBy,
        order,
        min_price,
        max_price = 50000000,
        ...restParam
    } = {}) {
        return api.call().get(`/mobile/products`,{
            params : {
                offset,
                search,
                limit,
                special,
                is_new,
                sortBy,
                order,
                min_price,
                max_price,
                ...restParam
            }
        })
    },
    getSingle({
        id,
        ...restParam
    } = {}) {
        return api.call().get(`/mobile/products/${id}`,{
            params : {
                id,
                ...restParam
            }
        })
    }
}

export default ProductService;