import { createContext, ReactNode, useState } from "react";
import { destroyCookie, setCookie, parseCookies } from 'nookies';
import Router from 'next/router';
import {api} from '../services/apiClient';

type AuthContextData = {
  user: UserProps;
  isAuthenticated: boolean;
  signIn: (credentials: SignInProps) => Promise<void>;
  signOut: () => void;
}

type UserProps = {
  id: string;
  name: string;
  email: string;
}

type SignInProps = {
  email: string;
  password: string;
}

type AuthProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData)

export function signOut() {
  try {
    destroyCookie(undefined, '@nextauth.token')
    Router.push('/')
  } catch {
    console.log('erro ao deslogar')
  }
}


export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps>({
    id: "",
    name: "",
    email: ""
  })
  const isAuthenticated = !!user;

  async function signIn({ email, password }: SignInProps) {
    try{
      const response = await api.post('/session', {
        email, password
      })
      const {id, name, token} = response.data

      setCookie(undefined, '@nextauth.token', token,{
        maxAge: 60 * 60 * 24 * 30, //expira em 1 mes
        path: "/" //quais caminhos terão acesso ao cookie
      })

      setUser({
        id,
        name,
        email
      })

      //passar para próximas requisições o token
      api.defaults.headers['Authorization'] = `Bearer ${token}`

      // Redireicionar o user para a p´roxima pagina
      Router.push('/dashboard')

    }catch(err){
      console.log("Falha no login")
    }
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}