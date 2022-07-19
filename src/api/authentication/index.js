import axiosInstance from ".."

export async function login(email, password) {
    try {
        const res = await axiosInstance.post('/auth/login', { email, password })
        return res.data
    } catch (error) {
        return {
            "result": 0,
            "message": "Something was wrong!",
        }
    }
}

export async function register(name, email, password, password_confirmation) {
    try {
        const res = await axiosInstance.post('/auth/register', {
            name,
            email,
            password,
            password_confirmation
        })
        return res.data
    } catch (error) {
        return {
            "result": 0,
            "message": "Something was wrong!",
        }
    }
}

export async function logout() {
    try {
        const res = await axiosInstance.post('/auth/logout')
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        return res.data
    } catch (error) {
        return {
            "result": 0,
            "message": "Something was wrong!",
        }
    }
}