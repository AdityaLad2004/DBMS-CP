import Add from '../../assets/add.png';
import View from '../../assets/view.png';
import about from '../../assets/about.jpg';
import contact from '../../assets/contact.png';
import supp from '../../assets/supplier.jpeg';
import Card from "@/components/Card";
import Link from 'next/link';

function HomePage() {
    return (
        <div className="flex flex-row m-5 gap-6">

            <Link href='/homepage/addProduct'>
                <div className="w-64 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer">
                    <Card name="Add Product" imageName={Add} />
                </div>
            </Link>
            <Link href='/homepage/viewProduct'>
                <div className="w-64 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer">
                    <Card name="View Products" imageName={View} />
                </div>
            </Link>
            <Link href='/homepage/aboutus'>
                <div className="w-64 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer">
                    <Card name="About us" imageName={about} />
                </div>
            </Link>
            <Link href='/homepage/contactus'>
                <div className="w-64 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer">
                    <Card name="Contact us" imageName={contact} />
                </div>
            </Link>

            <Link href='/homepage/suppliers'>
                <div className="w-64 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer">
                    <Card name="Suppliers Details" imageName={supp} />
                </div>
            </Link>
        </div>
    )
}

export default HomePage;
