import Banner from "../Banner/Banner";
import Facilities from "../Facilities/Facilities";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import Reviews from "../Reviews/Reviews";
import setTitle from "../../../hook/setTitle";

const Home = () => {
    setTitle("Home");
    return (
        <div className="dark:bg-slate-800 dark:text-white">
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructor></PopularInstructor>
            <Facilities></Facilities>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;