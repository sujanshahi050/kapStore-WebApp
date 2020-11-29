// Home Screen Page 

// Basic Import for fetching data
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Import Product component 
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function HomeScreen(){
    // React Hook for products, default value of products is empty array
    const [products, setProducts] = useState([]);
    // React Hook for Loading
    const [loading,setLoading] = useState(false);
    // React Hook for Error
    const [error,setError] = useState(false);
    // React Hook to fetch data 
    useEffect(()=>{
        const fetchData = async () =>{
            try{
                setLoading(true);
                const { data } = await axios.get('api/products');
                setLoading(false);
                setProducts(data);
            }catch(err){
                setError(err.message);
                setLoading(false);
            }
        };
        fetchData();
    },[])


    return (
        <div>
            {loading? (
                <LoadingBox></LoadingBox>
            ): error?(
            <MessageBox variant="danger">{error}</MessageBox>
            ):(
                <div className="row center">
                    {products.map((product) =>(
                        <Product key={product._id} product= {product}></Product>
                    ))}
                </div>
            )}
        </div>
    );
}