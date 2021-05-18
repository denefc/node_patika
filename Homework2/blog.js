const posts=[
    {title: 'Post Başlık 1', detail: 'Post Detay 1'} ,
    {title: 'Post Başlık 2', detail: 'Post Detay 2'} 
]

const listPosts=()=>{
    posts.map(post=>{
        console.log(post);
    })
}

// w/Promise
const addPost=(newPost)=>{
    const promise1=new Promise((res,rej)=>{
        posts.push(newPost)
        res(posts)
    })
    return promise1;
}

// listPosts();
// addPost({title: 'Post Başlık 2', detail: 'Post Detay 2'})
// .then(()=>{
//     console.log("Yeni postlar listesi")
//     listPosts();
// }).catch(err=>console.log(err));



//  w/Async - await

async function addPostAndList(post){
    try{
        await addPost(post);
        console.log("Async await ile postları dönüyoruz")
        listPosts();
    }catch(err){
        console.log(err)
    }
}

addPostAndList({title: 'Post Başlık 3', detail: 'Post Detay 3'});