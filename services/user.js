import { api } from '.'

const UserService = {
    get({
        ...restParam
    } = {}) {
        return api.call().get(`/auth/me`,{
            params : {
                ...restParam
            }
        })
    },
    update({
        name,
        email,
        phone,
        address,
        ...restParam
    } = {}) {
        return api.call().put(`/auth/update`,{
            name,
            email,
            phone,
            address,
            ...restParam
        })
    }
}

export default UserService;