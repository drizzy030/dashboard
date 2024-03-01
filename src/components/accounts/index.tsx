"use client";
import { Button, Input } from "@nextui-org/react";
import { AddUser } from "~/components/accounts/addUser";
import { DotsIcon } from "~/components/icons/accounts/dots-icon";
import { ExportIcon } from "~/components/icons/accounts/export-icon";
import { InfoIcon } from "~/components/icons/accounts/info-icon";
import { TrashIcon } from "~/components/icons/accounts/trash-icon";
import { SettingsIcon } from "~/components/icons/sidebar/settings-icon";
import { TableWrapper } from "~/components/table/table";

export function Accounts() {
  return (
    <div className="mx-auto my-14 flex w-full max-w-[95rem] flex-col gap-4 lg:px-6">
      <h3 className="text-xl font-semibold">All Accounts</h3>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3 md:flex-nowrap">
          <Input
            classNames={{
              input: "w-full",
              mainWrapper: "w-full",
            }}
            placeholder="Search users"
          />
          <SettingsIcon />
          <TrashIcon />
          <InfoIcon />
          <DotsIcon />
        </div>
        <div className="flex flex-row flex-wrap gap-3.5">
          <AddUser />
          <Button color="primary" startContent={<ExportIcon />}>
            Export to CSV
          </Button>
        </div>
      </div>
      <div className="mx-auto w-full max-w-[95rem]">
        <TableWrapper />
      </div>
    </div>
  );
}
