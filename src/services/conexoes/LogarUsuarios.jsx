import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../../fireBase/FireseConfig';

export const getUsuarioFarebase = async (email, senha) => {

    const auth = getAuth();
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, senha);

        const user = userCredential.user;

        return user;
    } catch (error) {
        console.error('Erro ao autenticar usuário:', error.message);
        throw error;
    }
};
