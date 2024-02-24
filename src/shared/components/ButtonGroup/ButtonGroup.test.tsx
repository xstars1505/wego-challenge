import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ButtonGroup from 'shared/components/ButtonGroup/index';

describe('<ButtonGroup />', () => {
  const buttonLabels = ['Button 1', 'Button 2', 'Button 3'];
  const onClickMock = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('adds "active" class to selected button', () => {
    const { getByRole } = render(<ButtonGroup buttonLabels={buttonLabels} preselectedIndex={1} onClick={onClickMock} />);

    expect(getByRole('button', { name: 'Button 1' })).not.toHaveClass('active');
    expect(getByRole('button', { name: 'Button 2' })).toHaveClass('active');
    expect(getByRole('button', { name: 'Button 3' })).not.toHaveClass('active');
  });

  it('renders button group with provided labels', () => {
    const { getByText } = render(<ButtonGroup buttonLabels={buttonLabels} onClick={onClickMock} />);

    buttonLabels.forEach(label => {
      expect(getByText(label)).toBeInTheDocument();
    });
  });

  it('calls onClick function when button is clicked', () => {
    const { getByText } = render(<ButtonGroup buttonLabels={buttonLabels} onClick={onClickMock} />);

    fireEvent.click(getByText('Button 1'));
    expect(onClickMock).toHaveBeenCalledWith(0);

    fireEvent.click(getByText('Button 2'));
    expect(onClickMock).toHaveBeenCalledWith(1);

    fireEvent.click(getByText('Button 3'));
    expect(onClickMock).toHaveBeenCalledWith(2);
  });
});
