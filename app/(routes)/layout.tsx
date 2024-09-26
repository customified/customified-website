import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ToastProvider from "@/providers/toast-provider";
import React from "react";

export default function Layout({
    children
}:{
    children: React.ReactNode
}){
    return(
        <div>
        <ToastProvider />
        <Navbar/>
        {children}
        <Footer/>
        </div>
    )
}