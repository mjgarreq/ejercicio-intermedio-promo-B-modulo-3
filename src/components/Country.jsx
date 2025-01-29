import PropTypes from "prop-types";

function Country({countryData}) {
  const {name, capital, flag, continents} = countryData;
  return (
    <article>
      <p>{flag}</p>
      <h3>{name.common}</h3>
      <p>{capital}</p>
      <ul>
        {continents.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </article>
  )
}

Country.propTypes = {
  countryData: PropTypes.object,
}

export default Country