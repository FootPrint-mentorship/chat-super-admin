import React from 'react';
import EmptyProduct from "@/components/content/project/card/EmptyProduct";
import Button from "@/components/button/Button";
import ProductCard from "@/components/content/project/card/ProductCard";


type Product = {
    vendor: string;
    productService: string | number;
    categoryType: string | number;
    maximumRedeemable: string;
    tag: string;
    cost: string;
};


function AddProductRightPanel({setAddEditProduct,products, handleDeleteProduct}:{ setAddEditProduct: any, products: Product[], handleDeleteProduct: any}) {
    return (
        <div className="p-6 flex-1">
            <button onClick={() => {
                setAddEditProduct(false)
            }} type="button" data-drawer-hide="drawer-right-example" aria-controls="drawer-right-example"
                    className="text-primary bg-transparent rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center">
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span className="sr-only">Close menu</span>
            </button>


            {products.length === 0 ? (
                <EmptyProduct/>
            ) : (
                <div className={'w-full pt-14'}>

                    <Button size={"md"} text={"Save Product"} variant={'contained'} color={'success'}
                            className={'rounded-lg mb-4'}

                    />
                    {products.map((product, index) => (
                        <ProductCard product={product} key={index} handleDeleteProduct={()=>{
                            handleDeleteProduct(index)
                        }}/>
                    ))}
                </div>
            )}
        </div>
    );
}

export default AddProductRightPanel;