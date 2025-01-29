import '../styles/App.scss';
import Header from './Header';
import dataJson from '../services/data.json'
import ListCountries from './ListCountries';
import { useState } from 'react';
import Filter from './Filter';

function App() {

  const [searchCountry, setSearchCountry] = useState("");
  
  const [searchContinent, setSearchContinent] = useState("");
  
  const changeSearchCountry = (value) => {
    setSearchCountry(value.toLowerCase())
  }

  const changeSearchContinent = (value) => {
    setSearchContinent(value);
  }

  const filterCountry = dataJson.filter((country) => country.name.official.toLowerCase().includes(searchCountry)).filter((country) => country.continents[0].toLowerCase().includes(searchContinent))
  
  return (
    <>
    <Header/>
    <main>
      <Filter changeSearchCountry={changeSearchCountry} changeSearchContinent={changeSearchContinent}/>
      {
        filterCountry.length !== 0 
        ?
        <ListCountries countryList={filterCountry}/>
        :
        <p>País no encontrado</p>
      }
      
    </main>
    </>
  );
}

export default App;


/*
1. Crear componentes (App, Header (un título que pone COUNTRY INFO APP y un párrafo breve explicativo) ListCountries, Country (será cada país, puedo hacer article), Filter (formulario, un input para que pueda buscar por país, BONUS select para buscar por continente), BONUS AddCountry (si da tiempo, crear un formulario con un botón para añadir un nuevo país)).
2. Crear las variables de estado (array de datos (esta no es necesaria porque el array no se va a modificar en realidad), input buscar)
*/