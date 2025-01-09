import React from 'react';
import Select from "@/components/select";
import Input from "@/components/input";

interface HeaderProps {
    filterDate: string;
    filterType: string | number;
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    setFilterDate: React.Dispatch<React.SetStateAction<string>>;
    setFilterType: React.Dispatch<React.SetStateAction<string | number>>;
}

function Header({filterType, filterDate, search,setSearch,setFilterDate,setFilterType}: HeaderProps) {
    return (
        <div className="flex justify-between items-center p-4 w-full">
            <h1 className="text-md font-semibold text-gray-800 mb-4">Notification List</h1>

            <div className="flex w-[50%] gap-2 justify-end">
                <Select options={[
                    {value: "all", label: "All"},
                    {value: "unread", label: "Unread"},
                    {value: "read", label: "Read"},
                    {value: "alert", label: "Alert"},
                    {value: "updates", label: "Updates"},
                ]}

                        value={filterType}
                        variant={'filled'}
                        size={'sm'}
                        placeholder={'All'}
                        className={'rounded-lg'}
                        onChange={(e)=>{
                            setFilterType(e)
                        }}
                />


                <Input
                    type={'date'}
                    value={filterDate}
                    size={'sm'}
                    variant={'filled'}
                    className={'rounded-lg'}
                    onChange={(e) => {
                        setFilterDate(e.target.value)
                    }}
                />


                {/* Search Box */}

                <Input
                    type="text"
                    placeholder="Search location"
                    size={'sm'}
                    variant={'filled'}
                    className={'rounded-lg'}
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value)
                    }}
                />
            </div>
        </div>

    );
}

export default Header;