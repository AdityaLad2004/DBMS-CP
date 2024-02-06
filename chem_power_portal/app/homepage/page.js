"use client"
import Add from '../../assets/add.png'
import { useRouter } from "next/navigation";
import View from '../../assets/view.png'
import about from '../../assets/about.jpg'
import contact from '../../assets/contact.png'
import Card from "@/components/Card"
import Link from 'next/link';

function HomePage() {
    const router = useRouter();
    return (
        <div className="flex flex-row m-5 gap-6">
            <Link href='/homepage/addProduct'><Card name="Add Product" imageName={Add} /></Link>
            <Link href='/homepage/viewProduct'><Card name="View Products" imageName={View} /></Link>
            <Link href='/homepage/aboutus'><Card name="About us" imageName={about} /></Link>
            <Link href='/homepage/contactus'><Card name="Contact us" imageName={contact} /></Link>


        </div>

    )
}

export default HomePage