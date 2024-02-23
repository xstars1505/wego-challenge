import React from 'react';
import Tag from 'shared/components/Tag';
import styles from './NewFood.module.scss';

const NewFood = () => {
  return (
    <Tag>
      <span className={styles.text}>New</span>
    </Tag>
  );
};

export default NewFood;
