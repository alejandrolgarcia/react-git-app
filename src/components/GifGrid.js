import React from 'react';
import { useFetchGifs } from './hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);

    const { data:images, loading } = useFetchGifs( category );

    return (
        <>
            <h3 className="animate__animated animate__backInRight"> { category }</h3>

            { loading && <p className="animate__animated animate__flipInX">Loading gifs</p> }

            <div className="row">
                {
                    images.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            { ... img }
                        />
                    ))
                }
            </div>
        </>
    )
}
