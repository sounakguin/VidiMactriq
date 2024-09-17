import Image from "next/image";
export default function Header() {
  return (
    <>
      <div
        className="bg-center h-[550px]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #84C2E7 5%, rgba(255, 255, 255, 0) 100%), url('/images/header.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col ">
          <p className="text-[42px] w-[850px] pl-28 pt-36">About Us</p>
          <p className="pl-28 text-[20px] pt-10  w-[805px]">
            VIDI- Khabya Technologies Pvt. Ltd. is one of the most recognized
            and trusted brands nationally for the manufacture, distribution,
            supply and trading of Reverse Osmosis (RO) components such as
            Domestic RO Booster Pumps, RO Inline Filters, RO Membrane, RO
            Housing, RO Spun Filter and many other spare parts.
          </p>
        </div>
      </div>
      <div className="relative">
        <div className="absolute -bottom-28 left-0 w-full h-[300px] overflow-hidden">
          <Image
            src="/images/vector.png"
            alt="Vector Curve"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </>
  );
}
