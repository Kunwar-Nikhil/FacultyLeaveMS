import axiosInstance from "./axios";

export const getDepartments = async () => {
    const response = await axiosInstance.get("/departments");
    return response.data.departments;
};