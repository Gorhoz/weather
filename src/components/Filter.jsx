import Select from "react-select";
import "../styles/Filter.css"

function Filter(props) {
  return (
    <Select
      isClearable={true}
      className="selector"
      placeholder="Select Country"
      options={props.options}
      onChange={props.changeCountry}
      value={props.country}
    />
  );
}

export default Filter;
