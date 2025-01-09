import React, {useState} from 'react';
import HDot from "@/components/icon/HDot";
import Select from "@/components/select";
import ProductsServicesMobile from "@/components/chart/project/ProductsServices/ProductsServicesMobile";
import ProductServiceTablePopOver from "@/components/modal/project/ProductServiceTableModal";
import Table from "@/components/common/Table";

function ProductsServicesTable({}) {

    const [listFilter, setListFilter] = useState<string | number>('Today');
const [open, setOpen] = useState(false);
const [openDelete, setOpenDelete] = useState(false);
const [openAddNewPrice, setAddNewPrice] = useState(false);
const [openEditProduct, setEditProduct] = useState(false);


    const renderActions = (row: any) => (
        <div className="flex items-center gap-2"  >
            <div onClick={() => {
                console.log(row)
                setOpen(!open)
            }}>
                <HDot width={'15px'} height={'15px'}  />
            </div>
            <div className={`${open ? "flex" : "hidden"} w-fit`}>
                <ProductServiceTablePopOver key={row?.value} setEditProduct={setEditProduct} openEditProduct={openEditProduct} setOpenDelete={setOpenDelete} setAddNewPrice={setAddNewPrice} openDelete={openDelete} openAddNewPrice={openAddNewPrice} setOpen={setOpen} open={open} />

            </div>
            </div>
    );


    return (
        <div>
        <div className="hidden lg:inline-block mb-6 rounded-lg shadow-lg w-full">
            <div className="flex justify-between items-center w-full">
                <h3 className="text-lg font-semibold text-primary mb-4 px-6 py-1">Products/Services (32)</h3>
                <div>
                    <label className="mr-2 text-sm font-medium">Filter By:</label>
                    <Select size={'sm'} placeholder={'10'}
                            variant={'outlined'}
                            border={'border-none'}
                            className={'border-none'}
                            value={listFilter} onChange={(e) => {
                        setListFilter(e)
                    }}
                            options={[{value: 'Today', label: "Today"}, {value: '20', label: "20"}, {
                                value: '30',
                                label: "30"
                            }, {value: '40', label: "40"}, {value: '50', label: "50"}]}/>

                </div>
            </div>
            <div className="relative overflow-x-auto bg-white">
                <Table columns={columns} data={data} filter={true} actionRenderer={renderActions} showActionColumn customCss={'overflow-x-hidden'}  />

            </div>
            </div>

            <div className={'lg:hidden'}>
                <ProductsServicesMobile/>
            </div>

        </div>
    );
}


const columns = [
    {header: "Product/Service", accessor: "productService"},
    {header: "Tag", accessor: "tag"},
    {header: "Unit Cost (NGN)", accessor: "cost"},
    {header: "Quantity Redeemed", accessor: "quantityRedeemed"},
    {header: "Amount (NGN)", accessor: "amount"},
];


const data = [

    {
        productService: "Rice",
        tag: "Product",
        cost: "1,000",
        quantityRedeemed: "12",
        amount: "12,000",
    },
    {
        productService: "Beans",
        tag: "Service",
        cost: "2,000",
        quantityRedeemed: "12",
        amount: "13,000",
    },
]
export default ProductsServicesTable;