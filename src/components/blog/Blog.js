import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';

const Blog = ({data}) => {
    return (
        <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format mt-2">
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white text-justify">
                {data.title}
              </h1>

              <address className="flex items-center mb-6 not-italic">
                <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                  {data.admin?.profile ? (
                    <Image
                      layout="responsive"
                      className="mr-2 w-6 h-6 rounded-full"
                      src={
                        process.env.NEXT_PUBLIC_BACKEND_URL +
                        data?.admin.profile
                      }
                      width={100}
                      height={100}
                      alt="author"
                    />
                  ) : (
                    <FontAwesomeIcon className="me-2 h-4 w-4" icon={faUser} />
                  )}

                  <div className="">
                    <a
                      href="#"
                      rel="author"
                      className="text-lg font-semibold text-gray-900 dark:text-white"
                    >
                      {data.admin?.name}
                    </a>
                  </div>
                </div>
                <div>
                  <p className="text-base text-gray-500 dark:text-gray-400">
                    <time>
                      {new Date(data.created_at).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </p>
                </div>
              </address>
            </header>
            {data.short_description && (
              <div
                className="text-justify my-2"
                dangerouslySetInnerHTML={{ __html: data.short_description }}
              ></div>
            )}
            <figure>
              <Image
                src={process.env.NEXT_PUBLIC_BACKEND_URL + data.banner}
                layout="responsive"
                width={1500}
                height={800}
                alt="blog"
              />
              {/* <figcaption>Digital art by Anonymous</figcaption> */}
            </figure>

            <div
              className="text-justify my-2"
              dangerouslySetInnerHTML={{ __html: data.description }}
            ></div>
          </article>
    );
};

export default Blog;