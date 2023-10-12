import { useEffect, useState } from "react";
import Tours from "./Tours";
import Loading from "./Loading";

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [toursArray, setToursArray] = useState([]);

  const deleteTour = (id) => {
    const newArray = toursArray.filter((tour) => {
        return tour.id !== id;
    });
    setToursArray(newArray);
}

  const getTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setToursArray(tours);
      
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    getTours();
  }, []);

  if (isLoading) {
    return <main>
      <Loading />
    </main>
  }

  if (toursArray.length === 0) {
    return <main>
      <div className="title">
        <h2>no tours left</h2>
        <button className="btn" style={{marginTop: '2rem'}} onClick={getTours}>Refresh List</button>
      </div>
    </main>
  }

  return <main>
    <Tours toursArray={toursArray} deleteTour={deleteTour}/>
  </main>
};
export default App;
