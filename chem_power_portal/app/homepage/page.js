"use client"

import Link from 'next/link';
import ContentImage from '../../assets/bg.png';
function HomePage() {
    return (

        <div className="container">
            <div className="navbar">
                <div className="logo">
                    <Link href="/">
                        Konkan Laboratories
                    </Link>
                </div>
                <div className="menu">
                    <ul>
                        <li>
                            <Link href="/">
                                Home
                            </Link>
                        </li>

                        <Link href='/homepage/aboutus'>
                            <li>
                                AboutUs
                            </li>
                        </Link>


                        <Link href='/homepage/addProduct'>
                            <li>
                                Add Product
                            </li>
                        </Link>

                        <Link href='/homepage/viewProduct'>
                            <li>
                                View Product
                            </li>
                        </Link>

                        <Link href='/homepage/suppliers'>
                            <li>
                                Current suppliers record
                            </li>
                        </Link>

                        <Link href='/homepage/quantities'>
                            <li>
                                Chemical Inventory
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
            <div className="content">
                <h1>Welcome to Next.js!</h1>
                <p>This is a left side vertical navbar example.</p>
            </div>
            <style jsx>{`
          .container {
            display: flex;
            height: 100vh;
          }
          .navbar {
            width: 200px;
            background: #333;
            color: #fff;
            padding: 20px;
          }
          .logo {
            margin-bottom: 20px;
          }
          .logo a {
            color: #fff;
            font-weight: bold;
            text-decoration: none;
            font-size: 20px;
          }
          .menu ul {
            padding: 0;
            margin: 0;
            list-style-type: none;
          }
          .menu ul li {
            margin-bottom: 10px;
          }
          .menu ul li a {
            color: #fff;
            text-decoration: none;
          }
          .content {
            flex: 1;
            width:100%;
            padding: 20px;
            background-image: url(${ContentImage.src});
            background-size: cover;
          background-repeat: no-repeat;
          
          }
        `}</style>
        </div>
    );

}

export default HomePage;
