import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ContextApp = createContext();

export const useDataContext = () => {
    return useContext(ContextApp);
};

export const ContextAppProvider = ({ children }) => {

    const navigate = useNavigate();
    const [usuarioLogado, setUsuarioLogado] = useState(() => {
        const savedUser = localStorage.getItem('usuarioLogado');
        return savedUser ? JSON.parse(savedUser) : null;
    });

    useEffect(() => {
        if (usuarioLogado) {
            localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado));
        } else {
            localStorage.removeItem('usuarioLogado');
        }
    }, [usuarioLogado]);

    // Função de logout
    const handleLogout = () => {
        console.log("Logout realizado com sucesso");
        // Limpar o usuário do localStorage
        localStorage.removeItem("usuarioLogado");
        // Atualizar o estado do contexto
        setUsuarioLogado(null);
        // Redirecionar para a página de login ou outro destino
        navigate("/");
    };

    return (
        <ContextApp.Provider value={{
            usuarioLogado, handleLogout, setUsuarioLogado
        }}>
            {children}
        </ContextApp.Provider>
    );
};
