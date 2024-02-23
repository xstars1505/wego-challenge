import React from 'react';
import Tag from 'shared/components/Tag';

type Props = {
  from: number;
  to: number;
};
const CookingTime: React.FC<Props> = ({ from, to }) => {
  return <Tag>{`${from} - ${to} min`}</Tag>;
};

export default CookingTime;
