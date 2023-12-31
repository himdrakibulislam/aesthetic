"use client";
import Progress from "@/components/Progress";
import TeamPreview from "@/components/modal/TeamPreview";
import axios from "@/utils/axios.config";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
export default function Page({teams}) {
  
  
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [selectedData, setSelectedData] = useState({});
 
  return (
    <main className="mx-4 mt-28 lg:mx-36">
      <div className="ttt">
        <h2 className="text-6xl font-light text-center my-2 text-gray-500 ">
          Our Team
        </h2>

        <p className="text-sm text-gray-400 text-center lg:mx-28">
          We carry a unique blend of backgrounds that contribute to unique
          perspectives and innovative transformations. As with our design
          process, we are a carefully crafted team with extensive experience and
          a vibrant energy for transforming spaces.
        </p>
      </div>

      <div id="team" className="grid lg:grid-cols-3 grid-cols-2 gap-6 my-6">
        {teams.map((team) => (
          <div key={team.id} className="lg:border-e-2 p-2">
            <Image
              className="rounded-full border shadow mb-2"
              onClick={() => {
                setModal(true);
                setSelectedData(team);
              }}
              width={500}
              height={500}
              layout="responsive"
              src={
                process.env.NEXT_PUBLIC_BACKEND_URL +
                team?.profile
              }
              alt="team"
            />
            <div className="lg:flex justify-between mt-3 text-center">
              <h4 className="text-gray-600 lg:font-bold">{team.name}</h4>
              <p className="text-gray-500 font-thin">{team.designation}</p>
            </div>
          </div>
        ))}
      </div>
      {modal && <TeamPreview setModal={setModal} data={selectedData} />}
    </main>
  );
}


export async function getServerSideProps() {
  const res = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_URL + "api/team"
  );
  const data = await res.json();
  const teams = data.data;
  return { props: { teams } };
}
