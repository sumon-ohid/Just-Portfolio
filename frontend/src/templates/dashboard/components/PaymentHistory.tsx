import * as React from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from '@mui/material';

interface PaymentRecord {
  date: string;
  amount: string;
  method: string;
  status: string;
}

const paymentData: PaymentRecord[] = [
  { date: '2025-01-15', amount: '$29.99', method: 'Visa **** 1234', status: 'Paid' },
  { date: '2024-12-15', amount: '$29.99', method: 'Visa **** 1234', status: 'Paid' },
  { date: '2024-11-15', amount: '$29.99', method: 'Visa **** 1234', status: 'Paid' },
];

const PaymentHistory: React.FC = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="body1" gutterBottom>
        Your Recent Payments:
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="payment history table">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Method</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paymentData.map((record, index) => (
              <TableRow key={index}>
                <TableCell>{record.date}</TableCell>
                <TableCell>{record.amount}</TableCell>
                <TableCell>{record.method}</TableCell>
                <TableCell>{record.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PaymentHistory;
