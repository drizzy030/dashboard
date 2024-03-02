"use client";
import {
  Input,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { Transaction } from "@prisma/client";
import { useState } from "react";

export function PaymentTable({ payments }: { payments: Transaction[] }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPayments = payments.filter((payments) =>
    payments.shop.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="space-y-3">
      <Input
        isClearable
        placeholder="Search by shop..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>ID</TableColumn>
          <TableColumn>SHOP</TableColumn>
          <TableColumn>GATEWAY</TableColumn>
          <TableColumn>CRYPTO_ADRESS</TableColumn>
          <TableColumn>CRYPTO_AMOUNT</TableColumn>
          <TableColumn>CRYPTO_CONFIRMATION_NEEDED</TableColumn>
          <TableColumn>STATUS</TableColumn>
          <TableColumn>PRICE</TableColumn>
          <TableColumn>CURRENCY</TableColumn>
          <TableColumn>CREATED AT</TableColumn>
        </TableHeader>
        <TableBody emptyContent="No payments.">
          {filteredPayments.map((payments) => (
            <TableRow key={payments.id}>
              <TableCell>{payments.id}</TableCell>
              <TableCell>{payments.shop}</TableCell>
              <TableCell>{payments.gateway}</TableCell>
              <TableCell>{payments.crypto_address}</TableCell>
              <TableCell>{payments.crypto_amount}</TableCell>
              <TableCell>{payments.crypto_confirmations_needed}</TableCell>
              <TableCell>{payments.status}</TableCell>
              <TableCell>{payments.price}</TableCell>
              <TableCell>{payments.currency}</TableCell>
              <TableCell>{payments.createdAt.toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
