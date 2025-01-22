import Header from "@/components/content/dashboard/Header";
import LargeScreen from "@/components/content/project/header/LargeScreen";
import React from "react";
import { SetStateAction } from "react";





export default function DonorsLayout() {
    return (
        <>
        <Header userName={"Donors"} type={""} showMap={false} toggleMap={function (): void {
            throw new Error("Function not implemented.");
        } } />
        
        <LargeScreen setSearch={function (): void {
            throw new Error("Function not implemented.");
        } } search={""} setSelectModalOpen={function (_value: SetStateAction<boolean>): void {
            throw new Error("Function not implemented.");
        } } />
        </>

    );
}
