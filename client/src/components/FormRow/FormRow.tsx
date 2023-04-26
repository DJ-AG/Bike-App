interface FormRowProps {
  type: any;
  name: string;
  value: string;
  handleChange(e: React.ChangeEvent<HTMLInputElement>): any;
  labelText: string;
}

const FormRow: React.FC<FormRowProps> = ({
  type,
  name,
  value,
  handleChange,
  labelText,
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
