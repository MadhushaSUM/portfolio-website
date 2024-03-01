'use client';

import { BlogSearchContextType } from "@/app/types";
import { useContext, createContext, useState, ReactNode } from "react";

const BlogSearchContext = createContext<BlogSearchContextType>({
    searchText: "",
    setSearchText: () => {}
});

export const useBlogSearchContext = () => useContext(BlogSearchContext);

export const BlogSearchContextProvider = ({ children }: {children: ReactNode}) => {
    const [searchText, setSearchText] = useState("");

    return (
        <BlogSearchContext.Provider value={{ searchText, setSearchText }}>
            {children}
        </BlogSearchContext.Provider>
    );
};