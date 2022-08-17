import Link from "next/link";

export async function getStaticProps() {

    const {params} = context

    const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.todoId}`,)

    const todo = await data.json()

    return {
        props: { todo },
    }
}

export async function getStaticPaths() {

    const response = await fetch('https://jsonplaceholder.typicode.com/todos/')

    const data = await response.json()

    const paths = data.map((todo) => {
        return {
            params: {
                todoId: `${todo.id}`,
            },
        }
    })

    return { paths, fallback: false}
}



export default function todo({ todo }) {



    return (
        <>
        <Link href="/"><a>Voltar</a></Link>
        <h1>Exibindo o Todo: {todoId}</h1>
        <p>Comentário: lorem <Link href={`/toods/${todoId}/comments/1`}><a>Detalhes</a></Link></p>
        <p>Comentário: lorem <Link href={`/toods/${todoId}/comments/2`}><a>Detalhes</a></Link></p>
        <p>Comentário: lorem <Link href={`/toods/${todoId}/comments/3`}><a>Detalhes</a></Link></p>
        <p>Comentário: lorem <Link href={`/toods/${todoId}/comments/4`}><a>Detalhes</a></Link></p>

        </>
    )
}