import WesleyContainer from '../Containers/WesleyContainer';
import {render, fireEvent} from '@testing-library/react';
import React from 'react';

describe("WesleyContainer", () => {
  let container;

  beforeEach(() => {
    container = render(< WesleyContainer  />);
  });

  it("should get_random_response when IS THAT TRUE button is clicked", () => {
    const truthButton = container.getByTestId("get-truth");
    fireEvent.click(truthButton);
    expect(truthButton).toHaveClass('truth')
  });

  it("should show an image when IS THAT TRUE button clicked", () => {
    const truthButton = container.getByTestId("get-truth");
    fireEvent.click(truthButton);
    const displayedImage = document.querySelector("img");
    expect(displayedImage.alt).toContain("Wesley's Response")
  });

  it("should update the userQuery state", () => {
    const containerInput = container.getByTestId("text-input");
    fireEvent.change(containerInput, { target: {value: 'Test query'} });
    expect(containerInput.value).toBe('Test query');
  });

  it("should set Button Clicked to false when the Clear button is pressed", () => {
  
    const clearButton = container.getByTestId('clear-text-button');
    fireEvent.click(clearButton);
    const containerInput = container.getByTestId("text-input");
    expect(containerInput.value).toBe('');
   
  });

})