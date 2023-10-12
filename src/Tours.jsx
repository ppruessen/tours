import Tour from "./Tour";
import { useState } from "react";

const Tours = ({toursArray, deleteTour}) => {
    return (
        <section>
            <div className="title">
                <h2>our tours</h2>
                <div className="title-underline"></div>
            </div>
            <div className="tours">
                { toursArray.map((tour) => {
                        return (
                            <Tour key={tour.id} {...tour} deleteTour={deleteTour}/>
                        )
                    })
                }
            </div>
        </section>
    )
}
export default Tours