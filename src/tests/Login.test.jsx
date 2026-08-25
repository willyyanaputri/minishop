import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Login from "../pages/Login";
import { AuthProvider } from "../context/AuthContext";
import { MemoryRouter } from "react-router-dom";

function renderLogin() {
    return render(
        <MemoryRouter>
            <AuthProvider>
                <Login />
            </AuthProvider>
        </MemoryRouter>
    );
}

describe("Login", () => {

    it("menampilkan error jika email tidak valid", () => {
        renderLogin();

        const emailInput = screen.getByPlaceholderText(
            "Masukkan email"
        );

        const passwordInput = screen.getByPlaceholderText(
            "Masukkan password"
        );

        fireEvent.change(emailInput, {
            target: {
                value: "email-salah"
            }
        });

        fireEvent.change(passwordInput, {
            target: {
                value: "123456"
            }
        });

        fireEvent.click(
            screen.getByRole("button", {
                name: "Login"
            })
        );

        expect(
            screen.getByText("Email tidak valid!")
        ).toBeInTheDocument();
    });


    it("menampilkan error jika password kurang dari 6 karakter", () => {
        renderLogin();

        const emailInput = screen.getByPlaceholderText(
            "Masukkan email"
        );

        const passwordInput = screen.getByPlaceholderText(
            "Masukkan password"
        );

        fireEvent.change(emailInput, {
            target: {
                value: "test@gmail.com"
            }
        });

        fireEvent.change(passwordInput, {
            target: {
                value: "123"
            }
        });

        fireEvent.click(
            screen.getByRole("button", {
                name: "Login"
            })
        );

        expect(
            screen.getByText("Password minimal 6 karakter!")
        ).toBeInTheDocument();
    });

});