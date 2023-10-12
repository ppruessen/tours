import { useState } from "react"

const Tour = ({ id, image, info, name, price, deleteTour }) => {

    const [isReadMore, setIsReadMore] = useState(false);
    return (
        <article className="single-tour">
            <img className="img" src={image} alt={name} />
            <span className="tour-price">{price}</span>
            <div className="tour-info">
                <h5>{name}</h5>
                <p>
                    { isReadMore ? info : `${info.substring(0, 200)} ...`}
                    <button type="button" className="info-btn" onClick={() => setIsReadMore(!isReadMore)}>{isReadMore ? 'show less' : 'read more'}</button>
                </p>
                <button type="button" className="btn btn-block delete-btn" onClick={() => deleteTour(id)}>not interested</button>
            </div>
        </article>
    )
}
export default Tour