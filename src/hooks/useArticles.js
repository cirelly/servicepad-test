import { useQuery } from "@tanstack/react-query";
import { getArticles } from "../services/article";

export const useGetArticles = () => {
    return useQuery(['get-articles'], getArticles);
};