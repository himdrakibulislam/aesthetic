import Card from "@/components/card/Card";
import MaterialReview from "@/components/modal/MaterialReview";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

export default function Page({ materials }) {
  const [modal, setModal] = useState(false);
  const [selectedData, setSelectedData] = useState({});

  return (
    <main className="mx-2 lg:mx-10 mt-28 mb-4 grid grid-cols-1 md:grid-cols-2 gap-2 lg:grid-cols-3 py-4">
      <Head>
        <title>Materials</title>
      </Head>
      {materials.map((row) => (
        <div key={row.id}>
          <div
            onClick={() => {
                setModal(true);
                setSelectedData(row);
            }}
            className={`max-w-sm bg-white border border-gray-900  shadow dark:bg-gray-800 dark:border-gray-700 `}
          >
            <a>
              <Image
                layout="responsive"
                src={process.env.NEXT_PUBLIC_BACKEND_URL + row.image}
                width={1200}
                height={800}
                alt="img"
              />
            </a>

            <div className="p-5">
              <h5 className="mb-2 text-xl font-thin tracking-tight text-gray-400 dark:text-white">
                {row.name}
              </h5>
            </div>
          </div>
        </div>
      ))}
      {modal && <MaterialReview setModal={setModal} data={selectedData} />}
    </main>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_URL + "api/materials"
  );
  const materials = await res.json();

  return { props: { materials } };
}
