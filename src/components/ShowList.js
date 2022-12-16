import React from 'react';
import { useState, useEffect } from 'react';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

//CSS
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

//COMPONENTS
import ShowBox from './ShowBox';

const API_KEY="<<API_KEY>>";
const API_URL_SHOWS=`https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}`;
const API_SEARCH_SHOWS=`https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}`;

const ShowList = () => {
    const [shows,setShows] = useState([]);
    const [searchTerm,setSearchTerm] = useState('');

useEffect(() => {
    fetch(API_URL_SHOWS)
    .then((response) => response.json())
    .then(data => {
      setShows(data.results);
    })
  },[])

  const searchShow = async(e) => {
    e.preventDefault();
    
    try{
      const url = `${API_SEARCH_SHOWS}&query=${searchTerm}`;
      const response = await fetch(url);
      const data = await response.json();
      
      setShows(data.results);
    } catch(error){
      console.log(error);
    }
  }

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  }


  return (
    <>
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
      <LinkContainer to='/'>
      <Navbar.Brand >Movies</Navbar.Brand>
      </LinkContainer>
      <LinkContainer to='/shows'>
        <Navbar.Brand >TV Shows</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbarScroll">
        </Navbar.Toggle>
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-3" style={{maxHeight: '100px'}} navbarScroll></Nav>
            <Form className="d-flex" onSubmit={searchShow}>
              <FormControl pattern=".{3,}" type="search" placeholder="Search" className="me-2" aria-label="search" name="searchTerm"
              value={searchTerm} onChange={handleChange} ></FormControl>
              <Button variant="secondary" type="submit">Search</Button>
            </Form>
          </Navbar.Collapse> 
      </Container>
    </Navbar>
    <div className='container'>
      <div className='grid'>
        {shows.slice(0,10).map((show) => <ShowBox key={show.id} {...show} />)}
      </div> 
    </div>
    </> 
  )
}

export default ShowList