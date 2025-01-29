import Country from "./Country";
import PropTypes from "prop-types";

function ListCountries({countryList}) {

  const countryItemsHtml = countryList.map((eachItem, index) => <Country key={index} countryData={eachItem}/>)

  return (
    <section className="countryList">
      {countryItemsHtml}
    </section>
  )
}

ListCountries.propTypes = {
  countryList: PropTypes.array,
}

export default ListCountries