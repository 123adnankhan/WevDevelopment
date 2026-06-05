import React from 'react'
import { useLocation } from 'react-router-dom'
import Pagination from '../components/Pagination';

const TagPage = () => {
    const location = useLocation();
    const tag =location.pathname.split('/').at(-1);
  return (
    <div>
        <Header/>
        <div>
            <div>
                <button onClick={()=>NavigationActivation(-1)}>
                    Back
                </button>
                <h2>Blogs Tagged<span>#{tag}</span></h2>
        </div>
        <Blogs/>
        </div>
        <Pagination/>
    </div>
  )
}

export default TagPage