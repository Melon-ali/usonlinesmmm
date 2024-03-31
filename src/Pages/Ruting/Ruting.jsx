import PropTypes from 'prop-types';

const Ruting = ({ruting}) => {
    const {image, description, title} = ruting;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}

Ruting.propTypes = {
    ruting: PropTypes.string
}

export default Ruting