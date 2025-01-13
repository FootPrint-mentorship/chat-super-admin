import React from "react";
import Image from "next/image";

function KycCard() {
  return (
    <>
      <div
        className={
          "hidden border-2 border-[#F2994A] border-solid p-6 mt-8 sm:flex items-center justify-between rounded-lg"
        }
      >
        <div className={"flex items-center gap-2"}>
          <Image
            src={"/assets/svg/kyc.svg"}
            alt={"kyc"}
            width={60}
            height={60}
          />
          <div>
            <h4 className={"text-[#07080A] font-bold"}>Verify your Account </h4>
            <p className={"text-[#646A86] text-sm "}>
              To access all CHATS service, please complete your KYC verification
              process
            </p>
          </div>
        </div>

        <p className={"underline text-[#17CE89] text-xs"}>Get Verified</p>
      </div>

      <div
        className={
          "sm:hidden border-none bg-[#FFFDED] p-6 flex flex-col gap-5 "
        }
      >
        <div className={"flex items-center gap-2"}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.66675 15.9989C2.66675 8.64019 8.64008 2.66553 16.0001 2.66553C23.3734 2.66553 29.3334 8.64019 29.3334 15.9989C29.3334 23.3602 23.3734 29.3322 16.0001 29.3322C8.64008 29.3322 2.66675 23.3602 2.66675 15.9989ZM14.8267 10.9455C14.8267 10.3069 15.3601 9.77219 16.0001 9.77219C16.6401 9.77219 17.1601 10.3069 17.1601 10.9455V16.8389C17.1601 17.4802 16.6401 17.9989 16.0001 17.9989C15.3601 17.9989 14.8267 17.4802 14.8267 16.8389V10.9455ZM16.0134 22.2402C15.3601 22.2402 14.8401 21.7069 14.8401 21.0669C14.8401 20.4269 15.3601 19.9069 16.0001 19.9069C16.6534 19.9069 17.1734 20.4269 17.1734 21.0669C17.1734 21.7069 16.6534 22.2402 16.0134 22.2402Z"
              fill="#25396F"
            />
          </svg>

          <div>
            <p className={"text-[#646A86] text-sm "}>
              To access all Chats service, please complete your KYC verification
              process
            </p>
          </div>
        </div>

        <p className={"underline text-[#F2994A] text-xs px-8"}>
          Update Profile
        </p>
      </div>
    </>
  );
}

export default KycCard;
