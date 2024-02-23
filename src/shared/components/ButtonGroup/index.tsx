import React, { useState } from 'react';
import styles from './ButtonGroup.module.scss';
import Button from 'shared/components/Button';
import classnames from 'classnames';
import { BaseComponentProps } from 'shared/types';

type Props = {
  buttonLabels: string[];
  preselectedIndex?: number;
  onClick: (index: number) => void;
} & BaseComponentProps;

const ButtonGroup: React.FC<Props> = ({ buttonLabels, preselectedIndex, className, onClick }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(preselectedIndex !== undefined ? preselectedIndex : -1);
  const handleSelectButton = (index: number) => {
    setCurrentIndex(index);
    onClick(index);
  };
  return (
    <div className={classnames(styles.buttonGroup, className)}>
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
