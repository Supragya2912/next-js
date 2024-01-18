 function PhotosComp({post}){

console.log(post);
    return (
        <>
            <div>
                <img src={post.url} alt={post.title} />
                <h2>{post.title}</h2>
            </div>
        </>
    );
}

export default PhotosComp