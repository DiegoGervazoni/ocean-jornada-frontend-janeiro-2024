
import "./App.css";
import Card from "./components/Card/Card.jsx";

function App() {
  // Carregamento de dados direto via código
  const item1 = {
    name: "Rick Sanchez",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    status: "Status: Vivo",
    species: "Espécie: Humana",
    origin: "Origem: Terra C-137",
  };

  const item2 = {
    name: "Morty Smith",
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    status: "Status: Vivo",
    species: "Espécie: Humana",
    origin: "Origem: Terra C-137",
  };

  const item3 = {
    name: "Summer Smith",
    image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    status: "Status: Vivo",
    species: "Espécie: Humana",
    origin: "Origem: Terra C-137",
  };

  const item4 = {
    name: "Beth Smith",
    image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
    status: "Status: Vivo",
    species: "Espécie: Humana",
    origin: "Origem: Terra C-137",
  };

  const itens = [item1, item2, item3, item4]

  // Carregamento de dados direto via API (Backend)
  async function carregarDadosApi(){ 
    const apiUrl = "https://rickandmortyapi.com/api/character/"
  
    // Prepara a requisição
    const response = await fetch(apiUrl)

    //console.log(response)

    const body = await response.json() // Converte a resposta para JSON
    console.log(body)

    // Extrair a propriedade results do objeto body
    // Essa propriedade contem a lista de itens
    const resulsts = body.results
  }

  carregarDadosApi()

  return (
    <>
      <div className="cards">
        {itens.map((item, i) => <Card item={item} key={i}/>)}
      </div>
    </>
  );
}

export default App;
