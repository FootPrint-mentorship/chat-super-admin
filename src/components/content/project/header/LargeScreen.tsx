import React from 'react';
import Input from "@/components/input";
import Button from "@/components/button/Button";
import Filter from "@/components/icon/Filter";
import SearchIcon from "@/components/icon/SearchIcon";
import SortIcon from "@/components/icon/SortIcon";
import AddIcon from "@/components/icon/AddIcon";
import ExcelIcon from '@/components/icon/ExcelIcon';

interface LargeScreenProps {
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    search: string;
    setSelectModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function LargeScreen({setSearch,search,setSelectModalOpen}:LargeScreenProps) {
    function downloadExcel(): void {
        throw new Error('Function not implemented.');
    }

    return (
        <div className={'hidden lg:flex items-center justify-between w-full'}>

            <div className={'flex gap-2 w-[50%]'}>
                <Input className={'border-[#707FA3] rounded-lg'} icon={<SearchIcon/>} placeholder={'Search...'} value={search} onChange={(e) => {
                    setSearch(e.target.value)
                }}/>
                <Button text={"Sort"} variant={'outlined'} color={'secondary'}
                        className={'rounded-lg  hover:bg-white'}
                        icon={<SortIcon/>}/>
                <Button size={"md"} text={"Filter"} variant={'outlined'} color={'secondary'}
                        className={'rounded-lg  hover:bg-white'}
                        icon={<Filter/>}
                />
            </div>

            {/* <Button onClick={() => setSelectModalOpen(true)}
                    icon={<AddIcon/>} text={'Create Project'} variant={'contained'} color={'success'} className={'rounded-lg'}/> */}

<Button
              onClick={downloadExcel}
              icon={<ExcelIcon />}
              text={"Export"}
              variant={"outlined"}
              color={"success"}
              className={"rounded-lg"}
            />
        </div>
    );
}

export default LargeScreen;