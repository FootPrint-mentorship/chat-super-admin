import React from 'react';
import Tabs from "@/components/content/project/table/Tabs";
import HDot from "@/components/icon/HDot";
import Button from "@/components/button/Button";

 function BeneficiariesComplaints({}) {

     const [activeTab, setActiveTab] = React.useState(1);


     return (
         <div>
             <div className="flex justify-between items-center mb-4">
                 <h2 className="text-lg font-semibold">Beneficiary Complaints</h2>
                 <div className="relative">
                     <select
                         className="border-none outline-none bg-[#F5F6F8] rounded-lg px-3 py-2 text-sm text-[#707FA3]">
                         <option value="female">Female</option>
                         <option value="male">Male</option>

                     </select>
                 </div>
             </div>

             <div className="flex justify-between items-center mb-4">
                 <Tabs setActiveTab={setActiveTab} activeTab={activeTab} tabItems={tabItems}/>
                 <HDot/>
             </div>

             <div className="space-y-4">
                 {beneficiaries.map((beneficiary, index) => (
                     <div
                         key={index}
                         className="bg-white shadow  border-l-4 border-green-500 p-4"
                     >
                         <div className="space-y-2">
                             <div className="flex justify-between">
                                 <span className="text-sm text-[#25396F] font-medium">Beneficiary</span>
                                 <span className="font-normal text-[#25396F]">
                                    {beneficiary.beneficiary}
                                </span>
                             </div>
                             <div className="flex justify-between">
                                 <span className="text-sm text-[#25396F] font-medium">Email Address</span>
                                 <span className="text-[#25396F] font-normal">{beneficiary.email}</span>
                             </div>

                             <div className="pt-2 w-full flex flex-col gap-4 justify-center items-center">

                                 {activeTab === 1 && <Button text={'View Complaint'} variant={'outlined'} size={'md'} color={'success'}
                                                             className={'rounded-lg w-full'}/>}

                                 {/*<button*/}
                                 {/*    className="flex justify-center items-center gap-2 underline text-[#17CE89] text-xs font-medium hover:underline">*/}
                                 {/*    <svg width="14" height="14" viewBox="0 0 16 17" fill="none"*/}
                                 {/*         xmlns="http://www.w3.org/2000/svg">*/}
                                 {/*        <path*/}
                                 {/*            d="M14.1666 6.27915C12.6266 3.85915 10.3733 2.46582 7.99992 2.46582C6.81325 2.46582 5.65992 2.81249 4.60659 3.45915C3.55325 4.11249 2.60659 5.06582 1.83325 6.27915C1.16659 7.32582 1.16659 9.02582 1.83325 10.0725C3.37325 12.4992 5.62659 13.8858 7.99992 13.8858C9.18659 13.8858 10.3399 13.5392 11.3933 12.8925C12.4466 12.2392 13.3933 11.2858 14.1666 10.0725C14.8333 9.03249 14.8333 7.32582 14.1666 6.27915ZM7.99992 10.8725C6.50659 10.8725 5.30659 9.66582 5.30659 8.17915C5.30659 6.69249 6.50659 5.48582 7.99992 5.48582C9.49325 5.48582 10.6933 6.69249 10.6933 8.17915C10.6933 9.66582 9.49325 10.8725 7.99992 10.8725Z"*/}
                                 {/*            fill="#17CE89"/>*/}
                                 {/*        <path*/}
                                 {/*            d="M8.0001 6.27246C6.95343 6.27246 6.1001 7.12579 6.1001 8.17913C6.1001 9.22579 6.95343 10.0791 8.0001 10.0791C9.04676 10.0791 9.90676 9.22579 9.90676 8.17913C9.90676 7.13246 9.04676 6.27246 8.0001 6.27246Z"*/}
                                 {/*            fill="#17CE89"/>*/}
                                 {/*    </svg>*/}

                                 {/*    View Project*/}
                                 {/*</button>*/}
                             </div>
                         </div>
                     </div>
                 ))}
             </div>
         </div>
     );
 }
 const beneficiaries  = [
     {
         beneficiary: "Janet Woodpecker",
         email: "karlkeller@gmail.com",

     },
     {
         beneficiary: "Janet Woodpecker",
         email: "karlkeller@gmail.com",

     },
 ];
 const tabItems = [
     {
         name: "All",
         value: 1,
     },

     {
         name: "Resolved",
         value: 2,
     },

     {
         name: "Unresolved",
         value: 3,
     },
 ]

 export default BeneficiariesComplaints;