import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BiSearch } from 'react-icons/bi';
import InputField from 'shared/components/InputField/index';

describe('InputField', () => {
  const placeholder = 'Search';
  const onChangeMock = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('displays the placeholder text', () => {
    const { getByPlaceholderText } = render(<InputField placeholder={placeholder} onChange={onChangeMock} />);
    expect(getByPlaceholderText(placeholder)).toBeInTheDocument();
  });

  it('calls onChange function when input value changes', () => {
    const { getByPlaceholderText } = render(<InputField placeholder={placeholder} onChange={onChangeMock} />);
    const inputElement = getByPlaceholderText(placeholder);
    fireEvent.change(inputElement, { target: { value: 'test' } });
    expect(onChangeMock).toHaveBeenCalledWith('test');
  });

  it('displays icon when provided', () => {
    const { getByTestId } = render(<InputField placeholder={placeholder} onChange={onChangeMock} icon={BiSearch} />);
    expect(getByTestId('icon')).toBeInTheDocument();
  });
});
