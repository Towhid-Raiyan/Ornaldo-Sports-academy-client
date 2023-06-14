import { useEffect, useState } from "react";
import setTitle from "../../hook/setTitle";
import Typewriter from "typewriter-effect";

const Instructors = () => {
    setTitle("Instructor");
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetchInstructors();
    }, []);

    const fetchInstructors = async () => {
        try {
            const response = await fetch("http://localhost:5000/instructors");
            const data = await response.json();
            // console.log(data);
            setInstructors(data);

            // Fetch number of classes for each instructor
            const instructorsWithClassCount = await Promise.all(
                data.map(async (instructor) => {
                    try {
                        const classCountResponse = await fetch(
                            `http://localhost:5000/classes/count/${encodeURIComponent(
                                instructor.name
                            )}`
                        );
                        const classCountData = await classCountResponse.json();
                        // console.log(instructor,classCountData);
                        return {
                            ...instructor,
                            classCount: classCountData.count,
                        };
                    } catch (error) {
                        console.error(
                            `Error fetching class count for instructor '${instructor.name}':`,
                            error
                        );
                        return { ...instructor, classCount: 0 };
                    }
                })
            );
            setInstructors(instructorsWithClassCount);
        } catch (error) {
            console.error("Error fetching instructors:", error);
        }
    };

    return (
        <>

            <div className="container mx-auto ">
                <p className="my-12 text-6xl font-bold text-orange-600 text-center">
                    <Typewriter
                        options={{
                            strings: [
                                "Our Instructors",
                            ],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </p>
                <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-3 ms-2 me-2 my-10">
                    {instructors.map((instructor) => (
                        <div
                            key={instructor._id}
                            className="group card card-side bg-base-100 shadow-xl"
                        >
                            <figure className="w-[250px]">
                                <img
                                    src={instructor.image}
                                    alt=""
                                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 rounded-b-lg"
                                />
                            </figure>
                            <div className="card-body ">
                                <h2 className="card-title">
                                    {instructor.name}
                                </h2>
                                <p>Email: {instructor.email}</p>
                                <p>
                                    Number of Classes: {instructor.classCount}
                                </p>
                                <button className="bg-orange-600 hover:bg-orange-500 text-white rounded p-2">See Classes</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Instructors;
