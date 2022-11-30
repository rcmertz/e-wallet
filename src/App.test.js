import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Expense from "./components/expense/Expense";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

describe("Login", () => {
  test("determinado e-mail, quando vazio, mostra a mensagem de erro necessária", async () => {
    render(<App />);

    const email = screen.getByTestId("email");

    await userEvent.type(email, "anyValue");
    await userEvent.clear(email);

    const requiredError = screen.queryByTestId("email-required");
    expect(requiredError).not.toBeNull();
  });

  test("determinado e-mail, quando tiver valor, ocultar a mensagem de erro necessária", async () => {
    render(<App />);

    const email = screen.getByTestId("email");

    await userEvent.type(email, "anyValue");

    const requiredError = screen.queryByTestId("email-required");
    expect(requiredError).toBeNull();
  });

  test("determinado e-mail, quando o campo não for alterado, ocultar a mensagem de erro necessária", async () => {
    render(<App />);

    const requiredError = screen.queryByTestId("email-required");
    expect(requiredError).toBeNull();
  });

  test("determinado e-mail, quando inválido, mostra mensagem de erro inválida", async () => {
    render(<App />);

    const email = screen.getByTestId("email");

    await userEvent.type(email, "anyValue");

    const requiredError = screen.queryByTestId("email-invalid");
    expect(requiredError).not.toBeNull();
  });

  test("determinado e-mail, quando válido, oculta a mensagem de erro inválida", async () => {
    render(<App />);

    const email = screen.getByTestId("email");

    await userEvent.type(email, "valid@email.com");

    const requiredError = screen.queryByTestId("email-invalid");
    expect(requiredError).toBeNull();
  });

  test("senha fornecida, quando vazia, mostra a mensagem de erro necessária", async () => {
    render(<App />);

    const password = screen.getByTestId("password");

    await userEvent.type(password, "anyValue");
    await userEvent.clear(password);

    const requiredError = screen.queryByTestId("password-required");
    expect(requiredError).not.toBeNull();
  });

  test("senha fornecida, quando tiver valor, ocultar a mensagem de erro necessária", async () => {
    render(<App />);

    const password = screen.getByTestId("password");

    await userEvent.type(password, "anyValue");

    const requiredError = screen.queryByTestId("password-required");
    expect(requiredError).toBeNull();
  });

  test("dado formulário inválido, então desabilite o botão de login", () => {
    render(<App />);

    const loginButton = screen.getByTestId("login-button");

    expect(loginButton).toBeDisabled();
  });

  test("dado formulário válido, então habilite o botão de login", () => {
    render(<App />);

    const email = screen.getByTestId("email");
    userEvent.type(email, "gustavo@gmail.com");
    const password = screen.getByTestId("password");
    userEvent.type(password, "gustavo1234");

    const loginButton = screen.getByTestId("login-button");

    expect(loginButton).not.toBeDisabled();
  });
});

describe("ExpensePage", () => {
  test("dado input valor preenchido com letras, mostrar mensagem de erro", async () => {
    render(<BrowserRouter>{<Expense />}</BrowserRouter>);

    const valor = screen.getByTestId("valor");

    await userEvent.type(valor, "dfsfsd");

    const requiredError = screen.queryByTestId("valor-invalid");
    expect(requiredError).toBeInTheDocument();
  });
});
