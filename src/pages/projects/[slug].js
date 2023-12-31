import Project from "@/components/Project";
import Card from "@/components/card/Card";
import Head from "next/head";

export default function Page({ data, projects }) {
  return (
    <div className="my-24">
      <Head>
        <title>{data.location}</title>
        <meta name="description" content={data.meta_description} />
        <meta name="keywords" content={data.meta_keywords} />
      </Head>
      <Project project={data} />
      <h3 className="text-center lg:text-4xl my-10 font-bold text-gray-400">
        More Projects
      </h3>
      <div className="lg:mx-10 mx-2 mb-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {projects
          .filter((filterProject) => filterProject.id !== data.id)
          .map((mproject) => (
            <Card
              key={mproject.id}
              url={`/projects/${mproject.slug}`}
              title={mproject.location}
              image={
                process.env.NEXT_PUBLIC_BACKEND_URL +
                mproject.project_images[0].image
              }
            />
          ))}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { slug } = context.query;
  const res = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_URL + `api/project/${slug}`
  );
  const project = await res.json();
  const { data } = project;

  const resAllProject = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_URL + "api/projects"
  );
  const allprojects = await resAllProject.json();
  const projects = allprojects.data;

  return { props: { data, projects } };
}
