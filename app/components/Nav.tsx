"use client"
import Navbar from "./Navbar";
import { usePathname } from "next/navigation"

export default function NavbarContainer() {
    const pathname = usePathname();
    return pathname ==='/register' ? null : <Navbar /> ;
}