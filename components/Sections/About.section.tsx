import type { NextComponentType } from "next";

import Image from "next/image";
import Link from "next/link";

import { HiOutlineArrowNarrowRight } from "../Misc/Icons.collection";

const About: NextComponentType = () => {
  return (
    <div className="my-8 flex flex-row items-center justify-between px-3 font-sen">
      <div>
        <p className="text-3xl font-bold text-white">Mehul</p>
        <p className="mt-1 text-lg text-gray-300">
          Software Engineer Intern and Student
        </p>

        <p className="mt-3 text-gray-400">
          Building Web Apps and Managing Servers
        </p>
      </div>

      <div className="hidden scale-[1.3] duration-150 hover:scale-[1.5] custom:block">
        <Image
          src="/assests/avatar.svg"
          width="112"
          height="112"
          className="rounded-full"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default About;
