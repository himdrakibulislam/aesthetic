import Image from "next/image";
import React from "react";

const MaterialReview = ({ setModal, data }) => {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl ">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">{data.name}</h3>
              
              <button
                className=""
                onClick={() => setModal(false)}
              >
                <span className="text-2xl">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            
            <div className="w-[300px] lg:w-[580px] ">
                <div className="w-8/12 mx-auto my-4">
                <Image 
                className="rounded"
                src={process.env.NEXT_PUBLIC_BACKEND_URL + data.image}
                width={600}
                height={400}
                layout="responsive"
                alt="material"
                />
                </div>
   
                <div dangerouslySetInnerHTML={{__html: data.description}}>

                </div>
            </div>
         
            
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default MaterialReview;
