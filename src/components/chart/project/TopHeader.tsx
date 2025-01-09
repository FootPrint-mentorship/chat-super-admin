import React from 'react';
import Button from "@/components/button/Button";
import Back from "@/components/common/Back";

function TopHeader({openAddEditProduct, setAddEditProduct}:{openAddEditProduct: boolean, setAddEditProduct: React.Dispatch<React.SetStateAction<boolean>>}) {
    return (
        <div className={'flex items-center justify-between w-full'}>
           <Back link={'/projects'}/>
            <Button
                onClick={() => {
                    setAddEditProduct(!openAddEditProduct);
                }}
                icon={<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 12H12M18 12H12M12 12V6M12 12V18" stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"/>
                </svg>} text={'Add Products'} variant={'outlined'} size={'md'} color={'success'}
                className={'rounded-lg'}/>
        </div>
    );
}

export default TopHeader;