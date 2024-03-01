"use client";
import {
  Input,
  Radio,
  RadioGroup,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";

export function Payments() {
  return (
    <section>
      <div className="h-full lg:px-6">
        <div className="mx-auto flex w-full max-w-[90rem] flex-wrap justify-center gap-4  px-4 pt-3 sm:pt-10 lg:px-0 xl:flex-nowrap xl:gap-6">
          <div className="mt-6 flex w-full flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold">Payments</h3>
              <div className="flex w-full flex-wrap justify-between sm:w-[80%]">
                <Table
                  className="w-full sm:w-[72%]"
                  aria-label="Example static collection table"
                >
                  <TableHeader>
                    <TableColumn>NAME</TableColumn>
                    <TableColumn>ROLE</TableColumn>
                    <TableColumn>STATUS</TableColumn>
                  </TableHeader>
                  <TableBody>
                    <TableRow key="1">
                      <TableCell>Tony Reichert</TableCell>
                      <TableCell>CEO</TableCell>
                      <TableCell>Active</TableCell>
                    </TableRow>
                    <TableRow key="2">
                      <TableCell>Zoey Lang</TableCell>
                      <TableCell>Technical Lead</TableCell>
                      <TableCell>Paused</TableCell>
                    </TableRow>
                    <TableRow key="3">
                      <TableCell>Jane Fisher</TableCell>
                      <TableCell>Senior Developer</TableCell>
                      <TableCell>Active</TableCell>
                    </TableRow>
                    <TableRow key="4">
                      <TableCell>William Howard</TableCell>
                      <TableCell>Community Manager</TableCell>
                      <TableCell>Vacation</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <div className="hidden space-y-4 sm:block">
                  <Input
                    type="text"
                    variant="flat"
                    label="Search"
                    placeholder="Search..."
                    className="min-w-72"
                  />
                  <RadioGroup label="Time Period">
                    <Radio value="all-time">All Time</Radio>
                    <Radio value="today">Today</Radio>
                    <Radio value="this-week">This Week</Radio>
                    <Radio value="this-month">This Month</Radio>
                  </RadioGroup>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
