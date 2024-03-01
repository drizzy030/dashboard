// import { Test } from "~/components/products/table";
export async function Products() {
  return (
    <section>
      <div className="h-full lg:px-6">
        <div className="mx-auto flex w-full max-w-[90rem] flex-wrap justify-center gap-4  px-4 pt-3 sm:pt-10 lg:px-0 xl:flex-nowrap xl:gap-6">
          <div className="mt-6 flex w-full flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold">Products</h3>
              {/* <Test products={products} /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
