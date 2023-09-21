import imdb from "../assets/imdb.png";
import tomato from "../assets/tomato.png";
import Play from "../assets/play.png";
import Navbar from "./navbar";

const Hero = () => {
    return (
        <div className="w-full backgroundImg flex flex-col h-screen justify-between pb-5">
            <Navbar />
            {/* Featured Movie */}
            <div className="flex mb-16 mx-4 flex-col lg:w-96 lg:ml-40 mt-10 lg:mt-36 text-white">
                <div>
                    <h1 className="font-bold text-3xl lg:text-5xl mb-3">John Wick 3 : Parabellum</h1>
                </div>
                <div>
                    {/* Rating */}
                    <div className="flex mb-3">
                        <div className="mr-4">
                            <img src={imdb} alt="IMDb logo" className="inline-block h-3 lg:h-4" />
                            <p className="inline-block text-xs ml-1">860/100</p>
                        </div>
                        <div className="ml-4">
                            <img src={tomato} alt="IMDb logo" className="inline-block h-3 lg:h-4" />{" "}
                            <p className="inline-block text-xs">{97}&#37;</p>
                        </div>
                    </div>

                    <p className="font-medium text-sm mb-3">
                        John Wick is on the run after killing a member of the international
                        assassins guild, and with a $14 million price tag on his head, he is
                        the target of hit men and women everywhere.
                    </p>

                    {/* Trailer Button */}
                    <button className='bg-[#BE123C] rounded-md py-2 px-4'>
                        <img src={Play} alt="play" className="inline-block mr-2 w-4 lg:w-5" />
                        <p className="inline-block text-sm font-bold">WATCH TRAILER</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero
