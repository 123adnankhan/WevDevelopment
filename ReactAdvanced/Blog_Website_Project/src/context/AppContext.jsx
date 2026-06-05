import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
// Steps 1 - > creating Context 
export const AppContext = createContext();

//Steps -2  Providing Context Provider
export default function AppContextProvider({children}){
    const[loading,setLoading]=useState(false);
    const[posts,setPosts]=useState([]);
    const[page,setPage]=useState(1);
    const[totalPages,setTotalPages]=useState(null);

    // data filling
    async function fetchBlogPosts(page = 1 ,tag ,category ){
        setLoading(true);
        let url = `${baseUrl}?page=${page}`
        if(tag){
          url +=`&tag = ${tag}`
        }
        if(category){
          url +=`&category=${category}`;
        }
        try{
            const res = await fetch(url);
            const data = await res.json();
            // console.log("Api Response", data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        }
      catch (error) {
      console.log("Error in Fetching BlogPosts", error);
      setPage(1);
      setPosts([]);
      setTotalPages(null);
    }
        setLoading(false);
    }
    function handlePageChange(page){
        setPage(page);
        fetchBlogPosts(page);
    }
  
  const value = {
    posts,
    setPosts,
    loading,
    setLoading,
    page,
    setPage,
    totalPages,
    setTotalPages,
    fetchBlogPosts,
    handlePageChange,
  };


    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
