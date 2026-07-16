import axios from "axios";
import axiosInstance from "./axios";

export const getLeaveCounts = async () =>{
    const response = await axiosInstance.get("/leaves/my/counts",);
    return response.data;
}

export const getMyLeaves = async () => {
    const response = await axiosInstance.get("/leaves/my",);
    return response.data;
}
export const getLeaveType = async () => {
    const response = await axiosInstance.get("/leave-types");
    return response.data;
}

interface ApplyLeavePayload{
    leaveType: string;
    fromDate : string;
    toDate: string;
    reason: string;
    attachmenturl?: string
}

export const applyLeave = async(data: ApplyLeavePayload,)=>{
    const response = await axiosInstance.post("/leaves/apply",data);
    return response.data;
}

export const getRemaningLeaves = async (leaveTypeId: string,)=>{
    const response = await axiosInstance.get(
        `/leaves/remaning/${leaveTypeId}`,
    );
    return response.data;
}