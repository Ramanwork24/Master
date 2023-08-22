import React from 'react';
import logo from "../assets/images/rd-1.png"
import "./Sidebar.css"
import { LayoutDashboard, User, LogOut, Wallet } from "lucide-react"
import { Link } from 'react-router-dom';


function Drawer() {
    const handlelogout = (() => {
        window.location.replace("/");
    })
    return (

        <div className="drawer" id='border'>
            <div className="logo-wrapper" id='logo'>
                <img src={logo} alt="logo" className='logo' />


            </div>
            <div className="drawer-menu">

                {/* DASHBOARD LINK OPEN */}

                <div className='drawer-links'>
                    <LayoutDashboard color="#3574F2" />
                    <Link to={"/dashboard"} className='text' id='word'> Dashboard</Link>
                </div>
                {/* DASHBOARD LINK CLOSE */}

                {/* PROFILE LINK OPEN */}
                <div className='drawer-links'>
                    <User color="#3574F2" />
                    <Link to={"/register"} className='text' id='word'> Proflie</Link>
                </div>
                {/* PROFILE LINK CLOSE */}

                {/* CHECKOUT LINK OPEN */}
                <div className='drawer-links'>
                    <Wallet color="#3574F2" />
                    <Link to={"/checkout"} className='text' id='word'> Checkout</Link>
                </div>
                {/* CHECKOUT LINK CLOSE */}

                {/* LOGOUT LINK OPEN */}
                <div className='drawer-links'>
                    <LogOut color="#3574F2" />
                    <Link to={"/logout"} className='text' id="word" onClick={handlelogout}> Logout</Link>
                </div>
                {/* LOGUOT LINK CLOSE */}
            </div>

        </div>


    )
}

export default Drawer