import React from "react";
import ProductCard from "./ProductCard";
const Lproductlist=({data})=>{
    return (
        <>
        {
            data?.map((item,index)=>(
                <ProductCard item={item} key={index}/>
            ))}
            
            
        </>
    );
};
 
export default Lproductlist;