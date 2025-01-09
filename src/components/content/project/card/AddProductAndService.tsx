import React, {useState} from 'react';
import AddProductLeftPanel from "@/components/content/project/card/AddProductLeftPanel";
import AddProductRightPanel from "@/components/content/project/card/AddProductRightPanel";

type Product = {
    vendor: string;
    productService: string | number;
    categoryType: string | number;
    maximumRedeemable: string;
    tag: string;
    cost: string;
};

function AddProductAndService({setAddEditProduct, openAddEditProduct}:{setAddEditProduct: React.Dispatch<React.SetStateAction<boolean>>, openAddEditProduct: boolean}) {

    const [products, setProducts] = useState<Product[]>([]);
    const [vendor, setVendor] = useState<string>('');
    const [productService, setProductService] = useState<string | number>('');
    const [categoryType, setCategoryType] = useState<string | number>('');
    const [maximumRedeemable, setMaximumRedeemable] = useState<string>('');
    const [tag, setTag] = useState<string>('');
    const [cost, setCost] = useState<string>('');
    const [editingProduct, setEditingProduct] = useState<Product | null>(null);


    const handleAddProduct = (e: any) => {
        e.preventDefault()
        if (vendor && productService && categoryType && maximumRedeemable && tag && cost) {
            setProducts([
                ...products,
                { vendor, productService, categoryType, maximumRedeemable, tag, cost },
            ]);
            setVendor('');
            setProductService('');
            setCategoryType('');
            setMaximumRedeemable('');
            setTag('');
            setCost('');
        }
    };

    const handleDeleteProduct = (index: number) => {
        const updatedProducts = products.filter((_, i) => i !== index);
        setProducts(updatedProducts);
    };

    const handleEditProduct = (index: number) => {
        const productToEdit = products[index];
        setEditingProduct(productToEdit);
    };

    const handleSaveEdit = () => {
        if (editingProduct) {
            const updatedProducts = products.map((product) =>
                product === editingProduct ? { ...editingProduct } : product
            );
            setProducts(updatedProducts);
            setEditingProduct(null); // Reset editing state
        }
    };


    return (
        <div
            className={`${openAddEditProduct ? 'fixed' : 'hidden '} w-full flex justify-end top-0 right-0 z-40 h-screen bg-opacity-80 bg-black`}>
            <div className={`flex flex-col lg:flex-row overflow-x-hidden space-x-6 bg-white rounded-tl-2xl rounded-bl-2xl lg:w-[70%] `}>

                {/* Left Panel: Form for adding product/service */}
              <AddProductLeftPanel productService={productService} handleAddProduct={handleAddProduct} setProductService={setProductService} tag={tag} setTag={setTag} categoryType={categoryType} setCategoryType={setCategoryType} cost={cost} setCost={setCost} maximumRedeemable={maximumRedeemable} setMaximumRedeemable={setMaximumRedeemable} vendor={vendor} setVendor={setVendor} />

                <div className="h-full  bg-primaryTextColor w-[.5px]"></div>

                {/* Right Panel: Display added products/services */}
                <AddProductRightPanel products={products} setAddEditProduct={setAddEditProduct} handleDeleteProduct={handleDeleteProduct}/>


            </div>
        </div>
    )
        ;
}

export default AddProductAndService;

