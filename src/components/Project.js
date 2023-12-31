import Image from "next/image";

const Project = ({ project }) => {
  return (
    <>
      <div className="block">
        {project.project_images && project.project_images.length > 0 && (
          <Image
            src={
              process.env.NEXT_PUBLIC_BACKEND_URL +
              project.project_images[0].image
            }
            priority={true}
            layout="responsive"
            width={1920}
            height={(9 / 16) * 1920}
            alt="img"
          />
        )}

        <p className="text-center text-2xl lg:text-4xl my-10">
          {project.location}
        </p>
        <hr className="h-px my-8 bg-gray-900 border-0 dark:bg-gray-700" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 lg:mx-10 mx-4 mb-10">
        <div className="text-gray-400">
          <p className="uppercase">The Project</p>
          <div dangerouslySetInnerHTML={{ __html: project.description }}></div>
        </div>
        <div className="text-gray-400">
          <p className="uppercase ">Information</p>
          <hr className="h-px my-2 bg-gray-900 border-0 dark:bg-gray-700" />

          <div className="flex justify-between my-4">
            <p>
              <b>LOCATION</b>
            </p>
            <p>{project.location}</p>
          </div>
          <div className="flex justify-between my-4">
            <p>
              <b>SECTOR</b>
            </p>
            <p>{project.sector}</p>
          </div>

          {project.photograph && (
            <div className="flex justify-between my-4">
              <p>
                <b>PHOTOS</b>
              </p>
              <p>{project.photograph}</p>
            </div>
          )}
        </div>
      </div>
      {project.youtube && (
        <div
          className="flex justify-center my-5"
          dangerouslySetInnerHTML={{ __html: project.youtube }}
        ></div>
      )}
      <div className="px-5 py-2 lg:px-4 lg:pt-2">
        <div className="-m-1 flex flex-wrap md:-m-2">
          {project?.project_images?.slice(1, 20)?.map((img, index) => (
            <div key={index} className="flex w-full lg:w-6/12 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <Image
                  width={1200}
                  height={800}
                  layout="responsive"
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={process.env.NEXT_PUBLIC_BACKEND_URL + img.image}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Project;