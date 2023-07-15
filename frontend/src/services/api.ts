import axios, {AxiosError} from "axios";
import {parseCookies} from 'nookies'
import { AuthTokenError } from "./errors/AuthTokenError";
import { signOut } from "@/contexts/AuthContext";

export function setupAPIClient(contexto = undefined){
    let cookies = parseCookies(contexto);

    const api = axios.create({
        baseURL: 'http://localhost:3333',
        headers: {
            Authorization:`Bearer ${cookies['@nextauth.token']}`
        }
    })

    api.interceptors.response.use(response => {
        return response;
    }, (error: AxiosError) => {
        if(!error?.response || error.response.status === 401 ){
            //Qualquer erro 401 deve deslogar
            if(typeof window !== undefined){
                // funcao para deslogar o usuario
                signOut();
            }else {
                return Promise.reject(new AuthTokenError())
            }
        }

        return Promise.reject(error);
    })

    return api;
}