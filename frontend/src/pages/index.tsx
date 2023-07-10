import Head from "next/head";
import Image from "next/image";
import logoImg from '../../public/logo.svg';
import styles from '../../styles/Home.module.scss';
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pizzaria Wszd</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo pizzaria" />
        <div className={styles.login}>
          <form action="">
            <Input placeholder="Digite seu email" type="text" />
            <Input placeholder="Sua senha" type="password" />
            <Button type="submit" loading={false}>
              Acessar
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
