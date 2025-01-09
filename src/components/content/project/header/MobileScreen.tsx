import React from 'react';
import Input from "@/components/input";
import Button from "@/components/button/Button";

interface MobileScreenProps {
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    search: string;
    setIsOpen: React.Dispatch<React.SetStateAction<"item" | "cash" | undefined>>;
    isOpen?: "item" | "cash" | undefined
}

function MobileScreen({setSearch, search, setIsOpen}: MobileScreenProps) {
    return (<div className={'flex lg:hidden items-center justify-between w-full'}>
            <Input className={'border-[#707FA3] rounded-lg'} icon={
                <svg fill="none" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
                <g fill="#707FA3">
                    <path
                        d="m11.5 21.75c-5.65 0-10.25-4.6-10.25-10.25s4.6-10.25 10.25-10.25 10.25 4.6 10.25 10.25-4.6 10.25-10.25 10.25zm0-19c-4.83 0-8.75 3.93-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.93 8.75-8.75-3.92-8.75-8.75-8.75z"/>
                    <path
                        d="m22.0004 22.7499c-.19 0-.38-.07-.53-.22l-2-2c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22z"/>
                </g>
            </svg>} placeholder={'Search...'} value={search} onChange={(e) => {
                setSearch(e.target.value)
            }}/>

            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M11.6667 3.95801C11.0914 3.95801 10.625 4.42438 10.625 4.99967C10.625 5.57497 11.0914 6.04134 11.6667 6.04134C12.242 6.04134 12.7083 5.57497 12.7083 4.99967C12.7083 4.42438 12.242 3.95801 11.6667 3.95801ZM9.375 4.99967C9.375 3.73402 10.401 2.70801 11.6667 2.70801C12.9323 2.70801 13.9583 3.73402 13.9583 4.99967C13.9583 6.26533 12.9323 7.29134 11.6667 7.29134C10.401 7.29134 9.375 6.26533 9.375 4.99967Z"
                      fill="#707FA3"/>
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M2.70837 5C2.70837 4.65482 2.9882 4.375 3.33337 4.375H10C10.3452 4.375 10.625 4.65482 10.625 5C10.625 5.34518 10.3452 5.625 10 5.625H3.33337C2.9882 5.625 2.70837 5.34518 2.70837 5Z"
                      fill="#707FA3"/>
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M12.7084 5C12.7084 4.65482 12.9882 4.375 13.3334 4.375H16.6667C17.0119 4.375 17.2917 4.65482 17.2917 5C17.2917 5.34518 17.0119 5.625 16.6667 5.625H13.3334C12.9882 5.625 12.7084 5.34518 12.7084 5Z"
                      fill="#707FA3"/>
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M6.66667 8.95801C6.09137 8.95801 5.625 9.42438 5.625 9.99967C5.625 10.575 6.09137 11.0413 6.66667 11.0413C7.24196 11.0413 7.70833 10.575 7.70833 9.99967C7.70833 9.42438 7.24196 8.95801 6.66667 8.95801ZM4.375 9.99967C4.375 8.73402 5.40101 7.70801 6.66667 7.70801C7.93232 7.70801 8.95833 8.73402 8.95833 9.99967C8.95833 11.2653 7.93232 12.2913 6.66667 12.2913C5.40101 12.2913 4.375 11.2653 4.375 9.99967Z"
                      fill="#707FA3"/>
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M2.70837 10C2.70837 9.65482 2.9882 9.375 3.33337 9.375H5.00004C5.34522 9.375 5.62504 9.65482 5.62504 10C5.62504 10.3452 5.34522 10.625 5.00004 10.625H3.33337C2.9882 10.625 2.70837 10.3452 2.70837 10Z"
                      fill="#707FA3"/>
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M7.70837 10C7.70837 9.65482 7.9882 9.375 8.33337 9.375H16.6667C17.0119 9.375 17.2917 9.65482 17.2917 10C17.2917 10.3452 17.0119 10.625 16.6667 10.625H8.33337C7.9882 10.625 7.70837 10.3452 7.70837 10Z"
                      fill="#707FA3"/>
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M14.1667 13.958C13.5914 13.958 13.125 14.4244 13.125 14.9997C13.125 15.575 13.5914 16.0413 14.1667 16.0413C14.742 16.0413 15.2083 15.575 15.2083 14.9997C15.2083 14.4244 14.742 13.958 14.1667 13.958ZM11.875 14.9997C11.875 13.734 12.901 12.708 14.1667 12.708C15.4323 12.708 16.4583 13.734 16.4583 14.9997C16.4583 16.2653 15.4323 17.2913 14.1667 17.2913C12.901 17.2913 11.875 16.2653 11.875 14.9997Z"
                      fill="#707FA3"/>
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M2.70837 15C2.70837 14.6548 2.9882 14.375 3.33337 14.375H12.5C12.8452 14.375 13.125 14.6548 13.125 15C13.125 15.3452 12.8452 15.625 12.5 15.625H3.33337C2.9882 15.625 2.70837 15.3452 2.70837 15Z"
                      fill="#707FA3"/>
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M15.2084 15C15.2084 14.6548 15.4882 14.375 15.8334 14.375H16.6667C17.0119 14.375 17.2917 14.6548 17.2917 15C17.2917 15.3452 17.0119 15.625 16.6667 15.625H15.8334C15.4882 15.625 15.2084 15.3452 15.2084 15Z"
                      fill="#707FA3"/>
            </svg>


            <Button onClick={()=>{
                setIsOpen(undefined)
            }} icon={<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                <path d="M6 12H12M18 12H12M12 12V6M12 12V18" stroke="currentColor" stroke-linecap="round"
                      stroke-linejoin="round"/>
            </svg>} variant={'contained'} color={'success'} className={'rounded-lg'}/>
        </div>);
}

export default MobileScreen;