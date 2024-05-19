import "../../../../__mocks__/api/_auth-api.mock";
import { ProvidersMock } from "../../../../__mocks__/_providers.mock";
import { LoginView } from "@/modules/auth/views/login/login.view";
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { useAuthContext } from "@/modules/auth/context/auth.context";

const TestingComponent = () => {
  const { isAuthenticated } = useAuthContext();

  return (
    <div>
      <input
        readOnly
        aria-label={"isAuthenticated"}
        value={String(isAuthenticated)}
      ></input>
    </div>
  );
};

describe("CT: User Login", () => {
  let submitButton: HTMLElement;
  let emailInput: HTMLElement;
  let passwordInput: HTMLElement;

  beforeEach(() => {
    // arrange
    render(
      <ProvidersMock>
        <LoginView></LoginView>
        <TestingComponent></TestingComponent>
      </ProvidersMock>
    );

    submitButton = screen.getByRole("button", { name: "submit-button" });
    emailInput = screen.getByRole("textbox", { name: "email-input" });
    passwordInput = screen.getByTestId("password-input");
  });

  it("should login the user", async () => {
    // act
    await act(async () => {
      fireEvent.change(emailInput, {
        target: { value: "cliente@youdrive.com" },
      });
      fireEvent.change(passwordInput, {
        target: { value: "password" },
      });

      fireEvent.click(submitButton);
    });

    // assert
    await waitFor(() => {
      const input = screen.getByRole<HTMLInputElement>("textbox", {
        name: "isAuthenticated",
      });

      expect(input.value).toEqual("true");
    });
  });

  it("should NOT login the user", async () => {
    // act
    await act(async () => {
      fireEvent.change(emailInput, {
        target: { value: "invalid@email.com" },
      });
      fireEvent.change(passwordInput, {
        target: { value: "password" },
      });

      fireEvent.click(submitButton);
    });

    // assert
    await waitFor(() => {
      const input = screen.getByRole<HTMLInputElement>("textbox", {
        name: "isAuthenticated",
      });

      expect(input.value).toEqual("false");
    });
  });
});
