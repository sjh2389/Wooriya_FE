/*
작성자 서종현
작성일 23.02.20.
상단 네비게이션 바
*/

import { NavLink } from "react-router-dom"
import { connect } from "react-redux"
import { SignOutToStore } from "./store/slice/userStateSlice"
import './css/navBar.css'
import { useEffect } from "react"

function NavBar({userObjInStore, SignOutToStore}) {

    useEffect(() => {
        console.log(userObjInStore.userState)
    },[userObjInStore.userState])

    return (
        <nav className="navBar_background">
            <div className="navBar_logo">
                <NavLink to={'/'} className="navBar_inherit">Wooriya</NavLink>
            </div>
            <div className="navBar_menu">
                <NavLink to={'/aboutus'} className="navBar_inherit">About Us</NavLink>
                <NavLink className="navBar_inherit">Contact</NavLink>
                <NavLink to={'/signup'} className="navBar_inherit">SignUp</NavLink>
                <NavLink to={'/login'} className="navBar_inherit">Login</NavLink>
            </div>
            <div className="navBar_status">
                <NavLink className="navBar_inherit">Signed in as: {userObjInStore.userState}</NavLink>
            </div>
        </nav>
    )
}

function mapStateToProps(state) {
    return {userObjInStore: state}
}
function mapDispatchToProps(dispatch) {
    return {
        SignOutToStore: (userObj) => dispatch(SignOutToStore(userObj))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (NavBar)