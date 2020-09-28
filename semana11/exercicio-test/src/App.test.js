import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

const creatPost = (getByPlaceholderText, getByText, post) => {
  const input = getByPlaceholderText(/Novo post/i);
  const buttonText = getByText(/Adicionar/i);

  fireEvent.change(input, { target: { value: post} });
  fireEvent.click(buttonText);
  fireEvent.change(input, { target: { value: "" } });
};
it("Retorna um post digitado pelo Usuario", () => {
  const { getByPlaceholderText, getByText } = render(<App />);

  creatPost(getByPlaceholderText, getByText, "Bom dia");

  expect(getByText(/Bom dia/i)).toHaveTextContent(/Bom dia/i);
});