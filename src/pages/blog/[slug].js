// import Blog from "@/components/blog/Blog";
import Head from "next/head";
import dynamic from 'next/dynamic'
 
const Blog = dynamic(() => import('@/components/blog/Blog'), {
  loading: () => <p className="min-h-screen flex items-center justify-center ">Loading...</p>,
})


export default function Page({ data }) {
  return (
    <>
      <main className="mt-28 mb-4">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <Head>
            <title>{data.title}</title>
            <meta name="description" content={data.meta_description} />
            <meta name="keywords" content={data.meta_keywords} />
          </Head>
          <Blog data={data}/>
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const { slug } = context.query;
  const res = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_URL + `api/blog/${slug}`
  );
  const info = await res.json();
  const { data } = info;
  return { props: { data } };
}
