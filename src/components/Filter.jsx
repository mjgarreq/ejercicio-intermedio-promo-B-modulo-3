import PropTypes from "prop-types";

function Filter({changeSearchCountry, changeSearchContinent}) {

  const handleInput = (ev) => {
    changeSearchCountry(ev.target.value);
  }

  const handleSelect = (ev) => {
    changeSearchContinent(ev.target.value)
    console.log(ev.target.value)
  }

  return (
    <form method="post">

      <fieldset>
        <label htmlFor="country">Buscar por país </label>
        <input type="text" name="country" id="country" placeholder="Ej: Spain" onChange={handleInput}/>
      </fieldset>
      <fieldset>
        <label htmlFor="continent">Buscar por continente </label>
        <select name="continent" id="continent" onChange={handleSelect}>
          <option value="">All</option>
          <option value="africa">Africa</option>
          <option value="north america">North America</option>
          <option value="shouth america">South America</option>
          <option value="europe">Europe</option>
          <option value="asia">Asia</option>
          <option value="oceania">Oceania</option>
        </select>
      </fieldset>
    </form>
  )
}

Filter.propTypes = {
  changeSearchCountry: PropTypes.func,
  changeSearchContinent: PropTypes.func
}

export default Filter