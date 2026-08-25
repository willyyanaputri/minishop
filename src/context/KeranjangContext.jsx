import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const KeranjangContext = createContext();

export function KeranjangProvider({ children }) {
    const [items, setItems] = useLocalStorage("keranjang", []);

    function tambahKeranjang(produk) {
        const produkAda = items.find(
            (item) => item.id === produk.id
        );

        if (produkAda) {
            setItems(
                items.map((item) =>
                    item.id === produk.id
                        ? {
                              ...item,
                              quantity: item.quantity + 1
                          }
                        : item
                )
            );
        } else {
            setItems([
                ...items,
                {
                    ...produk,
                    quantity: 1
                }
            ]);
        }
    }

    function hapusDariKeranjang(id) {
        setItems(
            items.filter((item) => item.id !== id)
        );
    }

    function ubahJumlah(id, quantity) {
        if (quantity <= 0) {
            hapusDariKeranjang(id);
            return;
        }

        setItems(
            items.map((item) =>
                item.id === id
                    ? {
                          ...item,
                          quantity: quantity
                      }
                    : item
            )
        );
    }

    return (
        <KeranjangContext.Provider
            value={{
                items,
                tambahKeranjang,
                hapusDariKeranjang,
                ubahJumlah
            }}
        >
            {children}
        </KeranjangContext.Provider>
    );
}

export function useKeranjang() {
    return useContext(KeranjangContext);
}