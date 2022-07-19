import axiosInstance from ".."

export async function putScore(score) {
    try {
        const res = await axiosInstance.put('/score/store', {score})
        return res.data
    } catch (error) {
        return {
            "result": 0,
            "message": "Something was wrong!",
        }
    }
}