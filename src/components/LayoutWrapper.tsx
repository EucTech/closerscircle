"use client";
import React from "react";
import Navbar from "./Navabar/Navbar";
import Footer from "./Footer/Footer";
import { redirect, usePathname } from "next/navigation";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ children }) => {
  const pathname = usePathname();

  const isauthenticated = false;

  if (pathname === "/dashboard") redirect("/dashboard/learning");

  if (!isauthenticated && pathname.startsWith("/dashboard")) {
    redirect("/login");
  }

  return (
    <>
      {
      pathname.startsWith("/register") ||
      pathname.startsWith("/login") ? (
        <>{children}</>
      ) : (
        <>
          <Navbar />
         <div className="pt-16">
         {children}
         </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default LayoutWrapper;
