function Card() {
  return (
    <>
      <div className="container">
        <div className="card">
          <h2 className="name">Rick Sanchez</h2>
          <div className="button-group">
            <button className="character">Status: Vivo</button>
            <button className="character">Espécie: Humana</button>
          </div>
          <button className="character">Origem: Terra C-137</button>
          <img
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="Imagem Rick Sanchez"
            className="image"
          />
        </div>
      </div>
    </>
  );
}

export default Card;