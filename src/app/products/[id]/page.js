import React from 'react';

const DynamicPage = ({ params,searchParams }) => {
    console.log(params, searchParams)
    // searchParams use for get the query from url
    // http://localhost:8000/products/5?category=laptop
    return (
        <div>
            <h1>dynamic Page { params.id} </h1>
            <h1>Category: {searchParams.category} </h1>
        </div>
    );
};

export default DynamicPage;