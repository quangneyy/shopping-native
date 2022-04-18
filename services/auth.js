import { api } from '.'

const AuthService = {
    login({
        email,
        password
    } = {}) {
        return api.call().post(`/auth/login`,{
            email,
            password
        })
    }
}

export default AuthService;