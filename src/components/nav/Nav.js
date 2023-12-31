import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../../../public/image/logo.png";
import { useRouter } from "next/router";

const Nav = () => {
  const [navbar, setNavbar] = useState(false);
  const router = useRouter();
  const navigateTo = (href) => {
    setNavbar(!navbar);
    router.push(href);
  };
  return (
    <nav
      id="nav"
      // style={{ backgroundColor: "#212121c3" }}
      className={`bg-gray-700 p-1 mt-0 fixed w-full z-10 top-0 border-gray-400 ${
        navbar ? "navbg backdrop-blur" : null
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className={`${navbar ? "hidden" : "block"}`}></div>
        <Link href="/">
          <a
            className={`flex items-center ${
              navbar ? "animate__animated animate__fadeInRightBig" : null
            }`}
          >
            <Image
              width={70}
              height={70}
              src={logo}
              layout="intrinsic"
              className="h-4 w-4 mr-1"
              alt="logo"
            />
            <span className="hidden self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              {process.env.NEXT_PUBLIC_APP_NAME}
            </span>
          </a>
        </Link>
        <button type="button" onClick={() => setNavbar(!navbar)}>
          {navbar ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 "
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
        <div
          className={`${
            navbar ? "block" : "hidden"
          } w-full flex min-h-screen flex-col items-center justify-between`}
        >
          <ul className="flex flex-col font-medium  rounded-lg ">
            <li>
              <button
                onClick={() => navigateTo("/projects")}
                className="block py-3 pl-3 pr-4 text-center  lg:text-4xl text-xl animate__animated animate__fadeInUpBig italic animate__faster font-normal navhover"
              >
                Projects
              </button>
            </li>

            <li>
              <button
                onClick={() => navigateTo("/team")}
                className="block py-3 pl-3 pr-4 text-center lg:text-4xl text-xl animate__animated animate__fadeInUpBig  italic font-normal navhover"
                aria-current="page"
              >
                Team
              </button>
            </li>

            <li>
              <button
                onClick={() => navigateTo("/blog")}
                className="block py-3 pl-3 pr-4 text-center lg:text-4xl text-xl animate__animated animate__fadeInUpBig animate__delay italic font-normal navhover"
              >
                Blog
              </button>
            </li>

            <li>
              <button
                onClick={() => navigateTo("/categories")}
                className="block py-3 pl-3 pr-4 text-center lg:text-4xl text-xl animate__animated animate__fadeInUpBig animate__delay italic font-normal navhover"
              >
                Categories
              </button>
            </li>
            <li>
              <button
                onClick={() => navigateTo("/materials")}
                className="block py-3 pl-3 pr-4 text-center lg:text-4xl text-xl animate__animated animate__fadeInUpBig animate__delay italic font-normal navhover"
              >
                Materials
              </button>
            </li>

            <li>
              <button
                onClick={() => navigateTo("/contact")}
                className="block py- pl-3 pr-4 text-center lg:text-4xl text-xl animate__animated animate__fadeInUpBig animate__delay italic font-normal navhover"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
