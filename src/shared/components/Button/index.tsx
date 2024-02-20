import classnames from 'classnames';
import React from 'react';
import styles from './Button.module.scss';

type Props = {
  label: string;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
};
const Button: React.FC<Props> = ({ label, className, disabled, loading, onClick }) => {
  return (
    <button className={classnames('btn', styles.button, className)} disabled={disabled || loading} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
