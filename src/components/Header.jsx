import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Header() {
    const { user, logout } = useAuth();

    return (
        <header className="border-b p-4">

            <div className="max-w-6xl mx-auto flex justify-between items-center">

                <h1 className="text-2xl font-bold">
                    <Link to="/">
                        Minishop
                    </Link>
                </h1>

                <nav className="flex items-center gap-4">

                    <Link
                        to="/"
                        className="hover:text-blue-600"
                    >
                        Beranda
                    </Link>

                    <Link
                        to="/keranjang"
                        className="hover:text-blue-600"
                    >
                        Keranjang
                    </Link>

                    <Link
                        to="/riwayat"
                        className="hover:text-blue-600"
                    >
                        Riwayat Pesanan
                    </Link>

                    {user ? (
                        <>
                            <span className="text-sm text-gray-600">
                                {user.email}
                            </span>

                            <button
                                onClick={logout}
                                className="text-red-600 hover:text-red-800"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link
                                to="/login"
                                className="hover:text-blue-600"
                            >
                                Login
                            </Link>

                            <Link
                                to="/register"
                                className="hover:text-blue-600"
                            >
                                Register
                            </Link>
                        </>
                    )}

                </nav>

            </div>

        </header>
    );
}

export default Header;