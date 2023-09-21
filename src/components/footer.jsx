import {
    AiFillFacebook,
    AiOutlineInstagram,
    AiOutlineTwitter,
    AiFillYoutube,
} from "react-icons/ai";

const Footer = () => {
    return (
        <div className="flex flex-col justify-center items-center m-4 md:m-12">
            {/* Socials */}
            <div className="flex justify-center mb-6">
                {/* Facebook */}
                <a href="https://github.com/AbubakarImam" className="mx-2">
                    <AiFillFacebook className="w-6 h-6" />
                </a>
                {/* Instagram */}
                <a href="https://www.instagram.com" className="mx-2">
                    <AiOutlineInstagram className="w-6 h-6" />
                </a>
                {/* Twitter */}
                <a href="https://twitter.com/Abubakar_Imam1" className="mx-2">
                    <AiOutlineTwitter className="w-6 h-6" />
                </a>
                {/* Youtube */}
                <a href="https://abubakarimam.netlify.app" className="mx-2">
                    <AiFillYoutube className="w-6 h-6" />
                </a>
            </div>
            {/* Links */}
            <div className="flex flex-col items-center mb-6">
                {/* Condition of use */}
                <div className="mb-2">
                    <h1 className="font-bold text-lg">Conditions of Use</h1>
                </div>
                {/* Privacy and Policy */}
                <div className="mb-2">
                    <h1 className="font-bold text-lg">Privacy &amp; Policy</h1>
                </div>
                {/* Press Room */}
                <div>
                    <h1 className="font-bold text-lg">Press Room</h1>
                </div>
            </div>
            {/* Copyright */}
            <div>
                <h1 className="text-lg text-gray-500">
                    &copy; 2023 MovieBox by Abubakar Imam
                </h1>
            </div>
        </div>
    );
};

export default Footer;
