import Card from "./Card";

import image1 from "../.././assets/imagen1.jpg";

const cards = [
  {
    id: 1,
    title: "Demet Shop",
    image: image1,
  },
  {
    id: 2,
    title: "Kaffe",
    image: image1,
  },
  {
    id: 3,
    title: "Proximamente",
    image: image1,
  },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;