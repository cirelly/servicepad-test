import axiosInstance from "../config/axios"


export const getArticles = async () => {
    try {
        const response = await axiosInstance.get('/articles');
        return response.data.data;
    } catch (error) {
        console.log(error)
        throw error
    }
}






