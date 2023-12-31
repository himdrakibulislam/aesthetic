import Image from "next/image";
import hero1 from "../../../public/image/hero1.jpg";
import hero2 from "../../../public/image/hero2.jpg";
import Link from "next/link";
const Hero = () => {
  return (
    <>
      <div
        style={{ width: "100%" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 "
      >
        <div>
          <Image
            property="true"
            src={hero1}
            width={1000}
            height={800}
            layout="responsive"
            alt="hero1"
          />
        </div>
        <div
          style={{ backgroundColor: "#727c80" }}
          className="flex items-center justify-center py-10"
        >
          <div className="text-gray-900">
            <h3 className="text-4xl lg:text-6xl font-entrathin text-center ">
              <span>Interior spaces,</span>
              <br />
              <span>inspired solutions.</span>
            </h3>
            <Link href="/categories" >
              <a className="underline my-6 block text-center">SEE OUR PROCESS</a>
            </Link>
          </div>
        </div>
      </div>
      {/* hero 2  */}
      <div
        style={{ width: "100%" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 "
      >
        <div
          style={{ backgroundColor: "#fd7e14" }}
          className="flex items-center justify-center py-10"
        >
          <div className="text-gray-900">
            <h3 className="text-4xl lg:text-6xl font-entrathin text-center">
              <span>Shaping your</span>
              <br />
              <span>space, together.</span>
            </h3>
            <Link href="/contact">
             <a  className="underline my-6 block text-center"> GET IN TOUCH WITH US</a>
            </Link>
          </div>
        </div>
        <div>
          <Image
            layout="responsive"
            src={hero2}
            width={1000}
            height={800}
            alt="hero1"
          />
        </div>
      </div>
    </>
  );
}
export default Hero;
