import React from 'react';
import classnames from 'classnames';
import styles from './Alert.module.scss';

type Props = {
  variant: 'error' | 'warning' | 'success';
  message: string;
};

const Alert: React.FC<Props> = ({ variant, message }) => {
  let alertClass;
  switch (variant) {
    case 'error':
      alertClass = styles['alert-error'];
      break;
    case 'success':
      alertClass = styles['alert-success'];
      break;
    default:
      alertClass = styles['alert-warning'];
      break;
  }

  return <div className={classnames(styles.alert, alertClass)}>{message}</div>;
};

export default Alert;
