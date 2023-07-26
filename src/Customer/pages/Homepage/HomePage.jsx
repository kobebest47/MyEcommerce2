import MainCarousel from "../../Components/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../../Components/HomeSectionCarousel/HomeSectionCarousel";

const HomePage = () =>{
    return(
        <div>
            <MainCarousel />


            <div className="space-y-10 py-20 flex flex-col justify-center">
                <HomeSectionCarousel />
                <HomeSectionCarousel />
                <HomeSectionCarousel />
                <HomeSectionCarousel />
                <HomeSectionCarousel />
            </div>
        </div>
    )
}

export default HomePage;