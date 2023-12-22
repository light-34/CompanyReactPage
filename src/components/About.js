import { Link } from "react-router-dom";

const About = () => {
    return ( 
        <div className="about">
            <h1> This is About </h1>
            <Link to='/'>Back to Home</Link>
        </div>
     );
}
 
export default About;