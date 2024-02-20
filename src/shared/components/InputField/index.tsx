import React, { useState } from 'react';
import { IconType } from 'react-icons';
import styles from './InputField.module.scss';

interface Props {
  placeholder: string;
  icon?: IconType;
}

const InputField: React.FC<Props> = ({ placeholder, icon: Icon }) => {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className={styles.inputFieldContainer}>
      {Icon && <Icon className={styles.icon} />}
      <input type="text" placeholder={placeholder} value={value} onChange={handleChange} className={styles.inputField} />
    </div>
  );
};

export default InputField;
