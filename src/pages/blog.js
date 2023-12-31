import Progress from "@/components/Progress";
import Card from "@/components/card/Card";
import axios from "@/utils/axios.config";
import { Randomize } from "@/utils/functions";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";



export default function Page({blog}) {
  Randomize(blog);
  
  return (
    <main className="mx-2 lg:mx-10 mt-28 mb-4">
      <h2 className="text-2xl lg:text-6xl font-thin text-gray-800 my-4">
        Blog
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {blog.map((pr, index) => (
          <Card
            key={index}
            image={
              process.env.NEXT_PUBLIC_BACKEND_URL +
         
              pr?.banner
            }
            title={pr.title}
            url={`/blog/${pr.slug}`}
          />
        ))}
      </div>
    </main>
  );
}



export async function getServerSideProps() {
  const res = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_URL + "api/blog"
  );
  const data = await res.json();
  const blog = data.data;
  return { props: { blog } };
}
