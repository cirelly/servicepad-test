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

export const addArticle = async (articleData) => {
    try {
        const response = await axiosInstance.post('/articles',articleData);
        return response.data.data;
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const updateArticle = async (articleData) => {
    try {
        const response = await axiosInstance.put(`/articles/${articleData.id}`,{
            title: articleData.title,
            content: articleData.content,
            author: articleData.author
        });
        return response.data.data;
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const deleteArticle = async (articleData) => {
    try {
        await axiosInstance.delete(`/articles/${articleData.id}`);

    } catch (error) {
        console.log(error)
        throw error
    }
}




