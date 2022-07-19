import axiosInstance from ".."

export async function getComments() {
    try {
        const res = await axiosInstance.get('/comment')
        return res.data
    } catch (error) {
        return {
            "result": 0,
            "message": "Something was wrong!",
        }
    }
}

export async function postComment(content) {
    try {
        const res = await axiosInstance.post('/comment',{content})
        return res.data
    } catch (error) {
        return {
            "result": 0,
            "message": "Something was wrong!",
        }
    }
}

export async function deleteCmt(id) {
    try {
        const res = await axiosInstance.delete(`comment/delete/${id}`)
        return res.data
    } catch (error) {
        return {
            "result": 0,
            "message": "Something was wrong!",
        }
    }
}
