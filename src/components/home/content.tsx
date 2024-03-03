import { Chart } from "~/components/charts/chart";
import { CardExpenditure2 } from "~/components/home/card-expenditure2";
import { CardProducts1 } from "~/components/home/card-products1";
import { CardTransactions } from "~/components/home/card-transactions";
import { CardTransactions3 } from "~/components/home/card-transactions3";

export function Content() {
  return (
    <div className="h-full lg:px-6">
      <div className="mx-auto flex w-full max-w-[90rem] flex-wrap justify-center gap-4  px-4 pt-3 sm:pt-10 lg:px-0 xl:flex-nowrap xl:gap-6">
        <div className="mt-6 flex w-full flex-col gap-6">
          {/* Card Section Top */}
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold">Stats</h3>
            <div className="grid w-full grid-cols-1 justify-center gap-5  md:grid-cols-2 2xl:grid-cols-3">
              <CardProducts1 />
              <CardExpenditure2 />
              <CardTransactions3 />
            </div>
          </div>
          Chart
          <div className="flex h-full flex-col gap-2">
            <h3 className="text-xl font-semibold">Statistics</h3>
            <div className="w-full rounded-2xl bg-default-50 p-6 shadow-lg ">
              <Chart />
            </div>
          </div>
        </div>

        {/* Left Section */}
        <div className="mt-4 flex w-full flex-col gap-2 xl:max-w-md">
          <h3 className="text-xl font-semibold">Tansactions</h3>
          <div className="flex flex-col flex-wrap justify-center gap-4 md:flex-col md:flex-nowrap">
            <CardTransactions />
          </div>
        </div>
      </div>
    </div>
  );
}
