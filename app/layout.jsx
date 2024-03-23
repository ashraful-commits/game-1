'use client'
import { Poppins, Russo_One } from "next/font/google";
import { usePathname } from "next/navigation";
import { Toaster } from "../components/ui/toaster"
import AuthProvider from "../components/Authprovider/AuthProvider"


const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const russo_one = Russo_One({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-russo-one",
});

import "./globals.css";
import DashboardHeader from "../components/newsfeed/DashboardHeader";
import Sidebar from "../components/newsfeed/Sidebar";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${russo_one.variable}`}>
        {pathname !== "/"? (
          <>
            {pathname !=="/register" && pathname !=="/signin" && <DashboardHeader /> }
            <div className="flex">
              {pathname !=="/register" &&pathname !=="/signin" && 
              <div className="w-2/12 max-xl:hidden">
              <Sidebar />
              </div>
              }
                
              <div className={`${pathname !=="/register"&&pathname !=="/signin" ?"w-10/12 max-xl:w-full bg-darkblue p-8 max-xl:p-5":"w-10/12"} `}>
              <Toaster />
                <AuthProvider>
                {children}
                </AuthProvider>
                
                </div>
            </div>
          </>
        ) : (
          children
        )}
      </body>
    </html>
  );
}
