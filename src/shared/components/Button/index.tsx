import classnames from 'classnames';
import React from 'react';
import styles from './Button.module.scss';
import { BaseComponentProps } from 'shared/types';

type Props = {
  label: string;
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
} & BaseComponentProps;

const Button: React.FC<Props> = ({ label, className, disabled, loading, onClick }) => {
  return (
    <button className={classnames('btn', styles.button, className)} disabled={disabled || loading} onClick={onClick}>
      <span className={styles.buttonLabel}>{label}</span>
    </button>
  );
};

export default Button;
