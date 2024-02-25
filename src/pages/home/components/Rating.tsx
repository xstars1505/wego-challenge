import React from 'react';
import { FaStar } from 'react-icons/fa';

import Tag from 'shared/components/Tag';

type Props = {
  rating: string | number;
};
const Rating: React.FC<Props> = ({ rating }) => {
  return (
    <Tag>
      <FaStar data-testid="FaStar" className="mr-1" />
      {rating}
    </Tag>
  );
};

export default Rating;
