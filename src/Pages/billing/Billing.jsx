import React, { useEffect, useState } from "react";
import { Row, Col, Card, Table, Button } from "react-bootstrap";
import { ApiClient } from "../../api/ApiClient";

export const Billing = () => {
  const [billings, setBillings] = useState([]);
  const [patients, setPatients] = useState([]);
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    ApiClient.bills.all().then((res) => {
      setBillings(res);
    });
    ApiClient.patients.all().then((res) => {
      setPatients(res);
    });
    ApiClient.payments.all().then((res) => {
      setPayments(res);
    });
  }, []);
  return (
    <Row>
      <Col sm={6}>
        <Card className="rounded-0 h-100">
          <Card.Header className="d-flex justify-content-between align-items-center">
            <h3>Facturacion</h3>
          </Card.Header>
          <Card.Body>
            <Table size="sm" style={{ fontSize: 14 }} striped>
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Paciente</th>
                  <th>Descripcion</th>
                  <th>Monto</th>
                </tr>
              </thead>
              <tbody>
                {billings.map((billing, index) => {
                  return (
                    <tr key={index}>
                      <td>{new Date(billing.date).toLocaleDateString()}</td>
                      <td>{billing.patient_name}</td>
                      <td>{billing.description}</td>
                      <td>{billing.total}</td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr className="bg-dark text-white">
                  <th colSpan={3}>Total Facturado</th>
                  <th className="bg-dark text-white">
                    {billings.reduce(
                      (acc, billing) => acc + billing.totalCost,
                      0,
                    )}
                  </th>
                </tr>
              </tfoot>
            </Table>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={6}>
        <Card className="rounded-0 h-100">
          <Card.Header className="d-flex justify-content-between align-items-center">
            <h3>Cobranzas</h3>
          </Card.Header>
          <Card.Body>
            <Table size="sm" style={{ fontSize: 14 }} striped>
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Paciente</th>

                  <th>Monto</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment, index) => {
                  let patient = patients?.find(
                    (x) => x.id === payment.patient_id,
                  );
                  return (
                    <tr key={index}>
                      <td>{payment.date}</td>
                      <td>
                        {patient?.first_name} {patient?.last_name}
                      </td>
                      <td>{payment.amount}</td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr className="bg-dark text-white">
                  <th colSpan={2}>Total Cobrado</th>
                  <th className="bg-dark text-white">
                    {billings.reduce(
                      (acc, billing) => acc + billing.totalCost,
                      0,
                    )}
                  </th>
                </tr>
              </tfoot>
            </Table>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};
