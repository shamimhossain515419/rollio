import React from 'react';

const ShowProduct = ({ products }: any) => {
    return (
        <>
            <div className=' flex justify-between items-center py-10  border-y border-y-white  mt-10 text-white '>
                <p>Products ({products?.length})</p>
                <p>Showing {products?.length} results</p>
            </div>
        </>
    );
};

export default ShowProduct;