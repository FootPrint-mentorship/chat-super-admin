import React from 'react';
import EditIcon from "@/components/icon/EditIcon";
import DeleteIcon from "@/components/icon/DeleteIcon";

function ProductCard({product, handleDeleteProduct}:{product: any, handleDeleteProduct: () => void}) {
    return (
        <div className={'w-full'}>
            <div className={'flex items-center lg:hidden w-full justify-end'}>
                <button className="text-red-500"><EditIcon/></button>
                <button className="ml-2 text-yellow-500"><DeleteIcon/></button>
            </div>
            <div
                className="mb-4 py-4 px-6 border-2 border-[#F5F6F8] border-l-4 border-l-secondaryBgColor border-l-solid rounded-lg shadows  w-full">
                <div className="flex justify-between gap-4 w-full">
                    <div className={'flex flex-col gap-2'}>
                        <div className={'flex flex-col gap-1'}>
                            <h4 className={'text-primaryTextColor text-xs'}>CATEGORY</h4>
                            <p className="text-sm text-primary">{product.categoryType}</p>
                        </div>
                        <div className={'flex flex-col gap-1'}>
                            <h4 className={'text-primaryTextColor text-xs'}>PRODUCT COST</h4>
                            <p className="text-sm text-primary">N{product.cost}</p>
                        </div>
                        <div className={'flex flex-col gap-1'}>
                            <h4 className={'text-primaryTextColor text-xs'}>PRODUCT COST</h4>
                            <p className="text-sm text-primary">{product.cost}</p>
                        </div>
                    </div>
                    <div>
                        <h4 className={'text-primaryTextColor text-xs'}>VENDOR(s)</h4>
                        <p className="text-sm text-primary">{product.vendor}</p>

                    </div>
                    <div className={'lg:flex items-center hidden'}>
                        <button className="text-red-500"><EditIcon/></button>
                        <button className="ml-2 text-yellow-500"  onClick={handleDeleteProduct}><DeleteIcon/></button>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default ProductCard;


export function ProductCardTwo({product}: { product: any }) {
    return (
        <div className={'w-full'}>
            <div className={'flex items-center lg:hidden w-full justify-end'}>
                <button className="text-red-500"><EditIcon/></button>
                <button className="ml-2 text-yellow-500"><DeleteIcon/></button>
            </div>
            <div
                className="mb-4 py-4 px-6 border-2 border-[#F5F6F8] border-l-4 border-l-secondaryBgColor border-l-solid rounded-lg shadows  w-full">
                <div className="flex justify-between gap-4 w-full">
                    <div className={'flex flex-col gap-2'}>
                        <div className={'flex flex-col gap-1'}>
                            <h4 className={'text-primaryTextColor text-xs'}>PRODUCT TAG</h4>
                            <p className="text-sm text-primary">{product.categoryType}</p>
                        </div>
                        <div className={'flex flex-col gap-1'}>
                            <h4 className={'text-primaryTextColor text-xs'}>PRODUCT COST</h4>
                            <p className="text-sm text-primary">N{product.cost}</p>
                        </div>
                    </div>
                    <div>
                        <h4 className={'text-primaryTextColor text-xs'}>VENDOR(s)</h4>
                        <p className="text-sm text-primary">{product.vendor}</p>

                    </div>
                    <div className={'lg:flex items-center hidden'}>
                        <button className="text-red-500"><EditIcon/></button>
                        <button className="ml-2 text-yellow-500"><DeleteIcon/></button>
                    </div>
                </div>
            </div>
        </div>

            );
            }