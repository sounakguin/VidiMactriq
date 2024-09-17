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
        <div className="flex flex-col">
          <p className="text-[42px] w-[850px] pl-28 pt-36">
            India&#39;s leading manufacturer & importer of RO water purifier
            spare parts.
          </p>

          {/* <p className="pl-28 text-[42px] pt-16 w-[700px]">
            Trusted by Millions Worldwide
          </p> */}
        </div>
        <div className="flex pl-28 space-x-10 pt-16">
          <button className="bg-[#009FE4] text-white font-semibold py-2 px-10 rounded hover:bg-[#007AB8] transition duration-300">
            Button
          </button>
          <button className="bg-white text-black py-2 px-4 font-semibold rounded hover:bg-[#007AB8] transition duration-300">
            Product Demo
          </button>
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
