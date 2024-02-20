import React from 'react';
import InputField from 'shared/components/InputField';
import { FaSearch } from 'react-icons/fa';
import Button from 'shared/components/Button';
import ButtonGroup from 'shared/components/ButtonGroup';
import Tag from 'shared/components/Tag';

const HomePage = () => {
  return (
    <>
      <InputField placeholder={'aa'} icon={FaSearch} />
      <Button label={'aa'} loading={false} onClick={() => null} />
      <ButtonGroup buttonLabels={['aaa', 'bbb', 'cc']} onClick={() => null} />
      <Tag>aa</Tag>
      <Tag>aa</Tag>
    </>
  );
};

export default HomePage;
