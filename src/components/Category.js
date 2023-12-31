import React from 'react';
import Image from "next/image";
const Category = ({category}) => {
    return (
        <>
           {category.posts?.length > 0 ? (
        <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-3 md:px-6">
          {category.posts.map((row) => (
            <div key={row.id}>
              <Image
                src={process.env.NEXT_PUBLIC_BACKEND_URL + row.image}
                className="rounded"
                width={800}
                height={500}
                alt="post"
              />
            </div>
          ))}
        </div>
      ) : (
        <div>
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-6xl">404</h3>
              <p className="font-thin">No Post Available</p>
            </div>
          </div>
        </div>
      )} 
        </>
    );
};

export default Category;