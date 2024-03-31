import { useEffect } from "react";
import { useState } from "react"
import Noticee from "../Notice/Noticee";


const Noticess = () => {
    const [notices, setNotices] = useState([]);

    useEffect(() => {
        fetch(`https://school-spsg.onrender.com/applications`)
        .then(res => res.json())
        .then(data => setNotices(data))
    }, []);

  return (
    <div>
        <div className='grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-3'>
            {
                notices.map(notice => <Noticee 
                key={notice._id}
                notice={notice}
                ></Noticee>)
            }
        </div>
    </div>
  )
}

export default Noticess