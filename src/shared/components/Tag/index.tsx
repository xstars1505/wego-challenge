import React from 'react';
import styles from './Tag.module.scss';

type Props = {
  children: React.ReactNode;
};
const Tag: React.FC<Props> = ({ children }) => {
  return <div className={styles.tag}>{children}</div>;
};

export default Tag;
