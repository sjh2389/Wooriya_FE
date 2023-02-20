/*
작성자 서종현
작성일 23.02.20.
상단 네비게이션 바
*/

import { NavLink } from "react-router-dom"
import { connect } from "react-redux"
import { actionCreators } from "./store/store"
import './css/navBar.css'

function NavBar({userObjInStore, SignOutToStore}) {

    const { memberRole } = userObjInStore

    return (
        <nav className="navBar_background">
            <div className="navBar_logo">
                <NavLink to={'/'} className="navBar_inherit">CONCENT</NavLink>
            </div>
            <div className="navBar_menu">
                <NavLink className="navBar_inherit">About Us</NavLink>
                <NavLink className="navBar_inherit">Contact</NavLink>
                <NavLink to={'/signup'} className="navBar_inherit">SignUp</NavLink>
                <NavLink to={'/login'} className="navBar_inherit">Login</NavLink>
            </div>
            <div className="navBar_status">
                <NavLink className="navBar_inherit">Signed in as: {(!memberRole)? "GUEST": memberRole}</NavLink>
            </div>
        </nav>
    )
}

function mapStateToProps(state) {
    return {userObjInStore: state}
}
function mapDispatchToProps(dispatch) {
    return {
        SignOutToStore: (userObj) => dispatch(actionCreators.SignOut(userObj))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (NavBar)