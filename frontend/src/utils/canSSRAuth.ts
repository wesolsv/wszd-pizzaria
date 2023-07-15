import { AuthTokenError } from '@/services/errors/AuthTokenError';
import { 
    GetServerSideProps, 
    GetServerSidePropsContext,
    GetServerSidePropsResult
} from 'next';
import {parseCookies, destroyCookie} from 'nookies';

//Função para somente usuários logados terem acesso

export function canSSRAuth<P>(fn: GetServerSideProps<P>) {
    return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
      const cookies = parseCookies(ctx);
      const token = cookies['@nextauth.token'];
      // Se tentar acessar a opagina com login salvo, é redirecionado
      if (!token) {
        return {
          redirect: {
            destination: '/',
            permanent: false
          }
        }
      }

      try{
        return await fn(ctx);
      }catch(error){
        if(error instanceof AuthTokenError){
          destroyCookie(ctx,'@nextauth.token');
          return {
            redirect: {
              destination: '/',
              permanent: false
            }
          }
        }
      }
      
    }
  }