import Banner from "../Banner/Banner";
import Facilities from "../Facilities/Facilities";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import Reviews from "../Reviews/Reviews";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructor></PopularInstructor>
            <Facilities></Facilities>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;