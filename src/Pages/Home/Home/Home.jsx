import Banner from "../Banner/Banner";
import Facilities from "../Facilities/Facilities";
import PopularClasses from "../PopularClasses/PopularClasses";
import Reviews from "../Reviews/Reviews";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <Facilities></Facilities>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;