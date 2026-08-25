import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="min-h-[60vh] flex flex-col justify-center items-center text-center p-6">

            <h1 className="text-6xl font-bold text-gray-800">
                404
            </h1>

            <h2 className="text-2xl font-semibold mt-4">
                Halaman Tidak Ditemukan
            </h2>

            <p className="text-gray-600 mt-2">
                Maaf, halaman yang kamu cari tidak tersedia.
            </p>

            <Link
                to="/"
                className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
            >
                Kembali ke Home
            </Link>

        </div>
    );
}

export default NotFound;