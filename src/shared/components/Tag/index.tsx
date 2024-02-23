import React from 'react';
import styles from './Tag.module.scss';
import { BaseComponentProps } from 'shared/types';
import classnames from 'classnames';

type Props = {
  children: React.ReactNode;
} & BaseComponentProps;

const Tag: React.FC<Props> = ({ className, children }) => {
  return <div className={classnames(styles.tag, className)}>{children}</div>;
};

export default Tag;
