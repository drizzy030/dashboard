// "use client";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableColumn,
//   TableHeader,
//   TableRow,
// } from "@nextui-org/react";
// import { Product } from "@prisma/client";

// interface Props {
//   products: Product[];
// }

// export function Test({ products }: Props) {
//   return (
//     <Table aria-label="Example static collection table">
//       <TableHeader>
//         <TableColumn>ID</TableColumn>
//         <TableColumn>NAME</TableColumn>
//         <TableColumn>DESCRIPTION</TableColumn>
//         <TableColumn>PRICE</TableColumn>
//         <TableColumn>QUANTITY</TableColumn>
//         <TableColumn>TYPE</TableColumn>
//         <TableColumn>SERIALS</TableColumn>
//         <TableColumn>CREATED AT</TableColumn>
//       </TableHeader>
//       <TableBody>
//         {products.map((product) => (
//           <TableRow key={product.id}>
//             <TableCell>{product.id}</TableCell>
//             <TableCell>{product.name}</TableCell>
//             <TableCell>{product.description}</TableCell>
//             <TableCell>{product.price}</TableCell>
//             <TableCell>{product.quantity}</TableCell>
//             <TableCell>{product.type}</TableCell>
//             <TableCell>{product.serials}</TableCell>
//             <TableCell>{product.createdAt.toLocaleString()}</TableCell>
//           </TableRow>
//         ))}
//       </TableBody>
//     </Table>
//   );
// }
