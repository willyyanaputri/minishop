import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const [error, setError] = useState("");

    const { login } = useAuth();
    const navigate = useNavigate();

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

        setError("");
    }

    function handleSubmit(e) {
        e.preventDefault();

        // Validasi email
        if (!form.email.includes("@")) {
            setError("Email tidak valid!");
            return;
        }

        // Validasi password
        if (form.password.length < 6) {
            setError("Password minimal 6 karakter!");
            return;
        }

        // Login
        login(form.email);

        // Pindah ke halaman keranjang
        navigate("/keranjang");
    }

    return (
        <div className="max-w-md mx-auto p-6">

            <h2 className="text-3xl font-bold text-center mb-6">
                Login
            </h2>

            <form
            onSubmit={handleSubmit}
            className="space-y-4"
            noValidate
            >

                <div>
                    <label className="block mb-1 font-medium">
                        Email
                    </label>

                    <input
                        type="email"
                        name="email"
                        placeholder="Masukkan email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-4 py-2"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">
                        Password
                    </label>

                    <input
                        type="password"
                        name="password"
                        placeholder="Masukkan password"
                        value={form.password}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-4 py-2"
                    />
                </div>

                {error && (
                    <p className="text-red-500">
                        {error}
                    </p>
                )}

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                    Login
                </button>

            </form>

        </div>
    );
}

export default Login;