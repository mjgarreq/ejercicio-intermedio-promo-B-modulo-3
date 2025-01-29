import PropTypes from "prop-types";

function Country({countryData}) {
  const {name, capital, flag, continents} = countryData;
  return (
    <article>
      <p>{flag}</p>
      <h3>{name.official}</h3>
      <p>{capital}</p>
      <p>{continents}</p>
    </article>
  )
}

Country.propTypes = {
  countryData: PropTypes.object,
}

export default Country