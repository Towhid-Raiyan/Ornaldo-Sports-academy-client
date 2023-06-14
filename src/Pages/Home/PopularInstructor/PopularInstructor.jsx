import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import Typewriter from "typewriter-effect";

const PopularInstructor = () => {
    const [popularInstructors, setPopularInstructors] = useState([]);

    useEffect(() => {
        axios
            .get(
                "https://ornaldo-sports-server.vercel.app/popularInstructors"
            )
            .then((response) => {
                setPopularInstructors(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error("Error fetching popular instructors:", error);
            });
    }, []);

    return (
        <div className="container mx-auto">
            <p className="mt-12 mb-10 text-6xl font-bold text-orange-600 text-center">
                <Typewriter
                    options={{
                        strings: [
                            "Popular Instructors",
                        ],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-4">
                {popularInstructors.map((item) => (
                    <Fade key={item._id}>
                        <div className="card bg-base-100 shadow-xl my-10 p-2 dark:bg-slate-400">
                            <figure className="avatar">
                                <div className="w-1/2 rounded-xl mx-auto">
                                    <img src={item.image} alt="Shoes" />
                                </div>
                            </figure>
                            <div className="card-body items-center">
                                <h2 className="card-title">{item?.name}</h2>
                                <p className="text-sm text-gray-600">
                                    Most Popular Class: {item?.course}
                                </p>
                                <p className="text-sm text-gray-600">
                                    Total Students: {item?.totalStudents}
                                </p>
                            </div>
                        </div>
                    </Fade>
                ))}
            </div>
        </div>
    );
};

export default PopularInstructor;
