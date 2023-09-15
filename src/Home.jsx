import Hero from "./components/hero";
import Feature from "./components/feature";
import Footer from "./components/footer";

function Home() {
    return (
        <div>
            <Hero />
            <Feature />
            {/* <NewMovies /> */}
            <Footer />
        </div>
    )
}

export default Home