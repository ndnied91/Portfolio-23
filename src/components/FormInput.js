const FormInput = ({
  label,
  name,
  type,
  defaultValue,
  size,
  inputType,
  placeholder,
}) => {
  return (
    <div className="form-control ">
      <label htmlFor={name} className="label ">
        <span className="label-text capitalize">{label}</span>
      </label>

      {inputType === 'textarea' ? (
        <textarea
          type={type}
          name={name}
          placeholder={placeholder}
          defaultValue={defaultValue}
          className={`h-48 input p-3 input-bordered ${size} `}
          required
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          defaultValue={defaultValue}
          className={`input input-bordered ${size} `}
          required
        />
      )}
    </div>
  );
};
export default FormInput;
