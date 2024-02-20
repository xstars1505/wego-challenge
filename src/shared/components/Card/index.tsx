import React from 'react';
import styles from './Card.module.scss';

type Props = {
  title: string;
  imageSrc: string;
  children?: React.ReactNode;
};
const Card: React.FC<Props> = ({ title, imageSrc, children }) => {
  return (
    <div className={styles.cardContainer}>
      <img className={styles.cardImage} src={imageSrc} alt="media" />
      <div className={styles.cardBody}>
        <h5 className={styles.cardTitle}>{title}</h5>
        {children}
      </div>
    </div>
  );
};

export default Card;
