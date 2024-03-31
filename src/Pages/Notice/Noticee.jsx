import PropTypes from 'prop-types';

const Noticee = ({notice}) => {
  const {title, image ,description} = notice;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
    <figure><img src={image} alt="Shoes" /></figure>
    <div className="card-body">
        <h2 className="card-title">
        {title}
        <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{description}</p>
        
    </div>
    </div>
  )
}

Noticee.propTypes = {
  notice: PropTypes.string
}

export default Noticee