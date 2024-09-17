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
          <p className="text-[42px] w-[850px] pl-28 pt-28">Contact Us</p>
          <div className="pl-28 text-[20px] pt-10 flex flex-col w-[805px] space-y-3">
            <div className="flex space-x-3 font-bold">
              <Image
                src="/images/Organization.png"
                alt="Logo"
                width={30}
                height={30}
              />
              <p>Khabya Technologies Pvt Ltd</p>
            </div>
            <div className="flex space-x-3 font-bold">
              <Image
                src="/images/Phone.png"
                alt="Logo"
                width={30}
                height={30}
              />
              <a href="tel:+919274686957">9274686957</a>
            </div>
            <div className="flex space-x-3 font-bold">
              <Image
                src="/images/Letter.png"
                alt="Logo"
                width={30}
                height={30}
              />
              <a href="mailto:support@vidi.co.in">support@vidi.co.in</a>
            </div>
            <div className="flex space-x-3 font-bold">
              <Image
                src="/images/PlaceMarker.png"
                alt="Logo"
                width={30}
                height={30}
              />
              <a
                href="https://maps.app.goo.gl/ZuTEgLVH6TZSx5A16"
                target="_blank"
                rel=""
              >
                Plot no 871, Road no 84, GIDC, Sachin, Surat, Gujarat 394230
              </a>
            </div>
          </div>
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
