import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AlbumService from './../../services/albumService';
import Loader from './../Loader';


function Album() {
    const [state, setState] = useState({
        loading: false,
        albums: []
    });

    useEffect(() => {
        try {
            setState({ ...state, loading: true });
            async function getData() {
                let resAlbums = await AlbumService.getAlbums();
                setState({
                    ...state,
                    loading: false,
                    albums: resAlbums.data
                })
            }
            getData();
        } catch (error) {
            console.log(error);
        }
    }, [])

    const { loading, albums } = state;
    return (
        <div className="container">
            {
                loading ? <Loader /> : (
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th className='text-center'>#Id</th>
                                <th className='text-center'>Title</th>
                                <th className='text-center'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                albums.map((album) => (
                                    <tr key={album.id}>
                                        <td>{album.id}</td>
                                        <td>{album.title}</td>
                                        <td className='text-center'>
                                            <Link to={`/photos/${album.id}`}>
                                                <i role="button" className="fa fa-eye"></i>
                                            </Link>
                                        </td>
                                    </tr>
                                ))  
                            }
                        </tbody>
                    </table>
                )
            }
        </div>
    )
}

export default Album;