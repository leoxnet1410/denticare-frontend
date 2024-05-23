import React from 'react';
import { Badge } from "react-bootstrap";

export const StatusBadge = ({ status }) => {
  let classValue;
  if (status === 'Agendada') {
    classValue = 'bg-primary border-0 rounded-0'
  }
  else if (status === 'Completada') {
    classValue = 'bg-success border-0 rounded-0'
  }
  else {
    classValue = 'bg-danger border-0 rounded-0'
  }
  return (
    <Badge className={classValue}>{status}</Badge>
  )
}