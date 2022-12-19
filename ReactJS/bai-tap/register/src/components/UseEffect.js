import { useState, useRef, useEffect } from "react";
import Loader from "./Loader";

function UseEffect() {
    const [type, setType] = useState('posts');
    const tabs = useRef(['posts', 'comments', 'albums', 'photos', 'todos', 'users']);
    const [state, setState] = useState({
        loading: false,
        posts: [],
        errorMessage: ''
    })

    useEffect(() => {
        try {
            setState({
                ...state, loading: true
            });
            fetch(`https://jsonplaceholder.typicode.com/${type}`)
                .then((res) => res.json())
                .then((posts) => {
                    setState({
                        ...state,
                        posts: posts,
                        loading: false
                    })
                })
        }
        catch (error) {
            setState({
                ...state,
                errorMessage: error.message
            })
        }

    }, [type]);

    const { posts, loading, errorMessage } = state;
    return (
        <div className="container">

            {
                tabs.current.map((tab) => (
                    <button
                        key={tab}
                        style={tab === type ? {
                            color: 'white',
                            backgroundColor: '#333'
                        } :
                            {}}
                        onClick={() => setType(tab)}
                    >
                        {tab}
                    </button>
                ))
            }
            {
                loading ? <Loader /> : (
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>#ID</th>
                                <th>Title</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                posts.map((post) => (
                                    <tr key={post.id}>
                                        <td>{post.id}</td>
                                        <td>{post.title || post.name}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>)
            }

        </div>
    )
}
export default UseEffect;