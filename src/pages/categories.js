import Card from "@/components/card/Card";
import Head from "next/head";
import Link from "next/link";

export default function Page({data}) {

  return (
    <main className="mx-2 lg:mx-10 mt-28 mb-4">
      <Head>
        <title>Categories</title>
      </Head>
      <div
        id="mega-menu-full-dropdown"
        className="mt-1 border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600"
      >
        <div className="">
          <ul className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
          {data.categories.map(row =>  <li key={row.id}>
              <Link href={`/category/${row.id}`}>
              <a
                href="#"
                className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div className="font-semibold underline">{row.name}</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                   
                </span>
              </a>
              </Link>
            </li>)}
          </ul>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {data.posts.map(row => <Card key={row.id} image={process.env.NEXT_PUBLIC_BACKEND_URL + row.image} title={row?.name || ""} url={`/category/${row.id}`}/>)}
          </div>
        
        </div>
      </div>
    </main>
  );
}

export async function getServerSideProps() {
    const res = await fetch(
      process.env.NEXT_PUBLIC_BACKEND_URL + "api/categories"
    );
    const data = await res.json();
  
    return { props: { data } };
  }
  