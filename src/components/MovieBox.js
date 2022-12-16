import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const MovieBox = ({title, poster_path, vote_average, release_date, overview}) => {
    const [show,setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

  return (
    <div className='card text-center bg-secondary mb-3'>
        <div className='card-body'>
            <img className='card-img-top' src={`${API_IMG}${poster_path}`} alt={title} />
            <div className='card-body'>
                <button type='button' className='btn btn-dark' onClick={handleShow}>
                    View Details
                </button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header >
                        <Button variant="secondary" onClick={handleClose}>Back</Button>

                    </Modal.Header>
                    <Modal.Body>
                    <img className='card-img-top' style={{width: '29rem'}} src={`${API_IMG}${poster_path}`} alt={title} />
                    <h3>{title}</h3>
                    <h4>Votes Average: {vote_average}</h4>
                    <h5>Release Date: {release_date}</h5>
                    <br />
                    <h6>Overview</h6>
                    <p>{overview}</p>
                    </Modal.Body>
                </Modal>
            </div>
        </div>   
    </div>
  )
}

export default MovieBox