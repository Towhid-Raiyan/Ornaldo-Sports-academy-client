import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from 'react-router-dom';
import pic1 from '../../../assets/banner_picture/Untitled design (6).png'
import pic2 from '../../../assets/banner_picture/Untitled design (7).png'
import pic3 from '../../../assets/banner_picture/Untitled design (8).png'
import pic4 from '../../../assets/banner_picture/Untitled design (9).png'


const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src={pic1} />
                <div className="absolute rounded-xl flex items-center h-full left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='text-white space-y-7 w-1/2 ml-14'>
                        <h2 className='text-6xl font-bold text-start'>Look up, Get up, but Never give up!</h2>
                        <p className='text-start'>Our institution is very popular for kids sports training in the country. Providing quality service is our only goal. </p>
                        <div className='text-start'>
                            <Link to={'/allToy'}>
                                <button className="btn bg-orange-700 hover:bg-orange-500 text-white">View Toys</button> 
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img src={pic2} />
                <div className="absolute rounded-xl flex items-center h-full left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='text-white space-y-7 w-1/2 ml-14'>
                        <h2 className='text-6xl font-bold text-start'>Look up, Get up, but Never give up!</h2>
                        <p className='text-start'>Our institution is very popular for kids sports training in the country. Providing quality service is our only goal.</p>
                        <div className='text-start'>
                            <Link to={'/allToy'}>
                                <button className="btn bg-orange-700 hover:bg-orange-500 text-white">View Toys</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img src={pic3} />
                <div className="absolute rounded-xl flex items-center h-full left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='text-white space-y-7 w-1/2 ml-14'>
                        <h2 className='text-6xl font-bold text-start'>Look up, Get up, but Never give up!</h2>
                        <p className='text-start'>Our institution is very popular for kids sports training in the country. Providing quality service is our only goal. </p>
                        <div className='text-start'>
                            <Link to={'/allToy'}>
                                <button className="btn bg-orange-700 hover:bg-orange-500 text-white">View Toys</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img src={pic4} />
                <div className="absolute rounded-xl flex items-center h-full left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='text-white space-y-7 w-1/2 ml-14'>
                        <h2 className='text-6xl font-bold text-start'>Look up, Get up, but Never give up!</h2>
                        <p className='text-start'>Our institution is very popular for kids sports training in the country. Providing quality service is our only goal.</p>
                        <div className='text-start'>
                            <Link to={'/allToy'}>
                                <button className="btn bg-orange-700 hover:bg-orange-500 text-white">View Toys</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Carousel>
    );
};

export default Banner;