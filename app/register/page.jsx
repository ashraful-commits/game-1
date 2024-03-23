"use client";

import { useToast } from "../../components/ui/use-toast"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useSWR, { mutate } from 'swr';
import React, { useState } from "react";
import { useAuth } from './../../hooks/useAuth';
import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
//===============================yup schema
const schema = yup.object({
 email:yup.string().required("Email is a required field!.").email("Email is not valid!."),
 name:yup.string().required("Username is a required field!."),
 password:yup.string().min(6,"Password must be at least 6 characters."),
 confirm_password:yup.string().required("Confirm password is a required field !").oneOf([yup.ref("password")],"Confirm password & Password must be match.")
})
const Register = () => {
  const Auth = useAuth("/api/register")
  const {toast} = useToast()
  const router = useRouter();
  //================================= react-hook-form
  const {handleSubmit,register,formState:{errors}} = useForm({resolver:yupResolver(schema)})
  //========================================show hide password
  const [showPassword, setShowPassword] = useState(true);
  const [showConPassword, SetShowConPassword] = useState(true);
  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const handleToggleConfirmPassword = () => {
    SetShowConPassword((prevShowPassword) => !prevShowPassword);
  };
 //================================handle form submit
  const handleForm = async (data) => {
    try {
      const userData= await Auth({email:data.email,password:data.password,name:data.name})
          if (!userData?.user) {
            toast({variant: "destructive", title:userData.message });
          } else {
            toast({ title:userData.message });
            router.push("/signin");
          }
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  //===================================================
  return (
    <div className=" flex w-screen bg-black h-screen justify-center items-center">
      <div className=" w-[1400px] h-[900px] flex justify-center items-center m-auto">
        <div className="flex justify-center items-center w-full h-full">
            <div className=" w-[862px] xl:block lg:block md:block hidden relative rounded-3xl overflow-hidden h-[900px] bg-left" >
              <Image
                alt='signup'
                src='/signUpBg.png'
                width={1800}
                height={1800}
                className="w-full h-full object-cover "
               
              />
               <Image
                alt='logo'
                src='/logo.svg'
                width={103}
                height={96}
                className=" absolute top-[36px] left-[43px] z-[9999]  "
               
              />
              <div className="absolute  z-[999] w-full h-full bg-[#0209148A] bg-opacity-50 top-0 left-0"></div>

            </div>
          <div className="mx-auto xl:w-[538px] lg:w-[538px] md:[538px] w-[375px] h-[900ox] px-[50px] ">
            <div className="xl:w-[429px] md:w-[429px] lg:w-[429px] w-[318px] xl:ml-[71px] lg:ml-[71px] md:ml-[71px] mx-auto">
            <h2 className="text-white mb-[22px] font-[500] text-[30px]  ">
              Sign up
            </h2>
            <p className="text-white  text-[16px] font-[400] ">if you already have an account </p>
            <p className="text-white  flex gap-x-[10px] text-[16px] font-[400] ">you can <Link className="text-[16px] block text-[#007FAF] font-[600] " href="/signin">Login here</Link> </p>
            </div>
            <form
              onSubmit={handleSubmit(handleForm)}
              className="xl:w-[429px] md:w-[429px] lg:w-[429px] w-[319px] xl:ml-[71px] lg:ml-[71px] md:ml-[71px] mx-auto mt-[52px]"
            >
              <div className="flex flex-col gap-y-[16px]">
              <div className={`h-[64px] w-full border-b-2 ${errors.email?.message?"border-red-500":"border-white"}`}>
                  <label
                    htmlFor="email"
                    className="text-white  text-[13px] font-[500] "
                  >
                    Email
                  </label>
                  <div className="flex items-center gap-x-[10px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
  <path d="M1.49414 2.67676H15.5059C16.3297 2.67676 17 3.34703 17 4.1709V12.8297C17 13.6535 16.3297 14.3238 15.5059 14.3238H1.49414C0.670271 14.3238 0 13.6535 0 12.8297V4.1709C0 3.34703 0.670271 2.67676 1.49414 2.67676ZM1.68914 3.67285L1.88856 3.8389L7.90719 8.85061C8.25071 9.13663 8.74936 9.13663 9.09281 8.85061L15.1114 3.8389L15.3109 3.67285H1.68914ZM16.0039 4.39196L11.1001 8.47539L16.0039 11.739V4.39196ZM1.49414 13.3277H15.5059C15.7465 13.3277 15.9478 13.1561 15.9939 12.9289L10.3014 9.14041L9.73018 9.61608C9.37377 9.91285 8.93685 10.0612 8.49997 10.0612C8.06308 10.0612 7.62619 9.91285 7.26976 9.61608L6.69853 9.14041L1.00605 12.9289C1.05221 13.1562 1.25348 13.3277 1.49414 13.3277ZM0.996094 11.739L5.89993 8.47542L0.996094 4.39196V11.739Z" fill="white"/>
                </svg>
                  <input
                    type="email"
                    className="w-full bg-transparent focus:outline-none focus:bg-transparent"
                    autoComplete="off"
                    placeholder="Enter your email address"
                    {...register("email")}
                  />
                  </div>
                </div>
                <span className="text-red-500 block text-[12px] font-[300] ">{errors?.email?.message}</span>
                <div className={`h-[64px] w-full border-b-2 ${errors.email?.message?"border-red-500":"border-white"}`}>
                  <label
                    htmlFor="name"
                    className="text-white  text-[13px] font-[500]"
                  >
                    Username
                  </label>
                 <div  className="flex items-center gap-x-[10px]">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M7.88599 7.70726C8.94482 7.70726 9.86157 7.3275 10.6108 6.57823C11.3599 5.82909 11.7397 4.91247 11.7397 3.85351C11.7397 2.79492 11.36 1.87817 10.6107 1.12878C9.86145 0.37976 8.9447 0 7.88599 0C6.82703 0 5.9104 0.37976 5.16125 1.1289C4.41211 1.87805 4.03223 2.79479 4.03223 3.85351C4.03223 4.91247 4.41211 5.82921 5.16125 6.57836C5.91064 7.32738 6.82739 7.70726 7.88599 7.70726ZM5.82434 1.79187C6.39917 1.21704 7.07349 0.93762 7.88599 0.93762C8.69836 0.93762 9.3728 1.21704 9.94775 1.79187C10.5226 2.36682 10.8021 3.04125 10.8021 3.85351C10.8021 4.66601 10.5226 5.34032 9.94775 5.91527C9.3728 6.49022 8.69836 6.76964 7.88599 6.76964C7.07373 6.76964 6.39941 6.4901 5.82434 5.91527C5.24939 5.34044 4.96985 4.66601 4.96985 3.85351C4.96985 3.04125 5.24939 2.36682 5.82434 1.79187Z" fill="white"/>
                  <path d="M14.629 12.3031C14.6074 11.9913 14.5637 11.6512 14.4994 11.2921C14.4344 10.9303 14.3508 10.5883 14.2507 10.2756C14.1472 9.95251 14.0067 9.63342 13.8328 9.32763C13.6525 9.01025 13.4406 8.73388 13.2028 8.50647C12.9541 8.26855 12.6497 8.07727 12.2976 7.93774C11.9468 7.79895 11.558 7.72864 11.1421 7.72864C10.9788 7.72864 10.8208 7.79565 10.5157 7.99426C10.328 8.1167 10.1084 8.2583 9.86328 8.41492C9.65369 8.54846 9.36975 8.67358 9.01904 8.78686C8.67688 8.89758 8.32947 8.95373 7.98645 8.95373C7.64368 8.95373 7.29626 8.89758 6.95386 8.78686C6.60352 8.6737 6.31946 8.54858 6.11023 8.41504C5.86743 8.25989 5.64771 8.11829 5.45715 7.99414C5.15234 7.79553 4.99438 7.72852 4.83105 7.72852C4.41504 7.72852 4.02637 7.79895 3.67566 7.93787C3.32385 8.07715 3.01929 8.26843 2.77039 8.50659C2.53259 8.73413 2.32068 9.01037 2.1405 9.32763C1.9668 9.63342 1.82617 9.95239 1.72266 10.2758C1.62268 10.5884 1.53906 10.9303 1.47412 11.2921C1.40967 11.6507 1.36609 11.991 1.34448 12.3035C1.32324 12.609 1.3125 12.927 1.3125 13.2483C1.3125 14.0835 1.578 14.7596 2.10156 15.2583C2.61865 15.7504 3.30273 15.9999 4.13489 15.9999H11.839C12.6709 15.9999 13.355 15.7504 13.8722 15.2583C14.3959 14.76 14.6614 14.0836 14.6614 13.2482C14.6613 12.9258 14.6504 12.6078 14.629 12.3031ZM13.2257 14.579C12.884 14.9042 12.4304 15.0622 11.8389 15.0622H4.13489C3.54321 15.0622 3.0896 14.9042 2.74805 14.5791C2.41296 14.2601 2.25012 13.8247 2.25012 13.2483C2.25012 12.9485 2.26001 12.6525 2.27979 12.3683C2.29907 12.0895 2.3385 11.7832 2.39697 11.4578C2.45471 11.1363 2.5282 10.8347 2.6156 10.5616C2.69946 10.2998 2.81384 10.0405 2.95569 9.79077C3.09106 9.55273 3.24683 9.34851 3.4187 9.18396C3.57947 9.03003 3.7821 8.90405 4.02087 8.80957C4.2417 8.72217 4.48987 8.67431 4.75928 8.66711C4.79211 8.68457 4.85059 8.71789 4.94531 8.77966C5.13806 8.90527 5.36023 9.04858 5.60583 9.20544C5.88269 9.38195 6.23938 9.54138 6.66553 9.67895C7.1012 9.81982 7.54553 9.89135 7.98657 9.89135C8.42761 9.89135 8.87207 9.81982 9.3075 9.67907C9.73401 9.54126 10.0906 9.38195 10.3678 9.2052C10.6191 9.04455 10.8351 8.90539 11.0278 8.77966C11.1226 8.71802 11.181 8.68457 11.2139 8.66711C11.4834 8.67431 11.7316 8.72217 11.9525 8.80957C12.1912 8.90405 12.3938 9.03015 12.5546 9.18396C12.7264 9.34839 12.8822 9.55261 13.0176 9.79089C13.1595 10.0405 13.274 10.2999 13.3578 10.5615C13.4453 10.835 13.5189 11.1365 13.5765 11.4576C13.6349 11.7837 13.6744 12.0901 13.6937 12.3684V12.3686C13.7136 12.6517 13.7236 12.9476 13.7238 13.2483C13.7236 13.8248 13.5608 14.2601 13.2257 14.579Z" fill="white"/>
                </svg>
                 <input
                    type="text"
                    className="w-full bg-transparent focus:outline-none focus:bg-transparent"
                    autoComplete="off"
                    placeholder="Enter your User name"
                    {...register("name")}
                  />
                 </div>
                </div>
                <span className="text-red-500 block text-[12px] font-[300] ">{errors?.name?.message}</span>
                <div className={`h-[64px] w-full border-b-2 ${errors.email?.message?"border-red-500":"border-white"}`}>
                  <label
                    htmlFor="password"
                    className="text-white  text-[13px] font-[500]"
                  >
                    Password
                  </label>
                  <div className="flex items-center gap-x-[10px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                    <path d="M13.0031 7.2296V4.53742C13.0103 3.31927 12.5238 2.14798 11.6552 1.29383C10.8155 0.457706 9.71626 0 8.55217 0C8.53415 0 8.51253 0 8.49451 0C6.01136 0.00360399 3.99313 2.03625 3.99313 4.53742V7.2296C3.0561 7.34132 2.37134 8.12699 2.37134 9.07844V15.1259C2.37134 16.1531 3.19305 17 4.22018 17H12.7796C13.8068 17 14.6285 16.1531 14.6285 15.1259V9.07844C14.6249 8.13059 13.9401 7.34132 13.0031 7.2296ZM4.71032 4.53742H4.71393C4.71393 2.43269 6.41141 0.709985 8.49811 0.709985H8.50172C9.49281 0.706381 10.4443 1.09922 11.147 1.79839C11.8787 2.52279 12.2859 3.51028 12.2787 4.53742V7.2332H11.4858V4.53742C11.493 3.71931 11.1687 2.93364 10.5884 2.35701C10.0406 1.8092 9.2982 1.49926 8.52334 1.49926H8.50172C6.84388 1.49926 5.5032 2.86156 5.5032 4.53381V7.2332H4.71032V4.53742ZM10.7686 4.53742V7.2332H6.2276V4.53742C6.2276 3.26161 7.24393 2.22366 8.50532 2.22366H8.52695C9.11079 2.22366 9.67301 2.45792 10.0875 2.87238C10.5272 3.31206 10.7758 3.91393 10.7686 4.53742ZM13.9401 15.1367C13.9401 15.7674 13.4284 16.2792 12.7977 16.2792H4.2346C3.6039 16.2792 3.09214 15.7674 3.09214 15.1367V9.09646C3.09214 8.46576 3.6039 7.954 4.2346 7.954H12.7977C13.4284 7.954 13.9401 8.46576 13.9401 9.09646V15.1367Z" fill="white"/>
                    <path d="M9.74528 11.8928C9.58671 11.3342 9.07855 10.9521 8.49831 10.9521C7.78111 10.9521 7.19727 11.5324 7.19727 12.2532C7.19727 12.8334 7.57929 13.3416 8.13791 13.5002V14.5093C8.13791 14.7075 8.30009 14.8697 8.49831 14.8697C8.69652 14.8697 8.8587 14.7075 8.8587 14.5093V13.5002C9.54707 13.3019 9.94711 12.5811 9.74528 11.8928ZM8.49831 12.8298C8.17755 12.8298 7.91806 12.5703 7.91806 12.2496C7.91806 11.9288 8.17755 11.6693 8.49831 11.6693C8.81906 11.6693 9.07855 11.9288 9.07855 12.2496C9.07855 12.5703 8.81906 12.8298 8.49831 12.8298Z" fill="white"/>
                  </svg>
                  <input
                    type={showPassword?"password":"text"}
                    className="w-full bg-transparent focus:outline-none focus:bg-transparent"
                    autoComplete="off"
                    placeholder="Enter your Password"
                    {...register("password")}
                  />
                  <span onClick={handleTogglePassword}>
                    {showPassword?<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <g clip-path="url(#clip0_2207_947)">
                        <path d="M6.89331 4.78298L8.8974 6.78707L8.90694 6.6821C8.90694 5.62914 8.05124 4.77344 6.99829 4.77344L6.89331 4.78298Z" fill="white"/>
                        <path d="M6.99843 3.50069C8.75439 3.50069 10.1795 4.92583 10.1795 6.6818C10.1795 7.09216 10.0968 7.48343 9.95369 7.84289L11.8146 9.70383C12.7753 8.90219 13.5324 7.86517 14 6.6818C12.8962 3.88881 10.1827 1.91016 6.99846 1.91016C6.10774 1.91016 5.25523 2.0692 4.46313 2.3555L5.83737 3.72654C6.19679 3.58658 6.58807 3.50069 6.99843 3.50069Z" fill="white"/>
                        <path d="M0.636209 1.76723L2.08679 3.21781L2.37628 3.5073C1.32652 4.32803 0.496251 5.41915 0 6.68203C1.10067 9.47502 3.81731 11.4537 6.99842 11.4537C7.98457 11.4537 8.92616 11.2628 9.78825 10.9161L10.0587 11.1865L11.9132 13.0442L12.7244 12.2362L1.44739 0.956055L0.636209 1.76723ZM4.15452 5.28235L5.13748 6.26531C5.10885 6.40211 5.08976 6.53888 5.08976 6.68203C5.08976 7.73498 5.94547 8.59068 6.99842 8.59068C7.14157 8.59068 7.27837 8.5716 7.41197 8.54297L8.39493 9.52592C7.97183 9.73588 7.50105 9.86313 6.99842 9.86313C5.24245 9.86313 3.81731 8.43799 3.81731 6.68203C3.81731 6.17942 3.94457 5.70861 4.15452 5.28235Z" fill="white"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_2207_947">
                          <rect width="14" height="14" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>: <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                <path d="M8.5 3C4 3 1 8.5 1 8.5S4 14 8.5 14S16 8.5 16 8.5S13 3 8.5 3zM8.5 12C5 12 3 9.6 3 8.5S5 5 8.5 5S14 7.4 14 8.5S12 12 8.5 12z" fill="currentColor"/>
                <path d="M8.5 6.7C7.8 6.7 7.3 7.4 7.3 8s0.5 1.3 1.2 1.3S9.8 8.6 9.8 8S9.3 6.7 8.5 6.7zM8.5 10C7.9 10 7.4 9.5 7.4 8.9S7.9 7.9 8.5 7.9S9.6 8.4 9.6 9S9.1 10 8.5 10z" fill="currentColor"/>
              </svg>}
                  
                   </span>
                  </div>

                  
                </div>
                <span className="text-red-500 block text-[12px] font-[300] ">{errors?.password?.message}</span>
                <div className={`h-[64px] w-full border-b-2 ${errors.email?.message?"border-red-500":"border-white"}`}>
                  <label
                    htmlFor="confirm_password"
                    className="text-white  text-[13px] font-[500]"
                  >
                    Confirm password
                  </label>
                  <div className="flex items-center gap-x-[10px]"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                      <path d="M13.0031 7.2296V4.53742C13.0103 3.31927 12.5238 2.14798 11.6552 1.29383C10.8155 0.457706 9.71626 0 8.55217 0C8.53415 0 8.51253 0 8.49451 0C6.01136 0.00360399 3.99313 2.03625 3.99313 4.53742V7.2296C3.0561 7.34132 2.37134 8.12699 2.37134 9.07844V15.1259C2.37134 16.1531 3.19305 17 4.22018 17H12.7796C13.8068 17 14.6285 16.1531 14.6285 15.1259V9.07844C14.6249 8.13059 13.9401 7.34132 13.0031 7.2296ZM4.71032 4.53742H4.71393C4.71393 2.43269 6.41141 0.709985 8.49811 0.709985H8.50172C9.49281 0.706381 10.4443 1.09922 11.147 1.79839C11.8787 2.52279 12.2859 3.51028 12.2787 4.53742V7.2332H11.4858V4.53742C11.493 3.71931 11.1687 2.93364 10.5884 2.35701C10.0406 1.8092 9.2982 1.49926 8.52334 1.49926H8.50172C6.84388 1.49926 5.5032 2.86156 5.5032 4.53381V7.2332H4.71032V4.53742ZM10.7686 4.53742V7.2332H6.2276V4.53742C6.2276 3.26161 7.24393 2.22366 8.50532 2.22366H8.52695C9.11079 2.22366 9.67301 2.45792 10.0875 2.87238C10.5272 3.31206 10.7758 3.91393 10.7686 4.53742ZM13.9401 15.1367C13.9401 15.7674 13.4284 16.2792 12.7977 16.2792H4.2346C3.6039 16.2792 3.09214 15.7674 3.09214 15.1367V9.09646C3.09214 8.46576 3.6039 7.954 4.2346 7.954H12.7977C13.4284 7.954 13.9401 8.46576 13.9401 9.09646V15.1367Z" fill="white"/>
                      <path d="M9.74528 11.8928C9.58671 11.3342 9.07855 10.9521 8.49831 10.9521C7.78111 10.9521 7.19727 11.5324 7.19727 12.2532C7.19727 12.8334 7.57929 13.3416 8.13791 13.5002V14.5093C8.13791 14.7075 8.30009 14.8697 8.49831 14.8697C8.69652 14.8697 8.8587 14.7075 8.8587 14.5093V13.5002C9.54707 13.3019 9.94711 12.5811 9.74528 11.8928ZM8.49831 12.8298C8.17755 12.8298 7.91806 12.5703 7.91806 12.2496C7.91806 11.9288 8.17755 11.6693 8.49831 11.6693C8.81906 11.6693 9.07855 11.9288 9.07855 12.2496C9.07855 12.5703 8.81906 12.8298 8.49831 12.8298Z" fill="white"/>
                    </svg>
                  <input
                    type={showConPassword?"password":"text"}
                    className="w-full bg-transparent focus:outline-none focus:bg-transparent"
                    autoComplete="off"
                    placeholder="Enter your Confirm password"
                    {...register("confirm_password")}
                  />
                   <span onClick={handleToggleConfirmPassword}>
                    {showConPassword?<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <g clip-path="url(#clip0_2207_947)">
                        <path d="M6.89331 4.78298L8.8974 6.78707L8.90694 6.6821C8.90694 5.62914 8.05124 4.77344 6.99829 4.77344L6.89331 4.78298Z" fill="white"/>
                        <path d="M6.99843 3.50069C8.75439 3.50069 10.1795 4.92583 10.1795 6.6818C10.1795 7.09216 10.0968 7.48343 9.95369 7.84289L11.8146 9.70383C12.7753 8.90219 13.5324 7.86517 14 6.6818C12.8962 3.88881 10.1827 1.91016 6.99846 1.91016C6.10774 1.91016 5.25523 2.0692 4.46313 2.3555L5.83737 3.72654C6.19679 3.58658 6.58807 3.50069 6.99843 3.50069Z" fill="white"/>
                        <path d="M0.636209 1.76723L2.08679 3.21781L2.37628 3.5073C1.32652 4.32803 0.496251 5.41915 0 6.68203C1.10067 9.47502 3.81731 11.4537 6.99842 11.4537C7.98457 11.4537 8.92616 11.2628 9.78825 10.9161L10.0587 11.1865L11.9132 13.0442L12.7244 12.2362L1.44739 0.956055L0.636209 1.76723ZM4.15452 5.28235L5.13748 6.26531C5.10885 6.40211 5.08976 6.53888 5.08976 6.68203C5.08976 7.73498 5.94547 8.59068 6.99842 8.59068C7.14157 8.59068 7.27837 8.5716 7.41197 8.54297L8.39493 9.52592C7.97183 9.73588 7.50105 9.86313 6.99842 9.86313C5.24245 9.86313 3.81731 8.43799 3.81731 6.68203C3.81731 6.17942 3.94457 5.70861 4.15452 5.28235Z" fill="white"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_2207_947">
                          <rect width="14" height="14" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>: <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                <path d="M8.5 3C4 3 1 8.5 1 8.5S4 14 8.5 14S16 8.5 16 8.5S13 3 8.5 3zM8.5 12C5 12 3 9.6 3 8.5S5 5 8.5 5S14 7.4 14 8.5S12 12 8.5 12z" fill="currentColor"/>
                <path d="M8.5 6.7C7.8 6.7 7.3 7.4 7.3 8s0.5 1.3 1.2 1.3S9.8 8.6 9.8 8S9.3 6.7 8.5 6.7zM8.5 10C7.9 10 7.4 9.5 7.4 8.9S7.9 7.9 8.5 7.9S9.6 8.4 9.6 9S9.1 10 8.5 10z" fill="currentColor"/>
              </svg>}
                  
                   </span>
                  </div>
                  
                </div>
                <span className="text-red-500 block text-[12px] font-[300] ">{errors?.confirm_password?.message}</span>
                <button
                  type="submit"
                  className="xl:w-[429px] lg:w-[429px] md:w-[429px] w-[319px] h-[53px] shrink-0 rounded-[8px] bg-[#007FAF] shadow-xl mt-[52px] hover:bg-[#043b50] transition-all duration-500 ease-in-out"
                >
                   Register
                </button>
              </div>
              {/* <p className="mt-[36px] mx-auto mb-[31px] text-[#B5B5B5] text-[16px] font-[500]   text-center w-full ">or continue with</p>
              <div className="flex items-center justify-center gap-[20px] ">
              <button
                  onClick={(e) => handleGoogleLogin(e)}
                  className="w-[42px] h-[43px] shrink-0"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                    <path d="M39.4107 21.1319C39.4107 19.6406 39.2872 18.5524 39.02 17.4238H21.6433V24.1548H31.843C31.6375 25.8275 30.527 28.3467 28.0593 30.0394L28.0247 30.2647L33.5189 34.4359L33.8995 34.4731C37.3953 31.3091 39.4107 26.6538 39.4107 21.1319Z" fill="#4285F4"/>
                    <path d="M21.6422 38.8659C26.6392 38.8659 30.8342 37.2536 33.8983 34.4726L28.0581 30.0388C26.4953 31.1069 24.3977 31.8526 21.6422 31.8526C16.748 31.8526 12.5941 28.6886 11.1133 24.3154L10.8963 24.3335L5.18335 28.6664L5.10864 28.8699C8.15209 34.7949 14.4036 38.8659 21.6422 38.8659Z" fill="#34A853"/>
                    <path d="M11.1145 24.3163C10.7238 23.1878 10.4977 21.9785 10.4977 20.7291C10.4977 19.4795 10.7238 18.2704 11.094 17.1419L11.0836 16.9015L5.29911 12.499L5.10985 12.5872C3.85549 15.0459 3.13574 17.8069 3.13574 20.7291C3.13574 23.6512 3.85549 26.4121 5.10985 28.8708L11.1145 24.3163Z" fill="#FBBC05"/>
                    <path d="M21.6423 9.60396C25.1176 9.60396 27.4618 11.0751 28.7986 12.3045L34.0218 7.30659C30.8139 4.38443 26.6393 2.59082 21.6423 2.59082C14.4036 2.59082 8.15211 6.66166 5.10864 12.5866L11.0928 17.1412C12.5941 12.768 16.748 9.60396 21.6423 9.60396Z" fill="#EB4335"/>
                  </svg>
                  
                </button>

                <button
                  onClick={(e) => handleFacebookLogin(e)}
                  className="w-[42px] h-[43px] shrink-0"
                >
                 <svg xmlns="http://www.w3.org/2000/svg" width="42" height="43" viewBox="0 0 42 43" fill="none">
                <ellipse cx="20.7286" cy="19.7284" rx="18.1376" ry="18.1376" fill="url(#paint0_linear_2841_1460)"/>
                <path d="M27.4831 26.9337L28.2888 21.8144H23.2487V18.4938C23.2487 17.093 23.9514 15.7267 26.2089 15.7267H28.5018V11.3684C28.5018 11.3684 26.4218 11.0225 24.4342 11.0225C20.2814 11.0225 17.5696 13.4748 17.5696 17.9127V21.8144H12.9553V26.9337H17.5696V39.3099C18.496 39.4517 19.4437 39.5243 20.4091 39.5243C21.3746 39.5243 22.3223 39.4517 23.2487 39.3099V26.9337H27.4831Z" fill="white"/>
                <defs>
                  <linearGradient id="paint0_linear_2841_1460" x1="20.7286" y1="1.59082" x2="20.7286" y2="37.7584" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#18ACFE"/>
                    <stop offset="1" stop-color="#0163E0"/>
                  </linearGradient>
                </defs>
              </svg>
                
                </button>
              </div> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
