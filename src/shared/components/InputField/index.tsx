import React, { useState } from 'react';
import { IconType } from 'react-icons';
import classnames from 'classnames';
import { BaseComponentProps } from 'shared/types';
import styles from './InputField.module.scss';

type Props = {
  placeholder: string;
  className?: string;
  icon?: IconType;
  onChange: (value: string) => void;
} & BaseComponentProps;

const InputField: React.FC<Props> = ({ placeholder, className, icon: Icon, onChange }) => {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    onChange(event.target.value);
  };

  return (
    <div className={classnames(styles.inputFieldContainer, className)}>
      {Icon && <Icon className={styles.icon} />}
      <input type="text" placeholder={placeholder} value={value} onChange={handleChange} className={styles.inputField} />
    </div>
  );
};

export default InputField;
