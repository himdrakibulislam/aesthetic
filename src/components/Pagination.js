import Link from "next/link";
import { useRouter } from "next/router";

const Pagination = ({ currentPage, totalPages, path }) => {
  const router = useRouter();

  return (
   <>
   {totalPages > 1 ? <ol className="flex justify-center gap-1 text-xs font-medium my-4">
      <li>
        <button
          disabled={parseInt(currentPage) === 1}
          onClick={() => router.push(`/${path}?page=${currentPage - 1}`)}
          className={`bg-gray-100 inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180 ${
            parseInt(currentPage) === 1 ? "text-gray-100" : null
          }`}
        >
          <span className="sr-only">Prev Page</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </li>
      {Array.from({ length: totalPages }).map((_, index) => (
        <Link
          key={index}
          href={`/${path}?page=${index + 1}`}
          className={
            parseInt(currentPage) === index + 1
              ? "block h-8 w-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white"
              : "block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
          }
        >
         <a > {index + 1}</a>
        </Link>
      ))}

      <li>
        <button
          disabled={parseInt(currentPage) === parseInt(totalPages)}
          onClick={() =>
            router.push(`/${path}?page=${parseInt(currentPage) + 1}`)
          }
          className={`inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180 ${
            parseInt(currentPage) === parseInt(totalPages)
              ? "text-gray-100"
              : null
          }`}
        >
          <span className="sr-only">Next Page</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </li>
    </ol> : null}
   </>
  );
};

export default Pagination;
