import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Logo from "@/components/layout/dashboardLayout/Sidebar/Logo";
import { useAppDispatch } from "@/hook/useReduxTypes";
import { logout } from "@/redux/auth/authSlice";
import { authRoutePathname } from "@/constant";

function Sidebar() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const menuItems = [
    {
      name: "NGOs",
      link: "/",
      active: router.pathname === "/",
      icon: (
        <svg
          className="w-6 h-6 "
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M4 13h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zm0 8h6c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm10 0h6c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zM13 4v4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      name: "Donors",
      link: "/projects",
      active: router.pathname.includes("/projects"),
      icon: (
        <svg
          className="w-6 h-6"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      name: "Vendors",
      link: "/beneficiaries",
      active: router.pathname.includes("/beneficiaries"),
      icon: (
        <svg
          className="w-6 h-6 "
          width="24"
          height="24"
          viewBox="0 0 22 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.3478 6.6999L7.297 0.399902H2.3602L0.297395 5.7999C0.233795 5.9919 0.200195 6.1911 0.200195 6.3999C0.200195 7.7247 1.5802 8.7999 3.2854 8.7999C4.8574 8.7999 6.157 7.8831 6.3478 6.6999ZM11.0002 8.7999C12.7042 8.7999 14.0854 7.7247 14.0854 6.3999C14.0854 6.3507 14.0818 6.3015 14.0794 6.2547L13.4686 0.399902H8.53179L7.9198 6.2499C7.9174 6.2991 7.91499 6.3483 7.91499 6.3999C7.91499 7.7247 9.2962 8.7999 11.0002 8.7999ZM17.0002 10.0551V14.7999H5.0002V10.0623C4.4746 10.2519 3.8962 10.3599 3.2854 10.3599C3.0514 10.3599 2.8246 10.3323 2.6002 10.3011V17.9199C2.6002 18.8439 3.35499 19.5999 4.27779 19.5999H17.7202C18.6442 19.5999 19.4002 18.8427 19.4002 17.9199V10.3023C19.1734 10.3371 18.9444 10.3568 18.715 10.3611C18.1299 10.3605 17.5494 10.2569 17.0002 10.0551ZM21.7042 5.7999L19.639 0.399902H14.7034L15.6514 6.6903C15.8362 7.8783 17.1358 8.7999 18.715 8.7999C20.419 8.7999 21.8002 7.7247 21.8002 6.3999C21.8002 6.1911 21.7666 5.9919 21.7042 5.7999Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      name: "Beneficiaries",
      link: "/vendors",
      active: router.pathname.includes("/vendors"),
      icon: (
        <svg
          className="w-6 h-6 "
          width="24"
          height="24"
          viewBox="0 0 24 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24 10.6C24 11.2 22.8 11.6 21.4 11.8C20.5 10.1 18.7 8.8 16.6 7.9C16.8 7.6 17 7.4 17.2 7.1H18C21.1 7 24 8.9 24 10.6ZM6.8 7H6C2.9 7 0 8.9 0 10.6C0 11.2 1.2 11.6 2.6 11.8C3.5 10.1 5.3 8.8 7.4 7.9L6.8 7ZM12 8C14.2 8 16 6.2 16 4C16 1.8 14.2 0 12 0C9.8 0 8 1.8 8 4C8 6.2 9.8 8 12 8ZM12 9C7.9 9 4 11.6 4 14C4 16 12 16 12 16C12 16 20 16 20 14C20 11.6 16.1 9 12 9ZM17.7 6H18C19.7 6 21 4.7 21 3C21 1.3 19.7 0 18 0C17.5 0 17.1 0.1 16.7 0.3C17.5 1.3 18 2.6 18 4C18 4.7 17.9 5.4 17.7 6ZM6 6H6.3C6.1 5.4 6 4.7 6 4C6 2.6 6.5 1.3 7.3 0.3C6.9 0.1 6.5 0 6 0C4.3 0 3 1.3 3 3C3 4.7 4.3 6 6 6Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      name: "Campaigns",
      link: "",
      active: router.pathname.includes(""),
      icon: (
        <svg
          className="w-4 h-4 "
          width="24"
          height="14"
          viewBox="0 0 20 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.664 0.47806L6 5.00006V12.0001L6.748 12.2671L5.621 14.5211C5.49264 14.7773 5.42088 15.0582 5.41059 15.3446C5.4003 15.631 5.45171 15.9163 5.56135 16.1811C5.67099 16.4459 5.83628 16.684 6.04603 16.8793C6.25578 17.0746 6.50507 17.2225 6.777 17.3131L10.861 18.6741C11.3179 18.823 11.8129 18.8038 12.2568 18.6199C12.7007 18.436 13.0643 18.0995 13.282 17.6711L14.585 15.0651L18.664 16.5221C18.8148 16.5759 18.9764 16.5927 19.1351 16.571C19.2937 16.5494 19.4449 16.49 19.5758 16.3978C19.7068 16.3055 19.8136 16.1832 19.8875 16.0411C19.9613 15.899 19.9999 15.7412 20 15.5811V1.41906C19.9999 1.25891 19.9613 1.10114 19.8875 0.959019C19.8136 0.816897 19.7068 0.69458 19.5758 0.602361C19.4449 0.510142 19.2937 0.450717 19.1351 0.429086C18.9764 0.407455 18.8148 0.424251 18.664 0.47806ZM11.493 16.7771L7.41 15.4161L8.645 12.9451L12.687 14.3891L11.493 16.7771ZM2 12.0001H4V5.00006H2C0.897 5.00006 0 5.89706 0 7.00006V10.0001C0 11.1031 0.897 12.0001 2 12.0001Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      name: "Settings",
      // link: "/marketplace",
      link: "/account-settings",
      active: router.pathname.includes("/account-settings"),
      icon: (
        <svg
          className="w-6 h-6"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.43 12.98c.04-.32.07-.65.07-.98s-.03-.66-.07-.98l2.11-1.65a.5.5 0 0 0 .12-.62l-2-3.46a.5.5 0 0 0-.61-.22l-2.49 1a7.03 7.03 0 0 0-1.69-.98l-.38-2.65a.5.5 0 0 0-.5-.42h-4a.5.5 0 0 0-.5.42l-.38 2.65a7.03 7.03 0 0 0-1.69.98l-2.49-1a.5.5 0 0 0-.61.22l-2 3.46a.5.5 0 0 0 .12.62L4.57 11c-.04.32-.07.65-.07.98s.03.66.07.98L2.46 14.63a.5.5 0 0 0-.12.62l2 3.46a.5.5 0 0 0 .61.22l2.49-1c.52.4 1.09.73 1.69.98l.38 2.65a.5.5 0 0 0 .5.42h4c.26 0 .47-.18.5-.42l.38-2.65c.6-.25 1.17-.58 1.69-.98l2.49 1a.5.5 0 0 0 .61-.22l2-3.46a.5.5 0 0 0-.12-.62l-2.11-1.65zm-7.43 3.02a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      name: "Activity logs",
      link: "/cash-for-work",
      active: router.pathname.includes("/cash-for-work"),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM17.26 9.96L14.95 12.94C14.66 13.31 14.25 13.55 13.78 13.6C13.31 13.66 12.85 13.53 12.48 13.24L10.65 11.8C10.58 11.74 10.5 11.74 10.46 11.75C10.42 11.75 10.35 11.77 10.29 11.85L7.91 14.94C7.76 15.13 7.54 15.23 7.32 15.23C7.16 15.23 7 15.18 6.86 15.07C6.53 14.82 6.47 14.35 6.72 14.02L9.1 10.93C9.39 10.56 9.8 10.32 10.27 10.26C10.73 10.2 11.2 10.33 11.57 10.62L13.4 12.06C13.47 12.12 13.54 12.12 13.59 12.11C13.63 12.11 13.7 12.09 13.76 12.01L16.07 9.03C16.32 8.7 16.8 8.64 17.12 8.9C17.45 9.17 17.51 9.64 17.26 9.96Z"
            fill="#707FA3"
          />
        </svg>
      ),
    },
    // {
    //   name: "Settings",
    //   link: "/settings",
    //   active: router.pathname.includes("/settings"),
    //   icon: (
    //     <svg
    //       className="w-4 h-4 "
    //       width="24"
    //       height="24"
    //       viewBox="0 0 24 24"
    //       fill="none"
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       <path
    //         d="M19.14 12.9404C19.18 12.6404 19.2 12.3304 19.2 12.0004C19.2 11.6804 19.18 11.3604 19.13 11.0604L21.16 9.48039C21.2474 9.40829 21.3072 9.30809 21.3291 9.19686C21.351 9.08563 21.3336 8.97026 21.28 8.87039L19.36 5.55039C19.3034 5.44996 19.2132 5.37277 19.1052 5.3325C18.9972 5.29224 18.8785 5.29149 18.77 5.33039L16.38 6.29039C15.88 5.91039 15.35 5.59039 14.76 5.35039L14.4 2.81039C14.3823 2.69592 14.3241 2.5916 14.236 2.51637C14.1479 2.44114 14.0358 2.39999 13.92 2.40039H10.08C9.83996 2.40039 9.64996 2.57039 9.60996 2.81039L9.24996 5.35039C8.65996 5.59039 8.11996 5.92039 7.62996 6.29039L5.23996 5.33039C5.01996 5.25039 4.76996 5.33039 4.64996 5.55039L2.73996 8.87039C2.61996 9.08039 2.65996 9.34039 2.85996 9.48039L4.88996 11.0604C4.83996 11.3604 4.79996 11.6904 4.79996 12.0004C4.79996 12.3104 4.81996 12.6404 4.86996 12.9404L2.83996 14.5204C2.75249 14.5925 2.69272 14.6927 2.67084 14.8039C2.64896 14.9152 2.66632 15.0305 2.71996 15.1304L4.63996 18.4504C4.75996 18.6704 5.00996 18.7404 5.22996 18.6704L7.61996 17.7104C8.11996 18.0904 8.64996 18.4104 9.23996 18.6504L9.59996 21.1904C9.64996 21.4304 9.83996 21.6004 10.08 21.6004H13.92C14.16 21.6004 14.36 21.4304 14.39 21.1904L14.75 18.6504C15.34 18.4104 15.88 18.0904 16.37 17.7104L18.76 18.6704C18.98 18.7504 19.23 18.6704 19.35 18.4504L21.27 15.1304C21.39 14.9104 21.34 14.6604 21.15 14.5204L19.14 12.9404ZM12 15.6004C10.02 15.6004 8.39996 13.9804 8.39996 12.0004C8.39996 10.0204 10.02 8.40039 12 8.40039C13.98 8.40039 15.6 10.0204 15.6 12.0004C15.6 13.9804 13.98 15.6004 12 15.6004Z"
    //         fill="currentColor"
    //       />
    //     </svg>
    //   ),
    // },
    // {
    //   name: "Support",
    //   link: "/support",
    //   active: router.pathname.includes("/support"),
    //   icon: (
    //     <svg
    //       className="w-4 h-4 "
    //       width="24"
    //       height="24"
    //       viewBox="0 0 24 24"
    //       fill="none"
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       <path
    //         d="M12 2C6.47917 2 2 6.47917 2 12C2 17.5208 6.47917 22 12 22C17.5208 22 22 17.5208 22 12C22 6.47917 17.5208 2 12 2ZM12.5437 17.7292H10.9703C10.9349 17.729 10.901 17.7149 10.876 17.6898C10.851 17.6647 10.837 17.6307 10.837 17.5953V16.0224C10.837 15.987 10.851 15.953 10.876 15.9279C10.901 15.9028 10.9349 15.8887 10.9703 15.8885H12.5437C12.5792 15.8887 12.6131 15.9028 12.6381 15.9279C12.6631 15.953 12.6771 15.987 12.6771 16.0224V17.5953C12.6771 17.6307 12.6631 17.6647 12.6381 17.6898C12.6131 17.7149 12.5792 17.729 12.5437 17.7292ZM13.4292 12.5729C12.5849 13.1396 12.4688 13.6589 12.4688 14.1354V14.7083C12.4688 14.7498 12.4523 14.7895 12.423 14.8188C12.3937 14.8481 12.3539 14.8646 12.3125 14.8646H11.1667C11.1252 14.8646 11.0855 14.8481 11.0562 14.8188C11.0269 14.7895 11.0104 14.7498 11.0104 14.7083V14.1354C11.0104 12.9943 11.5354 12.087 12.6156 11.3615C13.6198 10.6875 14.1875 10.2604 14.1875 9.32135C14.1875 8.68281 13.8229 8.19792 13.0682 7.83906C12.8906 7.75469 12.4953 7.6724 12.0089 7.67812C11.3984 7.68594 10.9245 7.83177 10.5594 8.12552C9.87083 8.67969 9.8125 9.28333 9.8125 9.29167C9.78391 9.46872 9.76928 9.64774 9.76875 9.82708C9.76875 9.86852 9.75229 9.90827 9.72299 9.93757C9.69368 9.96687 9.65394 9.98333 9.6125 9.98333H8.50573C8.46694 9.98354 8.42946 9.96931 8.40058 9.94342C8.3717 9.91752 8.35349 9.88181 8.34948 9.84323C8.33073 9.63524 8.3323 9.42591 8.35417 9.21823C8.36562 9.09167 8.44792 7.95156 9.64427 6.98906C10.2646 6.4901 11.0536 6.23073 11.988 6.21927C12.6495 6.21146 13.2708 6.32344 13.6922 6.5224C14.9531 7.12187 15.6458 8.11615 15.6458 9.32135C15.6458 11.0833 14.4682 11.8745 13.4292 12.5729Z"
    //         fill="currentColor"
    //       />
    //     </svg>
    //   ),
    // },
    // {
    //   name: "Platform Guide",
    //   link: "/platform-guide",
    //   active: router.pathname.includes("/platform-guide"),
    //   icon: (
    //     <svg
    //       className="w-4 h-4 "
    //       width="24"
    //       height="24"
    //       viewBox="0 0 24 24"
    //       fill="none"
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       <path
    //         d="M22 4.84969V16.7397C22 17.7097 21.21 18.5997 20.24 18.7197L19.93 18.7597C18.29 18.9797 15.98 19.6597 14.12 20.4397C13.47 20.7097 12.75 20.2197 12.75 19.5097V5.59969C12.75 5.22969 12.96 4.88969 13.29 4.70969C15.12 3.71969 17.89 2.83969 19.77 2.67969H19.83C21.03 2.67969 22 3.64969 22 4.84969Z"
    //         fill="currentColor"
    //       />
    //       <path
    //         d="M10.7102 4.70969C8.88023 3.71969 6.11023 2.83969 4.23023 2.67969H4.16023C2.96023 2.67969 1.99023 3.64969 1.99023 4.84969V16.7397C1.99023 17.7097 2.78023 18.5997 3.75023 18.7197L4.06023 18.7597C5.70023 18.9797 8.01023 19.6597 9.87023 20.4397C10.5202 20.7097 11.2402 20.2197 11.2402 19.5097V5.59969C11.2402 5.21969 11.0402 4.88969 10.7102 4.70969ZM5.00023 7.73969H7.25023C7.66023 7.73969 8.00023 8.07969 8.00023 8.48969C8.00023 8.90969 7.66023 9.23969 7.25023 9.23969H5.00023C4.59023 9.23969 4.25023 8.90969 4.25023 8.48969C4.25023 8.07969 4.59023 7.73969 5.00023 7.73969ZM8.00023 12.2397H5.00023C4.59023 12.2397 4.25023 11.9097 4.25023 11.4897C4.25023 11.0797 4.59023 10.7397 5.00023 10.7397H8.00023C8.41023 10.7397 8.75023 11.0797 8.75023 11.4897C8.75023 11.9097 8.41023 12.2397 8.00023 12.2397Z"
    //         fill="currentColor"
    //       />
    //     </svg>
    //   ),
    // },
  ];

  return (
    <div className="hidden lg:flex w-[280px] height-[820px] bg-[#F7F9FB] h-screen py-4 px-8 gap-10 flex-col">
      <Logo />

      <ul className="flex flex-col gap-5 flex-grow">
        {menuItems.slice(0, 7).map((item) => (
          <li key={item.name}>
            <Link href={item.link}>
              <div
                className={`p-3 flex items-center gap-2 rounded-[10px] cursor-pointer text-[18px] font-medium text-center font-sans ${
                  item.active
                    ? "bg-secondaryBgColor text-primaryButtonTextColor font-semibold italic"
                    : "text-primaryTextColor hover:text-secondaryBgColor hover:bg-primaryHover"
                }`}
              >
                {item?.icon} {item?.name}
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <ul className="flex flex-col gap-5 flex-grow">
        <hr className="h-px my-2 bg-divider border-0" />
        {menuItems.slice(7).map((item) => (
          <li key={item.name}>
            <Link href={item.link}>
              <div
                className={`p-2 flex items-center gap-2 rounded-md cursor-pointer text-xs ${
                  item.active
                    ? "bg-red-700 text-primaryButtonTextColor font-semibold"
                    : "text-primaryTextColor hover:text-secondaryBgColor hover:bg-primaryHover"
                }`}
              >
                {item?.icon} {item?.name}
              </div>
            </Link>
          </li>
        ))}
        <li
          className="text-danger font-semibold"
          onClick={async () => {
            const res = await dispatch(logout());
            if (res.meta.requestStatus === "fulfilled") {
              router.push(`${authRoutePathname}/login` as string);
            }
            console.log(res);
          }}
        ></li>
      </ul>
      <div
        className={`p-2 flex items-center gap-10 rounded-md cursor-pointer text-[18px] text-red-500`}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.936 8.84859C19.8935 8.74691 19.8327 8.65441 19.7552 8.57691L17.256 6.07773C16.9302 5.75273 16.4035 5.75273 16.0777 6.07773C15.7519 6.40355 15.7519 6.93105 16.0777 7.25605L17.1552 8.33355H12.5002C12.0394 8.33355 11.6669 8.70687 11.6669 9.16687C11.6669 9.62687 12.0394 10.0002 12.5002 10.0002H17.1552L16.0777 11.0777C15.7518 11.4035 15.7518 11.931 16.0777 12.256C16.2402 12.4193 16.4535 12.5002 16.6668 12.5002C16.8802 12.5002 17.0935 12.4194 17.256 12.256L19.7552 9.75683C19.8327 9.68015 19.8935 9.58765 19.936 9.48515C20.0201 9.28191 20.0201 9.05191 19.936 8.84859Z"
            fill="#E42C66"
          />
          <path
            d="M14.1666 11.6667C13.7058 11.6667 13.3333 12.04 13.3333 12.5V16.6666H9.99998V3.33331C9.99998 2.96581 9.7583 2.64082 9.4058 2.535L6.51163 1.66668H13.3333V5.83335C13.3333 6.29335 13.7058 6.66667 14.1666 6.66667C14.6274 6.66667 14.9999 6.29335 14.9999 5.83335V0.833358C14.9999 0.37332 14.6274 0 14.1666 0H0.833319C0.803319 0 0.776639 0.0125 0.747499 0.0158203C0.708319 0.02 0.672499 0.0266406 0.634999 0.0358202C0.547499 0.0583202 0.468319 0.0924998 0.394179 0.13914C0.375859 0.15082 0.353359 0.15164 0.335859 0.164961C0.32914 0.17 0.32664 0.179179 0.31996 0.184179C0.22914 0.25582 0.15332 0.34332 0.0983201 0.447499C0.0866404 0.469999 0.0841405 0.494179 0.0749998 0.517499C0.0483202 0.580819 0.0191796 0.642499 0.00917967 0.712499C0.00499999 0.737499 0.0125 0.760819 0.0116797 0.784999C0.0108594 0.801678 0 0.816678 0 0.833319V17.5C0 17.8975 0.28082 18.2391 0.669999 18.3166L9.0033 19.9833C9.05748 19.995 9.11248 20 9.16662 20C9.35744 20 9.54494 19.9342 9.69494 19.8108C9.88744 19.6525 9.99994 19.4166 9.99994 19.1666V18.3333H14.1666C14.6274 18.3333 14.9999 17.96 14.9999 17.5V12.5C14.9999 12.04 14.6274 11.6667 14.1666 11.6667Z"
            fill="#E42C66"
          />
        </svg>
        Log Out
      </div>
    </div>
  );
}

export default Sidebar;
