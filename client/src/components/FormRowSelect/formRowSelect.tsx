const FormRowSelect = ({ labelText, name, value, handleChange, list }:{labelText:string,name:string,value:any,handleChange:any,list:any}) => {
    return (
      <div className='form-row'>
        <label htmlFor={name} className='form-label'>
          {labelText || name}
        </label>
        <select
          name={name}
          value={value}
          onChange={handleChange}
          className='form-select'
        >
          {list.map((itemValue:any, index:number) => {
            return (
              <option key={index} value={itemValue}>
                {itemValue}
              </option>
            )
          })}
        </select>
      </div>
    )
  }
  
  export default FormRowSelect