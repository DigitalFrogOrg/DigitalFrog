import apiClient from "./apiService";

export const submitForm = async (formData)=>{
    console.log("form data",formData)
    const res = await apiClient.post('/form/submit',formData)
    return res
}