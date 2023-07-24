import "./DropdownList.css"

const DropdownList = ({label, items, valor, onChangeFieldLetter}) => {
  return (
    <div className="dropdown-list">
      <label>{label}</label>
      <select onChange={evento => onChangeFieldLetter(evento.target.value)} value={valor}>
        <option value=""></option>
        {items.map(item => <option key={item}>{item}</option>)}
      </select>
    </div>
  )

  
}

export default DropdownList;