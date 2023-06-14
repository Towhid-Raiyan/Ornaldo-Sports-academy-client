import img1 from '../../../assets/facilities/canteen.jpg'
import img2 from '../../../assets/facilities/gym.jpg'
import img3 from '../../../assets/facilities/outdoor-ground.jpg'
import img4 from '../../../assets/facilities/recovery.jpg'
import img5 from '../../../assets/facilities/restroom.jpg'
import img6 from '../../../assets/facilities/swimming-pool.jpg'

const Facilities = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-2 text-center'>
            <div className="card w-96 shadow-sm image-full">
                <figure><img src={img1} alt="canteen" /></figure>
                <div className="card-body">
                    <h2 className="card-title">HEALTHY FOOD CANTEEN</h2>
                </div>
            </div>
            <div className="card w-96 shadow-sm image-full">
                <figure><img src={img2} alt="gym" /></figure>
                <div className="card-body">
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
        </div>
    );
};

export default Facilities;