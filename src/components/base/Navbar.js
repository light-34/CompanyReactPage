
import { Nav, Bars, NavMenu, NavLink, NavBtn, NavBtnLink} from "../../styles/navbarElements";

const Navbar = () => {
    return ( 
        <>
        <Nav>
            <Bars/>
            <NavMenu>
                <NavLink to="/">
                    Home
                </NavLink>
                <NavLink to="/about">
                    About
                </NavLink>
                <NavLink to="/contact">
                    Contact
                </NavLink>
                <NavLink to="/projects">
                    Projects
                </NavLink>
                <NavLink to="/products">
                    Products
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/signup">
                    Sign up
                </NavBtnLink>
            </NavBtn>
        </Nav>
        
        </>
     );
}
 
export default Navbar;