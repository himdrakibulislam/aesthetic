import dynamic from "next/dynamic";

const Category = dynamic(() => import("@/components/Category"), {
  loading: () => <p className="min-h-screen flex items-center justify-center ">Loading...</p>,
});
export default function Page({ category }) {
  return (
    <main className="mt-28 mb-4 lg:mx-10 mx-2">
      <div className="my-2">
        <a
          href="#"
          className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <div className="font-semibold underline">{category.name}</div>
          <span className="text-sm text-gray-500 dark:text-gray-400"></span>
        </a>
      </div>

      <Category category={category} />
    </main>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_URL + `api/category/${id}`
  );
  const category = await res.json();

  return { props: { category } };
}
