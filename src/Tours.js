import Card from "./Card";

function Tours({ tours, removeTour }) {
  return (
    <div>
      <div className="container">
        <h2>Plan with Love</h2>
      </div>
      <div className="cards">
        {tours.map((tour) => {
          return <Card {...tour} removeTour={removeTour}></Card>;
        })}
      </div>
    </div>
  );
}

export default Tours;
