import Link from 'next/link';


function PostList({ posts }) {

    return (
        <>
            <h1> List of Posts</h1>
            {
                posts.map(data => {
                    return (
                        <div key={data.id}>
                            <Link href={`posts/${data.id}`} passHref>
                            <h2>{data.title}</h2>
                            </Link>
                           
                            <hr/>
                        </div>
                    )
                })
            }
        </>
    )

}

export default PostList;

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json();


    return {
        props: {
            posts: data.slice(0, 3)
        }
    }
}