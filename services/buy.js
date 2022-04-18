import { api } from '.'

const BuyService = {
    buy({
        data,
        ...restParam
    } = {}) {
        return api.call().post(`/mobile/orders/save`,{
            data,
            ...restParam
        })
    },
    list({
        code,
        ...restParam
    } = {}) {
        return api.call().get(`/mobile/orders/${code}`,{
            params : {
                code,
                ...restParam
            }
        })
    },
}

export default BuyService;