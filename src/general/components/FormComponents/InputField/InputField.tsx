import { ChangeEvent, FC, useState } from 'react';
import './InputField.scss';
import withHelloMessage from '../../../../hoc/withHelloMessage';

interface InputProps {
  type?: string;
  label?: string;
  value?: string | number;
  name?: string;
  placeholder: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
}

const InputField: FC<InputProps> = ({
  type = 'text',
  label,
  value: customValue,
  name,
  placeholder,
  disabled,
  onChange,
}) => {
  const [value, setValue] = useState('');

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value;
    setValue(newValue);
    onChange && onChange(newValue);
  }

  return (
    <div className="input-wrapper">
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        id={label}
        value={customValue ?? value}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        disabled={disabled}
      />
    </div>
  );
};

export default withHelloMessage(InputField);
