import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'


const ProductScreenCategory = (props) => {
    console.log("props",props)
    return (
        <>
    
        <section class="text-gray-600 body-font">
                <div class="container px-5 pt-1 pb-10 mx-auto">
                    <div class="flex flex-col text-center w-full mb-15">
                        <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Categories</h2>
                    </div>
                    <div class="flex flex-wrap">
                        <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                            <Link to='/products/category/Clothing'  className='no-underline'><h2 class="text-lg sm:text-xl text-indigo-500 font-medium title-font mb-2 text-center">Clothing</h2></Link>
                        </div>
                        <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                            <Link to='/products/category/Electronics'  className='no-underline'><h2  class="text-lg sm:text-xl text-indigo-500 font-medium title-font mb-2 text-center">Electronics</h2></Link>
                        </div>
                        <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                            <Link to='/products/category/Accessories'  className='no-underline'><h2  class="text-lg sm:text-xl text-indigo-500 font-medium title-font mb-2 text-center">Accessories</h2></Link>
                        </div>
                        <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                            <h2 class="text-lg sm:text-xl text-indigo-500 font-medium title-font mb-2 text-center">Category #4</h2>
                        </div>
                    </div>

                </div>
            </section>
            <section className="text-gray-400  body-font text-8xl text-center pb-10">
                {props.category}
        </section></>
    )
}

export default ProductScreenCategory
