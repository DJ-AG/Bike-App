const FormRow = ({
  type,
  name,
  value,
  handleChange,
  labelText,
}: {
  type: any;
  name: string;
  value: string;
  handleChange(e: any): any;
  labelText: string;
}) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        className="form-input"
      />
    </div>
  );
};

export default FormRow;
