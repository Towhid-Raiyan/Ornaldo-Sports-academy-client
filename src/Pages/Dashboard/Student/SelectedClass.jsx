import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { FadeLoader } from "react-spinners";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { Link } from "react-router-dom";
import setTitle from "../../../hook/setTitle";
import { toast } from "react-toastify";
import Typewriter from "typewriter-effect";

const SelectedClass = () => {
    setTitle("Selected Class");
    const { user } = useContext(AuthContext);
    const [selectedClass, setSelectedClass] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        setIsLoading(true);
        fetchData();
    }, [axiosSecure, user]);

    const fetchData = () => {
        axiosSecure
            .get(
                `https://ornaldo-sports-server.vercel.app/selectedClasses/${user?.email}`
            )
            .then((response) => {
                const data = response.data;
                // console.log(data);

                const unPaid = data.filter((item) => item.status === "unpaid");
                setSelectedClass(unPaid);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching selected classes:", error);
            });
    };
    const handleDelete = (id) => {
        console.log(id);
        axiosSecure
            .delete(
                `https://ornaldo-sports-server.vercel.app/deleteSelected/${id}`
            )
            .then((response) => {
                console.log(response);
                toast.success("Deleted Successfully");
                fetchData();
            })
            .catch((error) => {
                console.error("Error fetching selected classes:", error);
            });
    };
    return (
        <div className="container mx-auto">
            <p className="mt-12 mb-10 text-6xl font-bold text-orange-600 text-center">
                <Typewriter
                    options={{
                        strings: [
                            "Selected Class",
                        ],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </p>

            {isLoading ? (
                <div className="h-[600px] flex items-center justify-center">
                    <FadeLoader color="#36d7b7" />
                </div>
            ) : selectedClass.length === 0 ? (
                <div className="text-center my-8">
                    <p className="text-2xl font-bold">
                        No selected classes found.
                    </p>
                    <p>Please select a class to see it here.</p>
                </div>
            ) : (
                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-2   ms-2 md:ms-12 me-2 md:me-8">
                    {selectedClass.map((item) => (
                        <div
                            key={item._id}
                            className="card w-96 bg-base-100 shadow-xl"
                        >
                            <figure>
                                <img src={item.course.image} alt="" 
                                className="p-4 h-64 w-full object-cover transition duration-500  sm:h-72 rounded-b-lg"/>
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {item.course.name}
                                </h2>
                                <p>${item.course.price}</p>
                                <p>
                                    Instructor: {""}
                                    {item.course.instructor}
                                </p>
                                <p className="text-sm text-gray-500">
                                    Available Seat: {""}
                                    {item.course.availableSeats}
                                </p>
                                <div className="card-actions justify-between">
                                    <Link to={`/dashboard/payment/${item._id}`}>
                                        <button
                                            className="btn bg-[#00897b] btn-sm text-white hover:bg-[#04342f]"
                                            // onClick={() => handlePayNowClick(item)}
                                        >
                                            <FaMoneyCheckAlt></FaMoneyCheckAlt>{" "}
                                            Pay Now
                                        </button>
                                    </Link>

                                    <button
                                        className="btn bg-[#c3422c] btn-sm text-white hover:bg-[#69180d]"
                                        onClick={() => handleDelete(item._id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SelectedClass;
