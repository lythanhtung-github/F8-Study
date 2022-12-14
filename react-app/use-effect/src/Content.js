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
    const [showGoToTop, setShowGoToTop] = useState(false);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then((res) => res.json())
            .then((posts) => {
                setPosts(posts);
            })
    }, [type]);

    useEffect(() => {
        const handleScroll = () => {
            setShowGoToTop(window.scrollY >= 200)
        }
        window.addEventListener('scroll', handleScroll);
        console.log('add')
        return () => {
            window.removeEventListener('scroll', handleScroll);
            console.log('remove')
        }
    }, [])
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
                    <tr>
                        <th>Content</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post) => (
                        <tr key={post.id}>
                            <td>{post.title || post.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {showGoToTop && (
                <button
                    style={{
                        position: 'fixed',
                        right: '20px',
                        bottom: '20px',
                        backgroundColor: '#333',
                        color: 'white'
                    }}
                >
                    Go to top
                </button>
            )}
        </div>
    )
}

export default Content;