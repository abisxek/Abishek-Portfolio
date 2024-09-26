import logo from "../assets/AbishekRLogo.png"
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <style jsx>{`
                .icon:hover {
                    filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.8));
                }
            `}</style>
            <div className="flex flex-shrink-0 items-center">
                <img className="mx-2 w-10" src={logo} alt="logo" />
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://linkedin.com/in/anikethhebbar/" target="_blank" rel="noopener noreferrer" className="icon">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/anikethhebbar" target="_blank" rel="noopener noreferrer" className="icon">
                    <FaGithub />
                </a>
                <a href="https://instagram.com/aniketh.hebbar" target="_blank" rel="noopener noreferrer" className="icon">
                    <FaInstagram />
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
