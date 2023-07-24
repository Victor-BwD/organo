
import "./TextField.css"

const TextField = ({label, placeholder, mandatory, valor, onChangeFieldLetter}) => {
  

  const onDigit = (event) => {
    onChangeFieldLetter(event.target.value);
  }
  return (
    <div className="text-field">
      <label htmlFor="">{label}</label>
      <input required={mandatory} onChange={onDigit} value={valor} type="text" placeholder={placeholder}/>
    </div>
  )
}

export default TextField;