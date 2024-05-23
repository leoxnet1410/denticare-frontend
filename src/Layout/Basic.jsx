import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { NavigationBar } from '../Pages/NavigationBar';

export const BasicLayout = () => (

  <Container fluid className='p-0'>
    <NavigationBar />
    <div className="content p-5">
      <Outlet />
    </div>

  </Container>
)
