import React, { useState } from 'react';
import styles from './ButtonGroup.module.scss';
import Button from 'shared/components/Button';
import classnames from 'classnames';

type Props = {
  buttonLabels: string[];
  onClick: (index: number) => void;
};
const ButtonGroup: React.FC<Props> = ({ buttonLabels, onClick }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const handleSelectButton = (index: number) => {
    setCurrentIndex(index);
    onClick(index);
  };
  return (
    <div className={styles.buttonGroup}>
      {buttonLabels.map((label, index) => (
        <Button
          key={index}
          className={classnames(index === currentIndex && 'active')}
          label={label}
          onClick={() => handleSelectButton(index)}
        />
      ))}
    </div>
  );
};

export default ButtonGroup;
