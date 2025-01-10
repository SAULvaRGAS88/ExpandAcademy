import { createContext, useState, useContext, useEffect } from "react";

const ContextApp = createContext();

export const useDataContext = () => {
    return useContext(ContextApp);
};

export const ContextAppProvider = ({ children }) => {

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

    /** Função para atualizar os dados do contexto */
    const updateUsuario = (newData) => {
        setUsuarioLogado(newData);
    };

    return (
        <ContextApp.Provider value={{
            usuarioLogado, updateUsuario
        }}>
            {children}
        </ContextApp.Provider>
    );
};
