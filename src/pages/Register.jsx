import { useState } from "react";

function Register() {
    const [form, setForm] = useState({
        email: "",
        password: "",
        konfirmasiPassword: ""
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

        setError("");
        setSuccess("");
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

        // Validasi konfirmasi password
        if (form.password !== form.konfirmasiPassword) {
            setError("Konfirmasi password tidak cocok!");
            return;
        }

        setError("");
        setSuccess("Registrasi berhasil!");

        console.log("Data registrasi:", form);
    }

    return (
        <div className="max-w-md mx-auto p-6">

            <h2 className="text-3xl font-bold text-center mb-6">
                Registrasi
            </h2>

            <form
                onSubmit={handleSubmit}
                className="space-y-4"
            >

                {/* Email */}
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

                {/* Password */}
                <div>
                    <label className="block mb-1 font-medium">
                        Password
                    </label>

                    <input
                        type="password"
                        name="password"
                        placeholder="Minimal 6 karakter"
                        value={form.password}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-4 py-2"
                    />
                </div>

                {/* Konfirmasi Password */}
                <div>
                    <label className="block mb-1 font-medium">
                        Konfirmasi Password
                    </label>

                    <input
                        type="password"
                        name="konfirmasiPassword"
                        placeholder="Ulangi password"
                        value={form.konfirmasiPassword}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-4 py-2"
                    />
                </div>

                {/* Error */}
                {error && (
                    <p className="text-red-500">
                        {error}
                    </p>
                )}

                {/* Success */}
                {success && (
                    <p className="text-green-600">
                        {success}
                    </p>
                )}

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                    Daftar
                </button>

            </form>

        </div>
    );
}

export default Register;