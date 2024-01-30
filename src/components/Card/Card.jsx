/* eslint-disable react/prop-types */
function Card(props) {
  // console.log(props);

  const item = props.item;
  //console.log(item);


  return (
    <>
      <div className="container">
        <div className="card">
          <h2 className="name">{item.name}</h2>
          <div className="button-group">
            <button className="character">{item.status}</button>
            <button className="character">{item.species}</button>
          </div>
          <button className="character">{item.origin}</button>
          <img
            src={item.image}
            alt="Imagem Rick Sanchez"
            className="image"
          />
        </div>
      </div>
    </>
  );
}

export default Card;