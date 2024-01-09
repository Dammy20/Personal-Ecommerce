import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { IoMdContact } from "react-icons/io";
import { FaBagShopping } from "react-icons/fa6";
import { useSelector } from 'react-redux'

const Navbar = () => {
    const state = useSelector(state => state.handleCart)
    return (
        <nav style={{ backgroundColor: "white", width: "100%", height: "15vh" }} className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
            <div className="container d-flex">
                <div className=''>
                    <NavLink className="navbar-brand fw-bold fs-4  " to="/"> <img style={{ width: "20%" }} src="./fashion.png" alt="" /></NavLink>
                </div>
                <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto d-flex gap-4">
                        <li className="nav-item d-flex">
                            <FaHome className="mt-2" />
                            <NavLink className=" " style={{ fontWeight: "bold", textDecoration: "none", marginTop: "3.5px" }} to="/">Home </NavLink>
                        </li>
                        <li className="nav-item d-flex">
                            <FaBagShopping className="mt-2" />
                            <NavLink style={{ fontWeight: "bold", textDecoration: "none", marginTop: "3.5px" }} to="/product">Products</NavLink>
                        </li>
                        <li className="nav-item d-flex">
                            <BiSolidOffer className="mt-2" />
                            <NavLink className="" style={{ fontWeight: "bold", textDecoration: "none", marginTop: "3.5px" }} to="/about">About</NavLink>
                        </li>
                        <li className="nav-item d-flex">
                            <IoMdContact className="mt-2" />
                            <NavLink style={{ fontWeight: "bold", textDecoration: "none", marginTop: "3.5px" }} to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                    <div className="buttons text-center">
                        <NavLink style={{ backgroundColor: "  #E3AD2F" }} to="/login" className="btn btn-outline-dark m-2"><i className="fa fa-sign-in-alt mr-1"></i> Login</NavLink>
                        <NavLink style={{ backgroundColor: "  #E3AD2F" }} to="/register" className="btn btn-outline-dark m-2"><i className="fa fa-user-plus mr-1"></i> Register</NavLink>
                        <NavLink style={{ backgroundColor: "  #E3AD2F" }} to="/cart" className="btn btn-outline-dark m-2"><i className="fa fa-cart-shopping mr-1"></i> Cart ({state.length}) </NavLink>
                    </div>
                </div>


            </div>
        </nav>
    )
}

export default Navbar