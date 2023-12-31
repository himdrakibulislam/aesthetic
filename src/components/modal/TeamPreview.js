import Image from "next/image";
import Link from "next/link";

const  TeamPreview = ({ data, setModal }) => {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
        <button
          onClick={() => {
            setModal(false);
          }}
          className=" absolute right-12 top-12 p-1 bg-transparent border-0 text-black text-3xl leading-none font-semibold outline-none focus:outline-none"
        >
          <span className="bg-transparent text-red-600 h-6 w-6 text-6xl block outline-none focus:outline-none">
            ×
          </span>
        </button>
        <div className="relative w-my-6 mx-auto max-w-full">
          {/*content*/}

          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex justify-center items-center px-2 pt-4 mb-10">
              <div className="w-[580px] ">
                <button
                  onClick={() => {
                    setModal(false);
                  }}
                  className=" float-right lg:hidden mx-2"
                >
                  X 
                </button>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0">
                  <div className="lg:border-e-2 my-4 lg:my-2 lg:px-8 px-3">
                    <div className="w-4/12 lg:w-8/12 mx-auto my-2">
                      <Image
                        className="mx-auto rounded-full px-4"
                        layout="responsive"
                        width={400}
                        height={400}
                        src={
                          process.env.NEXT_PUBLIC_BACKEND_URL + data?.profile
                        }
                        alt="team"
                      />
                    </div>

                    <div className="text-center mt-2">
                      {data.phone && (
                        <Link
                          className="underline text-cyan-600"
                          href={"tel:" + data.phone}
                        >
                          <a>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              className="inline h-5 w-5"
                              viewBox="0 0 48 48"
                            >
                              <path
                                fill="#0f0"
                                d="M13,42h22c3.866,0,7-3.134,7-7V13c0-3.866-3.134-7-7-7H13c-3.866,0-7,3.134-7,7v22	C6,38.866,9.134,42,13,42z"
                              ></path>
                              <path
                                fill="#fff"
                                d="M35.45,31.041l-4.612-3.051c-0.563-0.341-1.267-0.347-1.836-0.017c0,0,0,0-1.978,1.153	c-0.265,0.154-0.52,0.183-0.726,0.145c-0.262-0.048-0.442-0.191-0.454-0.201c-1.087-0.797-2.357-1.852-3.711-3.205	c-1.353-1.353-2.408-2.623-3.205-3.711c-0.009-0.013-0.153-0.193-0.201-0.454c-0.037-0.206-0.009-0.46,0.145-0.726	c1.153-1.978,1.153-1.978,1.153-1.978c0.331-0.569,0.324-1.274-0.017-1.836l-3.051-4.612c-0.378-0.571-1.151-0.722-1.714-0.332	c0,0-1.445,0.989-1.922,1.325c-0.764,0.538-1.01,1.356-1.011,2.496c-0.002,1.604,1.38,6.629,7.201,12.45l0,0l0,0l0,0l0,0	c5.822,5.822,10.846,7.203,12.45,7.201c1.14-0.001,1.958-0.248,2.496-1.011c0.336-0.477,1.325-1.922,1.325-1.922	C36.172,32.192,36.022,31.419,35.45,31.041z"
                              ></path>
                            </svg>{" "}
                            <span className="underline">{data.phone}</span>
                          </a>
                        </Link>
                      )}

                      <div className="flex justify-center space-x-1 my-2">
                        {data.facebook && (
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
                        <br />
                        {data.linkedin && (
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
                        <br />
                        {data.instagram && (
                          <Link
                            className=" text-gray-600 underline"
                            href={data.instagram}
                          >
                            <a target="_blank">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                className="h-5 w-5"
                                viewBox="0 0 50 50"
                              >
                                <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
                              </svg>
                            </a>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="px-2">
                    <h3 className="lg:text-2xl font-bold">{data.name}</h3>
                    <h6 className="upprecase text-gray-600 ">
                      {data.designation}
                    </h6>
                    <div
                      dangerouslySetInnerHTML={{ __html: data.biodata }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
export default TeamPreview;
