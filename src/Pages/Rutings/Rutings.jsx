import { useEffect } from "react";
import { useState } from "react"
import Ruting from "../Ruting/Ruting";


const Rutings = () => {
    const [rutings, setRutings] = useState([]);

    useEffect(() => {
        fetch(`https://school-spsg.onrender.com/notices`)
        .then(res => res.json())
        .then(data => setRutings(data));
    }, []);

  return (
    <div>
        <div className='grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-3'>
            {
                rutings.map(ruting => <Ruting
                    key={ruting._id}
                    ruting={ruting}
                ></Ruting>)
            }
        </div>
    </div>
  )
}

export default Rutings