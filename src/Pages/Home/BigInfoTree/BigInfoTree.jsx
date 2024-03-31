

const BigInfoTree = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 gap-3'>
        <div className={`card lg:card-side bg-base-100 shadow-xl`}>
            <figure className='pl-5 pt-5'>
                <img src='' className='w-28' alt="Album"/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">Name</h2>
                <p>description1</p>
                <p>description2</p>
                <p>description3</p>
                <p>description4</p>
            </div>
        </div>
        
    </div>
  )
}

export default BigInfoTree