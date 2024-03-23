"use client"
import React from "react";
import {  signOut } from "next-auth/react"
import { useToast } from "./ui/use-toast";


const SignOut = () => {
  const {toast} = useToast()
  const handleLogout =()=>{
   signOut()
   toast({title:"Logout successful!"})
  }
  
  return <>
  <button className="inline-block text-lg text-white hover:text-[#3F83F8] bg-[#3F83F8] hover:bg-[#fff] skew-x-[-17deg] duration-300" onClick={handleLogout}>
  <span className="inline-block skew-x-[17deg] px-[20px] py-[5px]">Logout</span>
  </button></>;
};

export default SignOut;
