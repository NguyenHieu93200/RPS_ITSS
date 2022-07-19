import axiosInstance from ".."

export async function getRankList() {
    try {
        const res = await axiosInstance.get('/rank/list')
        return res.data
    } catch (error) {
        return {
            "result": 0,
            "message": "Something was wrong!",
        }
    }
}