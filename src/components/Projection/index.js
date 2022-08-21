import "./index.scss";
import { Link } from "react-router-dom";
import Temp from "../../assets/images/Solid_gray.png";

const Projection = () => {
    return (
        <>
            <div className = "container">
                <h1>Real-Time Projection Mapping</h1>
                <div className= "text-area">
                    <p>Starting September of my Freshman year at Stevens
                        I was given the opportunity to join my Physics TA on his Graduate Research Project.
                        Here, I was given autonomy to develop a Real-Time Projection Mapping system to create real holograms from the ground up. This daunting task enabled me to take my Python knowledge and apply advanced concepts in Computer Vision using OpenCV
                        and other such libraries.
                    </p>
                </div>
                <Link to = "/projects" class = 'flat-button'>Back</Link>
            </div>
        </>
    );
};

export default Projection;