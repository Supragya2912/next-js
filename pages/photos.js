    // import {getStaticProps} from 'next'
    import PhotosComp from "../components/PhotosComp";


    export default function Photos({post}){
        const firstFivePosts = post.slice(0, 5);

        // console.log(post);
        return (
            <>
                <h1>Posts</h1>
                {firstFivePosts.map((post) => (
                    <div key={post.id}>
                    
                    <PhotosComp post={post} />
                    </div>
                ))}
            </>
        );
    }
    
    export async function getStaticProps(){

        const res = await fetch('https://jsonplaceholder.typicode.com/photos')
        const post = await res.json()

        return {
            props:{
                post
            }
        }   
    }