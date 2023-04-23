import { IoMdHeartEmpty } from 'react-icons/io'
import Wrapper from '@/components/Wrapper'
import React from 'react'
import ProductDetailsCarousel from '@/components/ProductDetailsCarousel'


const ProductDetails = () => {
    return (
        <div className='w-full md:py-20'>
            <Wrapper>
                <div className='flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]'>

                    {/* {LEFT COLUMN START} */}
                    <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
                        <ProductDetailsCarousel />
                    </div>
                    {/* {LEFT COLUMN END} */}


                    {/* {RIGHT COLUMN START} */}
                    <div className='flex-[1] py-3'>
                        {/* PRODUCT TITLE */}
                        <div className="text-[34px] font-semibold mb-2 leading-tight">
                            Jordan Retro 6 G
                        </div>

                        {/* PRODUCT SUBTITLE */}
                        <div className="text-lg font-semibold mb-5">
                            Men&apos;s Golf Shoes
                        </div>

                        {/* PRODUCT PRICE */}

                        <div className="flex items-center">
                            <p className="mr-2 text-lg font-semibold">
                                MRP : $ 19 695.00
                            </p>
                            
                            <div className='text-md font-medium text-black/[0.5] mb-20'>
                                {`(Also includes all applicable duties)`}

                            </div>
                        {/* PRODUCT SIZE START */}

                        <div className='mb-10'>
                            <div className='flex justify-between mb-2'>
                                <div className='text-md font-semibold'>
                                    Select Size

                                </div>
                                <div className='text-md font-medium text-black/[0.5] cursor-pointer'>
                                    Select Guide
                                </div>

                            </div>

                        </div>
                        {/* PRODUCT SIZE START */}

                        </div>
                    </div>
                    {/* {RIGHT COLUMN END} */}


                </div>
            </Wrapper>
        </div>
    )
}

export default ProductDetails