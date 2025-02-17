import React from 'react';
import ArrowUpIcon from "@/components/icon/ArrowUpIcon";

function BeneficiariesProfileMetrics({}) {
    const metrics = [
        {
            title: "Total Received",
            value: "$12,560,800",
            icon: <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="56" height="56" rx="15" fill="#5DDAB4"/>
                <g clip-path="url(#clip0_19591_180199)">
                    <path
                        d="M30.031 32.906C29.9195 32.7839 29.7784 32.6925 29.6326 32.6164C29.3151 32.4509 28.9678 32.3504 28.623 32.2598V34.9314C29.1827 34.8682 29.8251 34.6651 30.119 34.1426C30.2592 33.8931 30.2871 33.5865 30.23 33.3087C30.199 33.1581 30.135 33.02 30.031 32.906Z"
                        fill="white"/>
                    <path
                        d="M30.1172 34.1481C30.1184 34.146 30.1191 34.1448 30.1203 34.1426C30.1193 34.1444 30.1182 34.1462 30.1172 34.1481Z"
                        fill="url(#paint0_linear_19591_180199)"/>
                    <path
                        d="M25.9988 28.6351C25.9026 28.7756 25.8422 28.9352 25.8256 29.1048C25.8089 29.2748 25.8183 29.4639 25.8829 29.624C25.9444 29.7765 26.0732 29.8891 26.2061 29.9797C26.3553 30.0812 26.5194 30.1605 26.6866 30.2276C26.8268 30.2841 26.9845 30.3381 27.1545 30.3902V27.9727C26.725 28.0643 26.2558 28.2599 25.9988 28.6351Z"
                        fill="white"/>
                    <path
                        d="M30.1302 34.123C30.1267 34.1293 30.1229 34.1358 30.1191 34.1427C30.1235 34.1347 30.1269 34.1288 30.1302 34.123Z"
                        fill="url(#paint1_linear_19591_180199)"/>
                    <path d="M30.1445 34.0971C30.1455 34.0953 30.1457 34.0952 30.1445 34.0971V34.0971Z"
                          fill="url(#paint2_linear_19591_180199)"/>
                    <path
                        d="M29.5645 19.5649C31.8365 17.6563 33.3546 13.3565 32.4203 13.1684C31.179 12.9185 28.4832 14.0146 27.1803 14.2077C25.3323 14.4308 23.3195 12.2037 22.1897 13.4451C21.2711 14.4545 22.8483 18.1251 25.3158 19.7242C17.9541 23.3423 7.60666 41.5059 25.6583 42.8238C50.6358 44.6475 38.1287 23.0908 29.5645 19.5649ZM31.7096 33.8896C31.6327 34.5977 31.2575 35.2381 30.6965 35.6728C30.1042 36.1319 29.3613 36.3454 28.6232 36.4052V37.1876C28.6232 37.3969 28.5317 37.5994 28.375 37.738C28.1596 37.9286 27.8431 37.9756 27.5817 37.8551C27.3235 37.7364 27.1539 37.4716 27.1539 37.1876V36.3324C27.0274 36.3084 26.9017 36.2798 26.7775 36.2457C26.0877 36.0562 25.4478 35.6867 24.9804 35.1401C24.7476 34.8676 24.5577 34.5585 24.4265 34.2247C24.3922 34.1375 24.3616 34.0487 24.3348 33.9589C24.3106 33.8776 24.2856 33.7949 24.2769 33.7101C24.2624 33.568 24.2905 33.4229 24.3568 33.2963C24.493 33.0358 24.78 32.8784 25.0731 32.9046C25.3615 32.9301 25.6143 33.1303 25.7051 33.4052C25.7331 33.4899 25.752 33.5767 25.7835 33.6605C25.8146 33.7437 25.8522 33.8246 25.8964 33.9016C25.9837 34.0532 26.093 34.1931 26.219 34.3145C26.4786 34.5646 26.8092 34.7271 27.1539 34.8238V31.917C26.4799 31.7425 25.7842 31.5171 25.2276 31.0844C24.9571 30.8739 24.7275 30.6125 24.5772 30.3031C24.4186 29.9765 24.3529 29.6127 24.3502 29.2513C24.3475 28.8844 24.4172 28.5207 24.5702 28.1864C24.7136 27.8734 24.92 27.5923 25.1731 27.3594C25.7142 26.8613 26.433 26.5835 27.154 26.4814V26.4175V25.6692C27.154 25.46 27.2454 25.2574 27.4022 25.1188C27.6176 24.9283 27.934 24.8812 28.1955 25.0017C28.4536 25.1205 28.6232 25.3852 28.6232 25.6692V26.4175V26.477C28.7193 26.4891 28.8151 26.5036 28.9104 26.5209C29.6184 26.649 30.3108 26.9413 30.8286 27.4518C31.0738 27.6935 31.2746 27.9816 31.4158 28.2957C31.4552 28.3834 31.4897 28.473 31.5196 28.5645C31.5474 28.6497 31.5754 28.7375 31.5887 28.8265C31.6099 28.9685 31.5883 29.1152 31.5275 29.2452C31.4029 29.5114 31.1237 29.6809 30.8298 29.6683C30.5411 29.6558 30.2795 29.4678 30.1762 29.1979C30.1454 29.1176 30.13 29.0327 30.0986 28.9526C30.0669 28.8716 30.0258 28.7943 29.9785 28.7213C29.8866 28.5793 29.7675 28.4576 29.6315 28.3573C29.337 28.1399 28.9799 28.0266 28.623 27.9633V30.745C29.0472 30.8465 29.4716 30.9573 29.878 31.1175C30.4921 31.3597 31.0741 31.7311 31.4093 32.3166C31.3573 32.2254 31.3067 32.1365 31.4111 32.3196C31.5136 32.4995 31.4646 32.4138 31.4132 32.3236C31.6799 32.7937 31.7675 33.3557 31.7096 33.8896Z"
                        fill="white"/>
                    <path
                        d="M30.1086 34.1621C30.1043 34.1698 30.1006 34.1765 30.0977 34.1816C30.1002 34.1772 30.104 34.1705 30.1086 34.1621Z"
                        fill="url(#paint3_linear_19591_180199)"/>
                </g>
                <defs>
                    <linearGradient id="paint0_linear_19591_180199" x1="30.1188" y1="34.1426" x2="30.1188" y2="34.1481"
                                    gradientUnits="userSpaceOnUse">
                        <stop stop-color="white"/>
                        <stop offset="1" stop-color="white" stop-opacity="0.9"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_19591_180199" x1="30.1247" y1="34.123" x2="30.1247" y2="34.1427"
                                    gradientUnits="userSpaceOnUse">
                        <stop stop-color="white"/>
                        <stop offset="1" stop-color="white" stop-opacity="0.9"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear_19591_180199" x1="30.1449" y1="34.0957" x2="30.1449" y2="34.0971"
                                    gradientUnits="userSpaceOnUse">
                        <stop stop-color="white"/>
                        <stop offset="1" stop-color="white" stop-opacity="0.9"/>
                    </linearGradient>
                    <linearGradient id="paint3_linear_19591_180199" x1="30.1031" y1="34.1621" x2="30.1031" y2="34.1816"
                                    gradientUnits="userSpaceOnUse">
                        <stop stop-color="white"/>
                        <stop offset="1" stop-color="white" stop-opacity="0.9"/>
                    </linearGradient>
                    <clipPath id="clip0_19591_180199">
                        <rect width="29.8667" height="29.8667" fill="white" transform="translate(13.0664 13.0664)"/>
                    </clipPath>
                </defs>
            </svg>

            ,
            bgColor: "#9694FF",
            percentage: "2.5%"
        },
        {
            title: "Total Spend",
            value: "$1,800",
            icon: <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="56" height="56" rx="15" fill="#FF7976"/>
                <g clip-path="url(#clip0_19591_180234)">
                    <path
                        d="M28 34.765C29.933 34.765 31.5 33.8509 31.5 32.7233C31.5 31.5957 29.933 30.6816 28 30.6816C26.067 30.6816 24.5 31.5957 24.5 32.7233C24.5 33.8509 26.067 34.765 28 34.765Z"
                        fill="white"/>
                    <path
                        d="M39.7015 19.272C39.518 19.0885 39.2625 18.9959 39.0042 19.0192C38.8623 19.032 35.6707 19.3404 32.9155 21.3115C31.393 20.5713 29.7052 20.1823 27.9993 20.1823C26.2934 20.1823 24.6057 20.5713 23.0832 21.3115C20.328 19.3403 17.1364 19.0319 16.9945 19.0191C16.7357 18.996 16.4806 19.0885 16.2972 19.2719C16.1137 19.4555 16.0212 19.7109 16.0446 19.9693C16.0572 20.1083 16.3598 23.2325 18.2737 25.9676C17.5748 27.3422 17.2077 28.8596 17.2077 30.3906C17.2077 32.6895 18.0338 34.9258 19.541 36.7251V42.0573C19.541 42.5406 19.9328 42.9323 20.416 42.9323H22.4577C22.8441 42.9323 23.1848 42.6788 23.2958 42.3087L24.0244 39.8793C25.2904 40.3573 26.6233 40.599 27.9993 40.599C29.3754 40.599 30.7083 40.3573 31.9743 39.8793L32.7029 42.3087C32.8139 42.6788 33.1546 42.9323 33.541 42.9323H35.5827C36.0659 42.9323 36.4577 42.5406 36.4577 42.0573V36.7251C37.9648 34.9258 38.791 32.6895 38.791 30.3906C38.791 28.8596 38.4239 27.3422 37.725 25.9677C39.6389 23.2327 39.9416 20.1084 39.9542 19.9694C39.9775 19.711 39.8849 19.4555 39.7015 19.272ZM32.0827 26.599C32.5659 26.599 32.9577 26.9907 32.9577 27.474C32.9577 27.9572 32.5659 28.349 32.0827 28.349C31.5994 28.349 31.2077 27.9572 31.2077 27.474C31.2077 26.9907 31.5994 26.599 32.0827 26.599ZM23.916 26.599C24.3992 26.599 24.791 26.9907 24.791 27.474C24.791 27.9572 24.3992 28.349 23.916 28.349C23.4328 28.349 23.041 27.9572 23.041 27.474C23.041 26.9907 23.4328 26.599 23.916 26.599ZM27.9993 36.5156C25.0554 36.5156 22.7493 34.8502 22.7493 32.724C22.7493 30.5978 25.0554 28.9323 27.9993 28.9323C30.9432 28.9323 33.2493 30.5978 33.2493 32.724C33.2493 34.8502 30.9432 36.5156 27.9993 36.5156Z"
                        fill="white"/>
                    <path
                        d="M27.9997 18.4331C28.9577 18.4331 29.9169 18.5418 30.8525 18.7519C31.2956 18.1586 31.5581 17.4223 31.5581 16.6247C31.5581 14.6595 29.9649 13.0664 27.9997 13.0664C26.0345 13.0664 24.4414 14.6595 24.4414 16.6247C24.4414 17.4223 24.7038 18.1586 25.147 18.7519C26.0826 18.5418 27.0417 18.4331 27.9997 18.4331Z"
                        fill="white"/>
                </g>
                <defs>
                    <clipPath id="clip0_19591_180234">
                        <rect width="29.8667" height="29.8667" fill="white" transform="translate(13.0664 13.0664)"/>
                    </clipPath>
                </defs>
            </svg>

            ,
            bgColor: "#FF7976",
            percentage: "2.5%"
        },
        {
            title: "Total Remaining",
            value: "$1,800",
            icon: <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="56" height="56" rx="15" fill="#9694FF"/>
                <g clip-path="url(#clip0_19591_180255)">
                    <path
                        d="M38.6066 17.3934C35.7735 14.5602 32.0066 13 28 13C23.9934 13 20.2265 14.5602 17.3934 17.3934C14.5602 20.2265 13 23.9934 13 28C13 32.0066 14.5603 35.7735 17.3934 38.6066C20.2264 41.4398 23.9934 43 28 43C32.0066 43 35.7735 41.4398 38.6066 38.6066C41.4398 35.7735 43 32.0066 43 28C43 23.9934 41.4397 20.2265 38.6066 17.3934ZM28 27.0625C30.3262 27.0625 32.2188 28.955 32.2188 31.2812C32.2188 33.2076 30.9205 34.8355 29.1532 35.3385C29.0263 35.3746 28.9375 35.4888 28.9375 35.6208V36.411C28.9375 36.9159 28.5496 37.3502 28.0453 37.3739C27.5069 37.3993 27.0625 36.9703 27.0625 36.4375V35.6206C27.0625 35.489 26.9743 35.3747 26.8476 35.3387C25.0879 34.8383 23.793 33.2227 23.7813 31.3074C23.7782 30.7962 24.1802 30.3588 24.6912 30.3442C25.2215 30.3289 25.6562 30.7543 25.6562 31.2812C25.6562 32.629 26.7998 33.7148 28.1675 33.6191C29.3221 33.5385 30.2573 32.6032 30.3379 31.4487C30.4334 30.0809 29.3477 28.9375 28 28.9375C25.6738 28.9375 23.7812 27.045 23.7812 24.7188C23.7812 22.7924 25.0795 21.1645 26.8468 20.6615C26.9737 20.6254 27.0625 20.5112 27.0625 20.3792V19.589C27.0625 19.0841 27.4504 18.6498 27.9547 18.6261C28.4931 18.6007 28.9375 19.0297 28.9375 19.5625V20.3794C28.9375 20.511 29.0257 20.6253 29.1524 20.6613C30.9121 21.1617 32.207 22.7773 32.2187 24.6926C32.2218 25.2038 31.8198 25.6412 31.3088 25.6558C30.7785 25.6711 30.3438 25.2457 30.3438 24.7188C30.3438 23.371 29.2002 22.2852 27.8325 22.3809C26.6779 22.4615 25.7427 23.3968 25.6621 24.5513C25.5666 25.9191 26.6523 27.0625 28 27.0625Z"
                        fill="url(#paint0_linear_19591_180255)"/>
                </g>
                <defs>
                    <linearGradient id="paint0_linear_19591_180255" x1="28" y1="13" x2="28" y2="43"
                                    gradientUnits="userSpaceOnUse">
                        <stop stop-color="white"/>
                        <stop offset="1" stop-color="white" stop-opacity="0.82"/>
                    </linearGradient>
                    <clipPath id="clip0_19591_180255">
                        <rect width="30" height="30" fill="white" transform="translate(13 13)"/>
                    </clipPath>
                </defs>
            </svg>
            ,
            bgColor: "#57CAEB",
            percentage: "-1.5%"
        },
    ]

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {React.Children.toArray(
                metrics.map(({icon, value, title, percentage}) => (
                <div className={`p-5 rounded-lg shadow-sm bg-white flex gap-4`}>
            <div>
                {icon}
            </div>
            <div>
                <div className={'flex items-center gap-2'}><h3 className="text-[#707FA3] text-xs font-normal">{title}</h3>  <p className={'flex items-center gap-1'}>{percentage} <ArrowUpIcon fill={'#24B29F'} width={'15px'} height={'15px'}/></p></div>
                <p className="text-lg font-bold">N{value}</p>
            </div>
        </div>
    )
)
)}
</div>
)
    ;
}

export default BeneficiariesProfileMetrics;