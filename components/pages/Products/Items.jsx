import Link from "next/link";
import Products from "../../../components/data/Productpage/Products";
import Image from "next/image";

export default function Items() {
  return (
    <div className="mt-20 w-11/12 mx-auto">
      <div className="container px-8 ">
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
            <p className="text-lg font-semibold mb-3">Sort By</p>
            <div className="flex items-center mb-2">
              <label className="mr-2">Popularity</label>
              <input type="radio" name="sort" className="ml-32" />
            </div>

            <div className="flex items-center mb-2">
              <label className="mr-2">Price Low to High</label>
              <input type="radio" name="sort" className="ml-[73px]" />
            </div>

            <div className="flex items-center mb-2">
              <label className="mr-2">Price High to Low</label>
              <input type="radio" name="sort" className="ml-[73px]" />
            </div>

            <div className="flex items-center mb-2">
              <label className="mr-2">Alphabetical (A-Z)</label>
              <input type="radio" name="sort" className="ml-[71px]" />
            </div>

            <div className="flex items-center mb-2">
              <label className="mr-2">Alphabetical (Z-A)</label>
              <input type="radio" name="sort" className="ml-[71px]" />
            </div>
            <div className="border border-black w-56 mt-3"></div>
            <p className="pt-4 text-lg font-semibold">Features</p>
            <div className="flex items-center mb-2 mt-3">
              <label className="mr-2">Ionizer</label>
              <input type="radio" name="sort" className="ml-[151px]" />
            </div>
            <div className="flex items-center mb-2">
              <label className="mr-2">Air Quality Monitor</label>
              <input type="radio" name="sort" className="ml-[68px]" />
            </div>
            <div className="flex items-center mb-2">
              <label className="mr-2">Real Time Display</label>
              <input type="radio" name="sort" className="ml-[71px]" />
            </div>
          </div>

          {/* Products grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
            {Products.map((item) => (
              <Link key={item.id} href={`/products/${item.id}`} passHref>
                <div className="p-4 text-center cursor-pointer">
                  <Image
                    src={item.Image}
                    alt={item.Name}
                    width={293}
                    height={285}
                    style={{ objectFit: "cover" }} 
                    className="mb-4 rounded-lg"
                  />
                  <h2 className="text-xl font-semibold mb-2">{item.Name}</h2>
                  <p className="text-xs text-gray-700">{item.Description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
