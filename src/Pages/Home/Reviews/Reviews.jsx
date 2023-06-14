import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Typewriter from "typewriter-effect";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Reviews = () => {
    return (
        <div>
            <p className="mt-12 mb-10 text-6xl font-bold text-orange-600 mx-96">
                <Typewriter
                    options={{
                        strings: [
                            "Expert Reviews",
                        ],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </p>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper my-10">
                <SwiperSlide>
                    <div className="w-1/2 text-center mx-auto">
                        <div>
                            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                                <div className="h-28 overflow-hidden rounded-t-lg bg-stone-400"></div>
                                <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                                    <img src="https://cdn.shopify.com/s/files/1/0163/6622/files/Sitting_with_legs_flexed_web.jpg?v=1669845513" />
                                </div>
                                <div className="p-6">
                                    <h4 className="mb-4 text-2xl font-semibold">
                                        Zinedine Zidane
                                    </h4>
                                    <h3 className="mb-2 text-lg font-semibold">
                                        Former Couch of Real Madrid
                                    </h3>
                                    <div className="rating">
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    </div>
                                    <hr />
                                    <p className="mt-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            className="inline-block h-7 w-7 pr-2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                                        </svg>
                                        I recently visited Ornaldo sports academy, and I must say, its a fantastic academy from learning from scratch! The facilities are excellent quality, and the prices for training are reasonable. Its a one-stop academy for the kids. Ornaldo sports academy has definitely become on of my favorite sports academy!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-1/2 text-center mx-auto">
                        <div>
                            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30 ">
                                <div className="h-28 overflow-hidden rounded-t-lg bg-stone-400"></div>
                                <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                                    <img src="https://cdn.shopify.com/s/files/1/0163/6622/files/One_leg_up_web.jpg?v=1669845567" />
                                </div>
                                <div className="p-6">
                                    <h4 className="mb-4 text-2xl font-semibold">
                                        Rafa Nadal
                                    </h4>
                                    <h3 className="mb-2 text-lg font-semibold">
                                        Spanish Tennis Player
                                    </h3>
                                    <div className="rating">
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    </div>
                                    <hr />
                                    <p className="mt-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            className="inline-block h-7 w-7 pr-2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                                        </svg>
                                        I recently went to Ornaldo sports academy, and I must say, its a fantastic sports academy! They have a wide range of facilities for the kids, and their collection of equipments are always up-to-date with the latest trends. The trainer are excellent, and the prices are reasonable to join courses. Ornaldo sports has definitely become popular day by day!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-1/2 text-center mx-auto">
                        <div>
                            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                                <div className="h-28 overflow-hidden rounded-t-lg bg-stone-400"></div>
                                <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                                    <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" />
                                </div>
                                <div className="p-6">
                                    <h4 className="mb-4 text-2xl font-semibold">
                                        Michael Phelps
                                    </h4>
                                    <h3 className="mb-2 text-lg font-semibold">
                                        Highest Olympic Gold Medal Winner Swimmer
                                    </h3>
                                    <div className="rating">
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    </div>
                                    <hr />
                                    <p className="mt-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            className="inline-block h-7 w-7 pr-2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                                        </svg>
                                        I can not say enough good things about Ornaldo Sports Academy! As a former player, quality training equipment for learner is my top priority, and Ornaldo sports academy ensures that all their equipment meet the highest quality standards. I feel confident to recommend this academy for the learner, knowing that they prioritize the well-being of children. Their coaching service is outstanding, and they go above and beyond to assist and guide learners. Ornaldo sports academy is the best sports learning academy in town!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Reviews;