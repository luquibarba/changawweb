import "./Presentation.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Presentation() {

    const navigate = useNavigate();

    return (

        <div className="presentation-page">

            <div className="bg-circle purple"></div>
            <div className="bg-circle orange"></div>

            <motion.div
                className="presentation-content"

                initial={{
                    opacity: 0
                }}

                animate={{
                    opacity: 1
                }}

                transition={{
                    duration: .6
                }}
            >

                <motion.div

                    className="presentation-logo"

                    initial={{
                        scale: .6,
                        opacity: 0,
                        y: -40
                    }}

                    animate={{
                        scale: 1,
                        opacity: 1,
                        y: 0
                    }}

                    transition={{
                        duration: .7,
                        ease: "easeOut"
                    }}

                >

                    <div className="logo-c">
                        C<span>+</span>
                    </div>

                    <h1 className="logo-text">
                        changa<span>+</span>
                    </h1>

                    <div className="logo-line"></div>

                </motion.div>

                <motion.div

                    initial={{
                        opacity:0,
                        y:25
                    }}

                    animate={{
                        opacity:1,
                        y:0
                    }}

                    transition={{
                        delay:.45,
                        duration:.5
                    }}

                >

                    <p className="presentation-slogan">

                        Más oportunidades,

                        <br/>

                        más trabajo,

                        <br/>

                        <strong>más Changa.</strong>

                    </p>

                </motion.div>

                <motion.div

                    className="presentation-buttons"

                    initial={{
                        opacity:0,
                        y:60
                    }}

                    animate={{
                        opacity:1,
                        y:0
                    }}

                    transition={{
                        delay:.75,
                        duration:.6
                    }}

                >

                    <button className="start-btn"
                    onClick={() => navigate("/register")}>

                        Empezar →

                    </button>

                    <button

                        className="login-btn-presentation"

                        onClick={() => navigate("/login")}

                    >

                        Ya tengo cuenta

                    </button>

                </motion.div>

            </motion.div>

        </div>

    );

}

export default Presentation;