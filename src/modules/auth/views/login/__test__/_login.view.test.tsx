// App.test.js
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { LoginView } from "@/modules/auth/views/login/login.view";
import { ProvidersMock } from "../../../../../../__mocks__/_providers.mock";

describe("UT: login.view", () => {
  let form: HTMLElement;
  let submitButton: HTMLElement;
  let emailInput: HTMLElement;
  let passwordInput: HTMLElement;

  beforeEach(() => {
    render(
      <ProvidersMock>
        <LoginView></LoginView>
      </ProvidersMock>
    );

    form = screen.getByRole("form", { name: "login-form" });
    submitButton = screen.getByRole("button", { name: "submit-button" });
    emailInput = screen.getByRole("textbox", { name: "email-input" });
    passwordInput = screen.getByTestId("password-input");
  });

  it("login form should validate user invalid email", async () => {
    // act
    await act(async () => {
      fireEvent.change(emailInput, {
        target: { value: "invalid email input" },
      });
      fireEvent.click(submitButton);
    });

    // assert
    await waitFor(() => {
      const label = screen.getByTitle("email-input-label-error");
      expect(label).toBeInTheDocument();
    });
  });

  it("login form should validate user password required", async () => {
    // act
    await act(async () => {
      fireEvent.change(passwordInput, {
        target: { value: "" },
      });
      fireEvent.click(submitButton);
    });

    // assert
    await waitFor(() => {
      const label = screen.getByTitle("password-input-label-error");
      expect(label).toBeInTheDocument();
    });
  });
});
