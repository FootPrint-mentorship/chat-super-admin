import React from 'react';

function Notification({isOpen,setIsOpen}:{setIsOpen: React.Dispatch<React.SetStateAction<boolean>>, isOpen: boolean}) {

    return (
        <div className={'relative cursor-pointer'}>

            <svg onClick={()=>{
                setIsOpen(!isOpen);
            }} className="w-6 h-6 text-primaryTextColor" width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M10 16.8476C15.6392 16.8476 18.2481 16.1242 18.5 13.2205C18.5 10.3188 16.6812 10.5054 16.6812 6.94511C16.6812 4.16414 14.0452 1 10 1C5.95477 1 3.31885 4.16414 3.31885 6.94511C3.31885 10.5054 1.5 10.3188 1.5 13.2205C1.75295 16.1352 4.36177 16.8476 10 16.8476Z"
                      stroke="#707FA3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.3887 19.8574C11.0246 21.3721 8.89659 21.3901 7.51941 19.8574" stroke="#707FA3"
                      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

            <span className="sr-only">Notifications</span>
            <div
                className="absolute inline-flex items-center justify-center w-2 h-2 p-[0.4rem] text-[6px] font-bold text-white bg-danger rounded-full -top-2 -end-2 ">20
            </div>



        </div>
    );
}

export default Notification;