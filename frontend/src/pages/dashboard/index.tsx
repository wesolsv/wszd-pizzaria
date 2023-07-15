import { canSSRAuth } from "@/utils/canSSRAuth"

export default function Dashboard() {
    return (
        <div>
            <h1>Bem vindo ao Painel</h1>
        </div>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
    return {
      props: {}
    }
})