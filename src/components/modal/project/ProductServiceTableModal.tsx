import React from 'react';

interface Props {
    setOpen:React.Dispatch<React.SetStateAction<boolean>>,
    setOpenDelete:React.Dispatch<React.SetStateAction<boolean>>,
    setAddNewPrice:React.Dispatch<React.SetStateAction<boolean>>,
    setEditProduct:React.Dispatch<React.SetStateAction<boolean>>,
    open: boolean
    openDelete: boolean
    openAddNewPrice: boolean
    openEditProduct: boolean
}

function ProductServiceTablePopOver({open,setOpen, openEditProduct, openAddNewPrice, setEditProduct, setAddNewPrice, openDelete, setOpenDelete}: Props) {

    const items = [
        {
            name: "Edit",
            function: () =>{
                setEditProduct(!openEditProduct)
            }
        },

        {
            name: "Add New Price",
            function: () =>{
                setAddNewPrice(!openAddNewPrice)
            }
        },

        {
            name: "Delete",
            function: () =>{
                setOpenDelete(!openDelete)
            }
        },

    ]


    return (
                     <div className={`w-fit absolute right-16 top-0 bg-white py-2 pb-4 rounded-lg shadow-md  flex flex-col gap-4 px-4 border-none border-0`}>
                         {items.map((item, index) => (
                             <p key={index} onClick={item.function} className={'text-lg cursor-pointer text-primary py-2 border border-b-[#F5F8FA]'}>{item.name}</p>
                         ))}

                     </div>

    );
}

export default ProductServiceTablePopOver;