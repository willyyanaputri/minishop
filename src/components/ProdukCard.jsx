import { memo } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useKeranjang } from "../context/KeranjangContext";

function ProdukCard({ produk }) {
    const { tambahKeranjang } = useKeranjang();

    function handleTambahKeranjang() {
        tambahKeranjang(produk);
    }

    return (
        <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">

            <img
                src={produk.image}
                alt={produk.title}
                loading="lazy"
                decoding="async"
                className="w-full h-48 object-contain rounded"
            />

            <h2 className="text-lg font-semibold mt-3 line-clamp-2">
                {produk.title}
            </h2>

            <p className="text-gray-600 mt-2">
                Rp {produk.price.toLocaleString("id-ID")}
            </p>

            <Link
                to={`/produk/${produk.id}`}
                className="block text-center mt-3 border border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-50 transition"
            >
                Lihat Detail
            </Link>

            <Button onClick={handleTambahKeranjang}>
                Tambah ke Keranjang
            </Button>

        </div>
    );
}

export default memo(ProdukCard);