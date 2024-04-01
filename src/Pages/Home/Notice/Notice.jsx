import { Link } from 'react-router-dom';
import welcome from '../../../assets/products/welcome.png';

const Notice = () => {
  return (
    <div className="my-24">
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={welcome} className='w-100' alt="Notice"/></figure>
            <div className="card-body">
                <div className='text-5xl items-center mt-10'><h1><b><span style={{color: "#00DC93"}}>U</span>sonlinesmm</b></h1></div>
                <div className="card-actions justify-end">
                <button className="btn btn-primary ml-10"><Link to="/products">All Products</Link></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Notice