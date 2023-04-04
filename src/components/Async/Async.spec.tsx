import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { Async } from "./Async";

test("it renders correctly", async () => {
  render(<Async />);

  expect(screen.getByText("Async")).toBeInTheDocument();

  //Método screen.get procura de forma síncrona se não encontrar retorna erro | query procura todos os elementos e não retorna erros. Já o find fica monitorando esperando o elemento aparecer caso não encontre vai retornar um erro

  await waitForElementToBeRemoved(screen.queryByText("Button"));
});
