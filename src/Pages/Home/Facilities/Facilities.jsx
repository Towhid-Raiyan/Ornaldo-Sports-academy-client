import img1 from '../../../assets/facilities/canteen.jpg'
import img2 from '../../../assets/facilities/gym.jpg'
import img3 from '../../../assets/facilities/outdoor-ground.jpg'
import img4 from '../../../assets/facilities/recovery.jpg'
import img5 from '../../../assets/facilities/restroom.jpg'
import img6 from '../../../assets/facilities/swimming-pool.jpg'

const Facilities = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-2 text-center'>
            <div className=" w-96 bg-base-100 shadow-sm image-full m-0 ">
                <figure className=''><img src={img1} alt="canteen" /></figure>
                <div className="card-body -mt-64 text-orange-600">
                    <h2 className="card-title">HEALTHY FOOD CANTEEN</h2>
                </div>
            </div>
            <div className="w-96 shadow-sm image-full">
                <figure><img src={img2} alt="gym" /></figure>
                <div className="card-body -mt-64 text-orange-600">
                    <h2 className="card-title">THE GYM</h2>
                </div>
            </div>
            <div className="card w-96 shadow-sm image-full">
                <figure><img src={img3} alt="practice-ground" /></figure>
                <div className="card-body">
                    <h2 className="card-title">OUTDOOR PRACTICE GROUND</h2>
                </div>
            </div>
            <div className="card w-96 shadow-sm image-full">
                <figure><img src={img4} alt="recovery-room" /></figure>
                <div className="card-body">
                    <h2 className="card-title">RECOVERY ROOM</h2>
                </div>
            </div>
            <div className="card w-96 shadow-sm image-full">
                <figure><img src={img5} alt="rest-room" /></figure>
                <div className="card-body">
                    <h2 className="card-title">REST ROOM</h2>
                </div>
            </div>
            <div className="card w-96 shadow-sm image-full">
                <figure><img src={img6} alt="swimming-pool" /></figure>
                <div className="card-body">
                    <h2 className="card-title">SWIMMING POOL</h2>
                </div>
            </div>
            {/* <div>
                <img src={img1} />
                <div className="absolute rounded-xl flex items-center h-full left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='text-orange-800 space-y-7 w-1/2 ml-14'>
                        <h2 className='text-6xl font-bold text-start text-orange-800'>Look up, Get up, but Never give up!</h2>
                    </div>
                </div>
            </div> */}
            {/* <div className="hero min-h-screen" style="background-image: url(/images/stock/photo-1507358522600-9f71e620c44e.jpg);">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Facilities;