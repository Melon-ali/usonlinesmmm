import PropTypes from 'prop-types';

const InfoCard = ({img, cardTitle, bgClass}) => {
    return (
      <div className={`card lg:card-side bg-base-100 shadow-xl ${bgClass}`}>
          <figure className='pl-5 pt-5'>
            <img src={img} alt="Album"/>
          </figure>
          <div className="card-body text-white">
              <h2 className="card-title">{cardTitle}</h2>
              <p></p>
          </div>
      </div>
    )
}

InfoCard.propTypes = {
    img: PropTypes.string,
    cardTitle: PropTypes.string,
    bgClass: PropTypes.string,
};
  
export default InfoCard;