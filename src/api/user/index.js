import axiosInstance from ".."

export async function getUserInfo(id) {
    try {
        const res = await axiosInstance.get(`/user/${id}`)
        return res.data
    } catch (error) {
        return {
            "result": 0,
            "message": "Something was wrong!",
        }
    }
}