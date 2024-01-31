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
            <button className="character">Status: Vivo</button>
            <button className="character">Espécie: Humana</button>
          </div>
          <button className="character">Origem: Terra C-137</button>
          <img
            src={item.image}
            className="image"
          />
        </div>
      </div>
    </>
  );
}

export default Card;