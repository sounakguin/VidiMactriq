import Image from "next/image";
export default function Header() {
  return (
    <>
      <div
        className="bg-center h-[480px]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #84C2E7 5%, rgba(255, 255, 255, 0) 100%), url('/images/header.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col ">
          <p className="text-[42px] w-[850px] pl-28 pt-36">
            Join Hands with VIDI
          </p>
          <p className="pl-28 text-[24px] pt-16 w-[850px]">
            Lorem Ipsum has been the industry standard dummy text.
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
