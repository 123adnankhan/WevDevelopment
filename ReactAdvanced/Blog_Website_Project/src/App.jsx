import React, { useEffect,useContext } from 'react'
import Header from './components/Header'
import Home from './Pages/Home'
import BlogPage from './Pages/BlogPage'
import Blogs from './components/Blogs'
import TagPage from './Pages/TagPage'
import CategoryPage from './Pages/CategoryPage'
import Pagination from './components/Pagination'
import { AppContext } from './context/AppContext'
import {Routes,Route} from 'react-router-dom'
import { useLocation, useSearchParams } from 'react-router-dom'

const App = () => {
  const{fetchBlogPosts} = useContext(AppContext);

  const [searchParams] = useSearchParams();
  const location = useLocation();
   useEffect(() => {
    const page =  searchParams.get("page") ?? 1;

    if(location.pathname.includes("tags")) {
      //iska matlab tag wala page show krna h 
      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page), tag);
    }
    else if(location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page), null, category);
    }
    else {
      fetchBlogPosts(Number(page));
    }
  }, [location.pathname, location.search]);
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/blog/:blogId' element={<BlogPage/>}/>
      <Route path='/tags/:tag' element={<TagPage/>}/>
      <Route path='/categories/:category' element={<CategoryPage/>}/>
    </Routes>
  )
}

export default App