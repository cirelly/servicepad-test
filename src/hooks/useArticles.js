import { useMutation, useQuery } from "@tanstack/react-query";
import { addArticle, deleteArticle, getArticles, updateArticle } from "../services/article";

export const useGetArticles = () => {
    return useQuery(['get-articles'], getArticles);
};

export const useAddArticle = () => {
    return useMutation(['add-article'], addArticle)
 };

export const useUpdateArticle = () => {
    return useMutation(['update-article'],updateArticle)
}
export const useDeleteArticle = () => {
    return useMutation(['delete-article'],deleteArticle)
 }
