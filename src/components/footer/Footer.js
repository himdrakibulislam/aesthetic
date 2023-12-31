import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/image/logo.png";
import { useApp } from "@/context/AppProvider";

export default function Footer() {
  const data = useApp();
  
  return (
    <footer className="text-gray-50 " style={{ backgroundColor: "#212121" }}>
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/">
              <a className="flex items-center">
                <Image
                  layout="responsive"
                  width={100}
                  height={80}
                  src={Logo}
                  alt="logo"
                />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  {process.env.NEXT_PUBLIC_APP_NAME}
                </span>
              </a>
            </Link>
            <p className="mt-6">{process.env.NEXT_PUBLIC_MOTTO}</p>
            <div className="text-cyan-500">
             
                <Link href={`https://mail.google.com/mail/?view=cm&fs=1&to=${process.NEXT_PUBLIC_APP_MAIL}`} >
                <a target="_blank" className="underline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    className="w-5 h-5 inline me-2"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#4caf50"
                      d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"
                    ></path>
                    <path
                      fill="#1e88e5"
                      d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"
                    ></path>
                    <polygon
                      fill="#e53935"
                      points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"
                    ></polygon>
                    <path
                      fill="#c62828"
                      d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
                    ></path>
                    <path
                      fill="#fbc02d"
                      d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
                    ></path>
                  </svg>
                  {process.env.NEXT_PUBLIC_APP_MAIL}
                </a>
                </Link>
              

            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-2">
                  <Link href="/" className="hover:underline">
                    <a>Home</a>
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/team" className="hover:underline">
                    <a> Team</a>
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/blog" className="hover:underline">
                    <a>Blog</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-2">
                  <Link
                    href={{
                      pathname: "/projects",
                      query: { category: "residential" },
                    }}
                    className="hover:underline "
                  >
                    <a>Residential</a>
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href={{
                      pathname: "/projects",
                      query: { category: "commercial" },
                    }}
                    className="hover:underline"
                  >
                    <a>Commercial</a>
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/contact" className="hover:underline">
                    <a>Contact</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="/policy" className="hover:underline">
                    <a>Privacy Policy</a>
                  </Link>
                </li>
                <li>
                  <Link href="/policy" className="hover:underline">
                    <a>Terms &amp; Conditions</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <Link href="/" className="hover:underline">
              <a>{process.env.NEXT_PUBLIC_APP_NAME}™ </a>
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            {data?.facebook && (
               <Link
               href={data.facebook}
               className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
             >
               <a target="_blank">
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   x="0px"
                   y="0px"
                   className="w-5 h-5"
                   viewBox="0 0 48 48"
                 >
                   <path
                     fill="#039be5"
                     d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                   ></path>
                   <path
                     fill="#fff"
                     d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                   ></path>
                 </svg>
                 <span className="sr-only">Facebook page</span>
               </a>
             </Link>
            )}
            {data?.twitter && (
              <Link href={data.twitter}>
                <a
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    className="w-5 h-5"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#03A9F4"
                      d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"
                    ></path>
                  </svg>
                  <span className="sr-only">Twitter page</span>
                </a>
              </Link>
            )}
            {data?.linkedin && (
              <Link href={data.linkedin}>
                <a
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  target="_blank"
                >
                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-5 h-5"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#0288D1"
                      d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                    ></path>
                    <path
                      fill="#FFF"
                      d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                    ></path>
                  </svg>
                  <span className="sr-only">Linkedin page</span>
                </a>
              </Link>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
