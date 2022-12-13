import { useEffect, useState } from 'react';

// 1. useEffect(callback): 
// Gọi callback mỗi khi component re-render
// 2. useEffect(callback, []): 
// chỉ gọi 1 lần sau khi component mounted
// 3. useEffect(callback, [dependencies]): 
//callback sẽ được gọi lại mỗi khi dependencies thay đổi

//Callback luôn được gọi sau khi component mounted
// CleanUp function luôn được gọi trước khi component unmounted 
const tabs = ['posts', 'comments', 'albums', 'photos', 'todos', 'users'];

function Content() {
    const [posts, setPosts] = useState([]);
    const [type, setType] = useState('posts');

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then((res) => res.json())
            .then((posts) => {
                setPosts(posts);
            })
    }, [type]);


    return (
        <div>
            {
                tabs.map((tab) => (
                    <button
                        key={tab}
                        style={type === tab ? {
                            color: 'white',
                            backgroundColor: '#333'
                        } : {}}
                        onClick={() => setType(tab)}
                    >
                        {tab}
                    </button>
                ))
            }
            <table>
                <thead>
                    <th>Content</th>
                </thead>
                {posts.map((post) => (
                    <tr key={post.id}>{post.title || post.name}</tr>
                ))}
            </table>
        </div>
    )
}

export default Content;