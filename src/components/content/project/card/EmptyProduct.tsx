import React from 'react';
import EmptyBoxIcon from "@/components/icon/EmptyBoxIcon";

function EmptyProduct() {
    return (
        <div className="flex flex-col w-full h-full mt-24 items-center text-gray-500">
            <EmptyBoxIcon/>
            <p>Nothing in here yet.</p>
            <p className="text-gray-500 text-center mb-6">
                Products or services will show up here once you <br/> add them on the left pane.
            </p>
        </div>
    );
}

export default EmptyProduct;