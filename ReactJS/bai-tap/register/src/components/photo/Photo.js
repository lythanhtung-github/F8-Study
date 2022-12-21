import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Pagination from "../Pagination";
import PhotoService from './../../services/photoService';
import Loader from './../Loader';


function Photo() {
    const { albumId } = useParams();
    const [state, setState] = useState({
        loading: false,
        photos: []
    });
    const [pagination, setPagination] = useState({ page: 1, limit: 10, totalRows: 30 });
    useEffect(() => {
        try {
            setState({ ...state, loading: true });
            async function getData() {
                let resPhotos = await PhotoService.getPhotosByAlbumId(albumId);
                setState({
                    ...state,
                    loading: false,
                    photos: resPhotos.data
                })
            }
            getData();
        } catch (error) {
            console.log(error);
        }
    }, [albumId])

    function handlePageChange(newPage){
        console.log(newPage);
    }

    const { loading, photos } = state;
    return (
        <div className="container position-relative mt-2">
            <div className="">
                {
                    loading ? <Loader /> : (
                        <div className="row">
                            {
                                photos.map((photo) => (
                                    <div key={photo.id} className="col-md-2" >
                                        <img src={photo.thumbnailUrl} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <p className="card-text">{photo.title}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    )
                }
            </div>
            <Pagination 
                pagination={pagination}
                onPageChange={handlePageChange}
                />
        </div>

    )
}

export default Photo;