import React from 'react'
import {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { listProductCategory} from '../actions/productActions';
import Rating from '../components/Rating';
import Meta from '../components/Meta';
import Paginate from '../components/Paginate';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Breadcrumbs from '../components/Breadcrumbs';

const HeaderCategoryScreen = ({match}) => {
    const category =match.params.hcategory;
    const csplit = category.split('-',3);
    const pageNumber = match.params.pageNumber || 1;
    console.log("csplit",csplit[0],csplit[1],csplit[2]);
    const dispatch = useDispatch()
    const productCategory=useSelector(state => state.productCategory)
    const { loading, error, products, page, pages } = productCategory

    useEffect(()=>{
        dispatch(listProductCategory(category, pageNumber));

    },[dispatch, category, pageNumber])
    return (
        <><Meta title={category} /><section className="text-gray-600 body-font">
            <div className="container px-5 py-10 mx-auto">

                <div className="flex flex-col text-center w-full mb-20">
                    <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">CATEGORY</h2>
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">{csplit[1] ? csplit[2] ? csplit[0]+" "+'/'+ " "+csplit[1]+" "+"/"+" "+csplit[2]: csplit[0]+" " +"/"+ " "+csplit[1] : csplit[0] }</h1>
                </div>
                <Breadcrumbs bc1={csplit[0]} bc2={csplit[1]} bc3={csplit[2]}/>
                {loading ? <Loader>Loading...</Loader> : error ? <Message variant='danger'>{error}</Message> :
                <div className="flex flex-wrap -m-4">
                    <div className="max-w-2xl mx-auto py-10 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
                        <div className="mt-1 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            {products.map((product) => (
                                <div key={product._id} className="group relative">
                                    <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
                                    </div>
                                    <div className="mt-4 flex justify-between">
                                        <div>
                                            <h3 className="text-sm text-gray-700">
                                                <Link to={`/product/${product._id}`} style={{ textDecoration: "none" }}>
                                                    <span aria-hidden="true" className="absolute inset-0" />
                                                    {product.name}
                                                </Link>
                                            </h3>
                                            <p className="mt-1 text-sm text-gray-500">${product.price}</p>
                                            <Rating value={product.rating} text={product.numReviews} className="mt-1 text-sm text-gray-500" />
                                        </div>
                                        {/* <p className="text-sm font-medium text-gray-900">{product.price}</p> */}
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                    
                </div>}
            </div>
            <Paginate page={page} pages={pages} pageNumber={pageNumber} hcategory={category ? category : ''}></Paginate>
        </section></>
    )
}

export default HeaderCategoryScreen
