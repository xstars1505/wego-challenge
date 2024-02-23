import React from 'react';
import styles from './Card.module.scss';
import classNames from 'classnames';
import { BaseComponentProps } from 'shared/types';

type Props = {
  title: string;
  imageSrc: string;
  imageHeight?: number;
  children?: React.ReactNode;
} & BaseComponentProps;

const Card: React.FC<Props> = ({ title, className, imageHeight = 225, imageSrc, children }) => {
  return (
    <div className={classNames(styles.cardContainer, className)}>
      <img className={styles.cardImage} src={imageSrc} height={imageHeight} alt="media" />
      <div className={styles.cardBody}>
        <h5 className={styles.cardTitle}>{title}</h5>
        {children}
      </div>
    </div>
  );
};

export default Card;
