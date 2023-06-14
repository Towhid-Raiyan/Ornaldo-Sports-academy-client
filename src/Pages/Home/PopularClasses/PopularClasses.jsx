import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import Typewriter from "typewriter-effect";

const PopularClasses = () => {
    const [popularClasses, setPopularClasses] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:5000/popularClasses")
            .then((response) => {
                setPopularClasses(response.data);
                // console.log(response.data);
            })
            .catch((error) => {
                console.error("Error fetching popular classes:", error);
            });
    }, []);
    return (
        <div className="container mx-auto my-10">
            <p className="mt-12 mb-10 text-6xl font-bold text-orange-600 text-center">
                <Typewriter
                    options={{
                        strings: [
                            "Popular Classes",
                        ],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ms-3 me-3 md:me-0 md:ms-0">
                {popularClasses.map((item) => (
                    <Fade key={item._id} delay={100}>
                        <div className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
                            <img
                                alt="Home"
                                src={item.image}
                                className="h-56 w-full rounded-md object-cover"
                            />

                            <div className="mt-2">
                                <div className="text-sm text-orange-700 font-semibold">
                                    ${item.price}
                                </div>

                                <div>
                                    <p className="font-medium">{item.name}</p>
                                </div>

                                <div className="mt-2 flex items-center gap-1 text-xs">
                                    Instructor:<span> {item.instructor}</span>
                                </div>
                                <div className="mt-1 flex justify-start gap-10 text-gray-500 ">
                                    <span className="flex items-center gap-1 text-xs">
                                        Enrolled Students:
                                        <p> {item.enrolledStudents}</p>
                                    </span>
                                    <span className="flex items-center gap-1 text-xs">
                                        Available Seat:
                                        <span> {item.availableSeats}</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Fade>
                ))}
            </div>
        </div>
    );
};

export default PopularClasses;
