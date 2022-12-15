import { getByTitle } from "@testing-library/react";
import { useState, useEffect } from "react";

const pages = [
    {
        id: 1,
        name: 'Báo mới'
    },
    {
        id: 2,
        name: 'Thông tin công nghệ'
    },
    {
        id: 3,
        name: 'Thông tin chính trị'
    }
]

function Content() {
    const [pageId, setPageId] = useState(1);
    const handleComment = ({detail}) => {
        console.log(detail);
    }
    useEffect(()=>{
        window.addEventListener(`page-${pageId}`,handleComment);

        return () => {
            window.removeEventListener(`page-${pageId}`,handleComment);
        }
    },[pageId])
    return (
        <>
            <ul>
                {
                    pages.map((page) => (
                        <li
                            key={page.id}
                            style={{
                                color: pageId === page.id ?
                                    'red' : 
                                    '#333',
                                fontSize: '20px'
                            }}
                            onClick={() => setPageId(page.id)}
                        >
                            {page.name}
                        </li>
                    ))
                }
            </ul>
        </>
    );
}

export default Content;