import Head from "next/head";
import styles from './styles.module.scss'
import { canSSRAuth } from "@/utils/canSSRAuth";
import { Header } from "@/components/Header";

export default function Product() {
  return (
    <>
      <Head>
        <title>Novo produto - Wszd Pizzaria</title>
      </Head>
      <div>
        <Header/>
        <main className={styles.container}>
          <h1>Novo Produto</h1>

          <form className={styles.form}>
            <select>
              <option>
                Bebidas
              </option>
              <option>
                Pizzas
              </option>
            </select>

            <input 
              type="text" 
              placeholder="Digite o nome do Produto"
              className={styles.input}
            />

            <input 
              type="text" 
              placeholder="Digite o preço"
              className={styles.input}
            />

            <textarea 
              placeholder="Digite o preço"
              className={styles.input}
            />

            <button className={styles.buttonAdd} type="submit">
              Cadastrar
            </button>
          </form>
        </main>        
      </div>
    </>
  )
}

export const getServerSideProps = canSSRAuth(async (ctx) =>{
  return {
    props: {}
  }
})