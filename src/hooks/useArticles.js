import { useMutation, useQuery } from "@tanstack/react-query";
import { addArticle, getArticles } from "../services/article";

export const useGetArticles = () => {
    return useQuery(['get-articles'], getArticles);
};

export const useAddArticle = () => {
    return useMutation(['add-article'], addArticle)
 };