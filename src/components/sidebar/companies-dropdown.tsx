import { Image } from "@nextui-org/react";

interface CompaniesDropdownProps {
  name: string;
  description: string;
  logo: string;
}

export function CompaniesDropdown({
  name,
  description,
  logo,
}: CompaniesDropdownProps) {
  return (
    <div className="flex items-center gap-4">
      <Image src={logo} width={60} />
      <div className="flex flex-col gap-4">
        <h3 className="m-0 -mb-4 whitespace-nowrap text-xl font-medium text-default-900">
          {name}
        </h3>
        <span className="text-xs font-medium text-default-500">
          {description}
        </span>
      </div>
    </div>
  );
}
