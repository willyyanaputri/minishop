import { useKeranjang } from "../context/KeranjangContext";

function Keranjang() {
    const {
        items,
        hapusDariKeranjang,
        ubahJumlah
    } = useKeranjang();

    const total = items.reduce(
        (sum, p) => sum + p.price * p.quantity,
        0
    );

    return (
        <div className="max-w-5xl mx-auto p-6">

            <h2 className="text-3xl font-bold mb-6">
                Keranjang Belanja
            </h2>

            {items.length === 0 ? (
                <p className="text-gray-500">
                    Keranjang masih kosong.
                </p>
            ) : (
                <div className="space-y-4">

                    {items.map((p) => (
                        <div
                            key={p.id}
                            className="border rounded-lg p-4 flex items-center gap-4"
                        >

                            <img
                                src={p.image}
                                alt={p.title}
                                className="w-20 h-20 object-contain"
                            />

                            <div className="flex-1">
                                <h3 className="font-semibold">
                                    {p.title}
                                </h3>

                                <p>
                                    Rp{" "}
                                    {p.price.toLocaleString("id-ID")}
                                </p>

                                <div className="flex items-center gap-2 mt-2">

                                    <button
                                        onClick={() =>
                                            ubahJumlah(
                                                p.id,
                                                p.quantity - 1
                                            )
                                        }
                                        className="px-3 py-1 border rounded"
                                    >
                                        −
                                    </button>

                                    <span>
                                        {p.quantity}
                                    </span>

                                    <button
                                        onClick={() =>
                                            ubahJumlah(
                                                p.id,
                                                p.quantity + 1
                                            )
                                        }
                                        className="px-3 py-1 border rounded"
                                    >
                                        +
                                    </button>

                                </div>
                            </div>

                            <button
                                onClick={() =>
                                    hapusDariKeranjang(p.id)
                                }
                                className="text-red-500"
                            >
                                Hapus
                            </button>

                        </div>
                    ))}

                </div>
            )}

            <h3 className="text-xl font-bold mt-8">
                Total: Rp {total.toLocaleString("id-ID")}
            </h3>

        </div>
    );
}

export default Keranjang;