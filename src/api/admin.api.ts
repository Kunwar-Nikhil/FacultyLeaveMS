
import axiosInstance from "./axios";

export const getPendingleaves = async() =>{
    const response = await axiosInstance.get("/leaves",);
    return response.data
}

export const updateleaveStatus = async (leaveId:string,
    status: "approved" | "rejected",
)=>{
    const response = await axiosInstance.put(`/leaves/${leaveId}/status`,
        {
            status,
        }
    );
    return response.data;
}