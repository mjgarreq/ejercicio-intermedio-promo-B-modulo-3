import PropTypes from "prop-types";

function Filter({changeFilter}) {

  const handleChange = (ev) => {
    const key = ev.target.id;
    const value = key === "name" ? ev.target.value.toLowerCase() : ev.target.value;
    changeFilter(value, key)
  }


  return (
    <form method="post">

      <fieldset>
        <label htmlFor="country">Buscar por país </label>
        <input type="text" name="name" id="name" placeholder="Ej: Spain" onChange={handleChange}/>
      </fieldset>
      <fieldset>
        <label htmlFor="continent">Buscar por continente </label>
        <select name="continent" id="continent" onChange={handleChange}>
          <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="North America">North America</option>
          <option value="South America">South America</option>
          <option value="Europe">Europe</option>
          <option value="Asia">Asia</option>
          <option value="Oceania">Oceania</option>
        </select>
      </fieldset>
    </form>
  )
}

Filter.propTypes = {
  changeFilter: PropTypes.func,
}

export default Filter