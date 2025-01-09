import React from 'react';
import DeleteIcon from "@/components/icon/DeleteIcon";
import Input from "@/components/input";
import Select from "@/components/select";

interface AddProductLeftPanelProps {
    handleAddProduct: any;
    vendor: any;
    setVendor: any;
    productService: any;
    setProductService: any;
    categoryType: any;
    setCategoryType: any;
    maximumRedeemable: any;
    setMaximumRedeemable: any;
    tag: any;
    setTag: any;
    cost: any;
    setCost: any;
}

function AddProductLeftPanel({handleAddProduct, vendor, setVendor, productService, setProductService, categoryType, setCategoryType, maximumRedeemable, setMaximumRedeemable, tag, setTag, cost, setCost} : AddProductLeftPanelProps) {
    return (
        <div className="flex-4 px-8 py-12">
            <h5 className="inline-flex items-center mb-4 text-lg font-normal text-primary">
                Add Product / Service
            </h5>
            <p className="text-[#7C8DB5] text-sm mb-6">Select product or services and assign vendors and
                price <br/> tags.</p>

            <div className={'flex justify-end w-full items-center cursor-pointer'}>
                <DeleteIcon/>
            </div>

            <form
                className={'w-full flex flex-col gap-2 pl-4 border-l-2 border-secondaryBgColor border-l-solid'}
                onSubmit={handleAddProduct}>
                <div className="mb-4">
                    <label className="block text-primary text-sm">Vendor</label>
                    <Input size={'md'} className={'border-primary rounded w-full lg:w-auto'}
                           placeholder={'Enter Vendor'} value={vendor} onChange={(e) => {
                        setVendor(e.target.value)
                    }}/>

                </div>

                <div className="mb-4 w-full">
                    <label className="block text-primary text-sm">Product / Service</label>
                    <Select size={'md'} placeholder={'--Select--'} fullWidth className={'rounded-lg'}
                            variant={'outlined'}
                            value={productService} onChange={(e) => {
                        setProductService(e)
                    }}
                            options={[
                                {value: 'clothing', label: "Clothing"},
                                {value: 'medicine', label: "Medicine" },
                                {value: 'cash', label: "Cash" },
                                {value: 'Hygiene Items', label: "Hygiene Items" },
                                {value: 'Fresh Food Items', label: "Fresh Food Items" },
                                {value: 'Processed Food', label: "Processed Food" },
                                {value: 'education', label: "Education" },
                                {value: 'Humanitarian Overhead', label: "Humanitarian Overhead" },

                            ]}/>

                </div>

                <div className="mb-4 w-full">
                    <label className="block text-primary text-sm">Category type</label>
                    <Select size={'md'} placeholder={'--Select--'} fullWidth className={'rounded-lg'}
                            variant={'outlined'}
                            value={categoryType} onChange={(e) => {
                        setCategoryType(e)
                    }}
                            options={[{value: 'product', label: "Product"}, {value: 'service', label: "Service"}]}/>

                </div>

                <div className="mb-4">
                    <label className="block text-primary text-sm">Maximum redeemable</label>
                    <Input size={'md'} className={'border-primary rounded w-full lg:w-auto'}
                           placeholder={'Enter product or service name'} value={maximumRedeemable}
                           onChange={(e) => {
                               setMaximumRedeemable(e.target.value)
                           }}/>

                </div>

                <div className="mb-4">
                    <label className="block text-primary text-sm">Tag</label>
                    <Input size={'md'} className={'border-primary rounded w-full lg:w-auto'}
                           placeholder={'Enter Tag'} value={tag} onChange={(e) => {
                        setTag(e.target.value)
                    }}/>

                </div>

                <div className="mb-6">
                    <label className="block text-primary text-sm">Cost</label>
                    <Input size={'md'} type={'number'} className={'border-primary rounded w-full lg:w-auto'}
                           placeholder={'N 0.00'} value={cost} onChange={(e) => {
                        setCost(e.target.value)
                    }}/>

                </div>

                <button
                    type={'submit'}
                    className="bg-secondaryBgColor w-full lg:w-1/2 text-white px-6 py-2 rounded-lg "
                >
                    Create Product
                </button>
            </form>
        </div>
    );
}

export default AddProductLeftPanel;