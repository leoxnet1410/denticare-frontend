import React from 'react';
import { Row, Col, Card, Table, Button } from 'react-bootstrap';

export const Billing = () => {
  return (
    <Row>
      <Col sm={12}>
        <Card className='rounded-0'>
          <Card.Header className='d-flex justify-content-between align-items-center'>
            <h3>Facturacion</h3>
            <Button size='sm' variant='primary'>Nueva Factura</Button>
          </Card.Header>
          <Card.Body>
            <Table size='sm'>
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Descripcion</th>
                  <th>Monto</th>
                  <th>Estado</th>
                </tr>
              </thead>
            </Table>
          </Card.Body>
        </Card>
      </Col>

    </Row>
  )
}