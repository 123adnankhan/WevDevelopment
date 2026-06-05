import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom';
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';
const CategoryPage = () => {

    const navigation = useNavigation();
    const location = useLocation();
    const category=location.pathname.split('/').at(-1);

  return (
    <div>
        <Header/>
        <div>
            <div>
                <button onClick={()=>navigation(-1)}>
                    Back
                </button>
                <h2 className='font-bold'>
                Blogs on <span>{category}</span>
                </h2>
            </div>
            <Blogs/>
        </div>
        <Pagination/>
    </div>
  )
}

export default CategoryPage