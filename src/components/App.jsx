import '../styles/App.scss';
import Header from './Header';
import dataJson from '../services/data.json'
import ListCountries from './ListCountries';
import { useState } from 'react';
import Filter from './Filter';
import AddCountry from './AddCountry';

function App() {

  const [countries, setCountries] = useState(dataJson);

  const [filtersSearch, setFiltersSearch] = useState({
    name: "",
    continent: "All"
  });

  const [newCountry, setNewCountry] = useState({
    name: {
      common: "",
    },
    capital: [],
    flag: "",
    continents: []
  });

  const changeFilter = (value, key) => {
    /*
    objeto.propiedad = "nuevo valor",
    objeto[key] = value
    */
    setFiltersSearch({...filtersSearch, [key]: value})
    /*
      if (key === "name") {
        setFilterSearch({...filterSearch, name: value})
      }
    */
  }

  const changeNewCountry = (key, value) => {
    const newCountryCopy = {...newCountry};

    if (key === "name") {
      newCountryCopy.name.common = value;
    } else if (key === "capital") {
      newCountryCopy.capital = [value];
    } else if (key === "flag") {
      newCountryCopy.flag = value;
    } else {
      newCountryCopy.continents = [value];
    }
    setNewCountry({...newCountryCopy})
  }

  const addNewCountry = () => {
    setCountries([...countries, newCountry])
  }

  // const [searchCountry, setSearchCountry] = useState("");
  
  // const [searchContinent, setSearchContinent] = useState("All");
  
  // const changeSearchCountry = (value) => {
  //   setSearchCountry(value.toLowerCase())
  // }

  // const changeSearchContinent = (value) => {
  //   setSearchContinent(value);
  // }

  const filteredCountry = countries.filter((country) => country.name.common.toLowerCase().includes(filtersSearch.name))
  .filter((country) => filtersSearch.continent === "All" ? true : country.continents.includes(filtersSearch.continent))
  /*
  .filter((country) => {
    if (filtersSearch.continent === "All") {
      return true
    } else {
      return country.continents.includes(filtersSearch.continent)
    }
  })
  */

  // const filterCountry = dataJson.filter((country) => country.name.official.toLowerCase().includes(searchCountry)).filter((country) => country.continents[0].toLowerCase().includes(searchContinent))
  

  return (
    <>
    <Header/>
    <main>
      <AddCountry changeNewCountry={changeNewCountry} addNewCountry={addNewCountry}/>
      <Filter changeFilter={changeFilter}/>
      
      <ListCountries countryList={filteredCountry}/>
    
      
    </main>
    </>
  );
}

export default App;


/*
1. Crear componentes (App, Header (un título que pone COUNTRY INFO APP y un párrafo breve explicativo) ListCountries, Country (será cada país, puedo hacer article), Filter (formulario, un input para que pueda buscar por país, BONUS select para buscar por continente), BONUS AddCountry (si da tiempo, crear un formulario con un botón para añadir un nuevo país)).
2. Crear las variables de estado (array de datos (esta no es necesaria porque el array no se va a modificar en realidad), input buscar)
*/