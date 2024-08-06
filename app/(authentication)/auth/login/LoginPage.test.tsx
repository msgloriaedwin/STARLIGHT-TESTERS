import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from 'vitest';
import LoginPage from "./page";
import { useRouter } from 'next/navigation';

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
  }),
}));

describe("LoginPage", () => {
  it("renders the login page and displays initial elements", () => {
    render(<LoginPage />);

    expect(screen.getByPlaceholderText("Your username")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    expect(screen.getByText("Forgot Password?")).toBeInTheDocument();
    expect(screen.getByText("Sign in with Google")).toBeInTheDocument();
    expect(screen.getByText("Sign in with Facebook")).toBeInTheDocument();
  });

  it("shows validation error messages when form is submitted with empty fields", async () => {
    const user = userEvent.setup();
    render(<LoginPage />);

    await user.click(screen.getByText("Log in"));

    expect(screen.getByText("Username is required")).toBeInTheDocument();
    expect(screen.getByText("Password must be at least 8 characters long")).toBeInTheDocument();
  });

  it("removes error messages when input is provided", async () => {
    const user = userEvent.setup();
    render(<LoginPage />);

    await user.type(screen.getByPlaceholderText("Your username"), "testuser");
    await user.type(screen.getByPlaceholderText("Password"), "password123");

    await user.click(screen.getByText("Log in"));

    expect(screen.queryByText("Username is required")).not.toBeInTheDocument();
    expect(screen.queryByText("Password must be at least 8 characters long")).not.toBeInTheDocument();
  });

  it("logs form submission message when all inputs are valid", async () => {
    const user = userEvent.setup();
    render(<LoginPage />);

    await user.type(screen.getByPlaceholderText("Your username"), "testuser");
    await user.type(screen.getByPlaceholderText("Password"), "password123");

    const consoleSpy = vi.spyOn(console, 'log');

    await user.click(screen.getByText("Log in"));

    expect(consoleSpy).toHaveBeenCalledWith("Form submitted successfully!");
  });
});
