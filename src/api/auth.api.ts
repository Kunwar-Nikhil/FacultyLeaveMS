import axiosInstance from "./axios";

interface LoginPayLoad{
    email: string;
    password: string;
}

export const loginApi = async(data: LoginPayLoad,)=>{
    const response = await axiosInstance.post("/login",data,);

    return response.data;
}

interface SignupPayload{
    fullName: string;
    email: string;
    phoneNo: string;
    age: number;
    gender: string;
    department: string;
    subjects: string[];
    password: string;
}

// export const signupApi = async(data:SignupPayload)=>{
//     const response = await axiosInstance.post("/signup",data,);

//     return response.data;
// }

export const signupApi = async (data: SignupPayload) => {
  try {
    console.log("Signup Request:", data);

    const response = await axiosInstance.post("/signup", data);

    console.log("Signup Success:", response.data);

    return response.data;
  } catch (error: any) {
    console.log("Signup Error:", error.response?.status);
    console.log("Signup Error Data:", error.response?.data);
    console.log("Full Error:", error);

    throw error;
  }
};

export const getCurrentUser = async()=>{
    const response = await axiosInstance.get("/user");
    return response.data;
}