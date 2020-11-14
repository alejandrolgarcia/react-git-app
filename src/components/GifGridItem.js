import React from 'react';

export const GifGridItem = ({ id, title, url }) => {

    return (

        <div className="animate__animated animate__backInRight">
            <div className="card">
                <img src={ url } className="img-fluid" alt={ title } />
                <div className="card-footer">
                    <small className="text-muted">
                        { title }
                    </small>
                </div>
            </div>
        </div>
    )
}
