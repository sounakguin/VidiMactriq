
import Image from "next/image";
export default function OurJourney() {
  return (
    <>
      <div className="mt-10 mx-auto w-11/12 pl-9 pr-6">
        <div className="flex space-x-32">
          {/* Image Section */}
          <div className="flex-shrink-0">
            <Image
              src="/images/image1.png"
              alt="Our Journey"
              width={350}
              height={350}
              style={{ objectFit: "cover" }} 
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col justify-center w-full">
            <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
            <div className="flex flex-col">
            <div className="flex">
                <Image
                  src="/images/FilledCircle.png"
                  alt="Our Journey"
                  width={10}
                  height={10}
                  style={{ objectFit: "cover" }} 
                  className="h-5 w-5 pt-1"
                />
                <p className="text-md pl-3  mb-2">
                  Guided by their vision to provide safe potable water to all,
                  VIDI ensures that their products are available at competitive
                  industry prices. To sustain its premium goods and services,
                  the company employs a strong, diversified team of over 1000
                  people globally.
                </p>
              </div>
              <div className="flex">
                <Image
                  src="/images/FilledCircle.png"
                  alt="Our Journey"
                  width={10}
                  height={10}
                  style={{ objectFit: "cover" }} 
                  className="h-5 w-5 pt-1"
                />
                <p className="text-md pl-3  mb-2">
                  Guided by their vision to provide safe potable water to all,
                  VIDI ensures that their products are available at competitive
                  industry prices. To sustain its premium goods and services,
                  the company employs a strong, diversified team of over 1000
                  people globally.
                </p>
              </div>
              <div className="flex">
                <Image
                  src="/images/FilledCircle.png"
                  alt="Our Journey"
                  width={10}
                  height={10}
                  style={{ objectFit: "cover" }} 
                  className="h-5 w-5 pt-1"
                />
                <p className="text-md pl-3  mb-2">
                  Guided by their vision to provide safe potable water to all,
                  VIDI ensures that their products are available at competitive
                  industry prices. To sustain its premium goods and services,
                  the company employs a strong, diversified team of over 1000
                  people globally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
