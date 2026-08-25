import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

import { AuthProvider } from "./context/AuthContext";
import { KeranjangProvider } from "./context/KeranjangContext";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <AuthProvider>
            <KeranjangProvider>
                <App />
            </KeranjangProvider>
        </AuthProvider>
    </StrictMode>
);