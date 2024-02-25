import classnames from 'classnames';
import React from 'react';
import styles from './Promotion.module.scss';
import { FaGift, FaPercent } from 'react-icons/fa';

type Props = {
  promotion: string;
};
const Promotion: React.FC<Props> = ({ promotion }) => {
  let promotionType;
  let component = null;

  switch (promotion) {
    case '1+1':
      promotionType = styles.buyOneGetOne;
      component = <>{promotion}</>;
      break;
    case 'gift':
      promotionType = styles.gift;
      component = <FaGift data-testid="FaGift" />;
      break;
    default:
      promotionType = styles.discount;
      component = <FaPercent data-testid="FaPercent" fontSize="0.75rem" />;
      break;
  }

  return <div className={classnames(styles.promotion, promotionType)}>{component}</div>;
};

export default Promotion;
