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
import { Product } from "@prisma/client";
import { useState } from "react";

export function ProductTable({ products }: { products: Product[] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSerials, setShowSerials] = useState(false);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="space-y-3">
      <Input
        isClearable
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>ID</TableColumn>
          <TableColumn>SHOP</TableColumn>
          <TableColumn>NAME</TableColumn>
          <TableColumn>DESCRIPTION</TableColumn>
          <TableColumn>PRICE</TableColumn>
          <TableColumn>QUANTITY</TableColumn>
          <TableColumn>TYPE</TableColumn>
          <TableColumn>SERIALS</TableColumn>
          <TableColumn>CREATED AT</TableColumn>
        </TableHeader>
        <TableBody emptyContent="No products.">
          {filteredProducts.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.id}</TableCell>
              <TableCell>{product.shop}</TableCell>
              <TableCell>{product.title}</TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{product.quantity}</TableCell>
              <TableCell>{product.type}</TableCell>
              <TableCell>
                <button onClick={() => setShowSerials(!showSerials)}>
                  {showSerials ? (
                    `${product.serial ? product.serial : "No serial found"}`
                  ) : (
                    <div className="h-6 w-12 rounded-md bg-[#1e1f22]"></div>
                  )}
                </button>
              </TableCell>
              <TableCell>{product.createdAt.toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
