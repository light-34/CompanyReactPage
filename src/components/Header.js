import { Divider } from "@mui/material";
import Navbar from "./Navbar";

const Header = () => {
    return ( 
        <div className="header">
            <Navbar />
            <h4>Header </h4>
            <Divider light />
        </div>
     );
}
 
export default Header;