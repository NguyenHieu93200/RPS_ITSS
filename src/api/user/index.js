import axiosInstance from "..";

export async function getUserInfo(id) {
	try {
		const res = await axiosInstance.get(`/user/${id}`);
		return res.data;
	} catch (error) {
		return {
			result: 0,
			message: "Something was wrong!",
		};
	}
}

export async function getUsers() {
	try {
		const res = await axiosInstance.get("/user/list");
		return res.data;
	} catch (error) {
		return {
			result: 0,
			message: "Something was wrong!",
		};
	}
}

export async function deleteUser(id) {
	try {
		const res = await axiosInstance.delete(`/user/delete/${id}`);
		return {
			...res.data,
			status: "success",
		};
	} catch (error) {
		return {
			result: 0,
			message: "Something was wrong!",
		};
	}
}

export async function updateUser(id, user) {
	try {
		const res = await axiosInstance.post(`/user/update/${id}`, user);
		return {
			...res.data,
			status: "success",
		};
	} catch (error) {
		return {
			result: 0,
			message: "Something was wrong!",
		};
	}
}
