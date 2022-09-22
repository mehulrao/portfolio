import { BsArrowRightShort } from "../Misc/Icons.collection";

const Skills = () => {
  return (
    <div className="my-16 px-3 font-sen text-white" id="skills">
      <p className="text-3xl font-bold text-white">Skills & Uses</p>

      <div className="text-md my-8 flex flex-col font-medium md:text-xl custom:text-lg">
        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300 ring-zinc-300 duration-150 hover:ring-2 hover:scale-105">
          <BsArrowRightShort size="30" />
          <span className="text-white">NextJS</span>
          &nbsp;as my Frontend Framework
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300 ring-zinc-300 duration-150 hover:ring-2 hover:scale-105">
          <BsArrowRightShort size="30" />
          <span className="text-white">Typescript </span>
          &nbsp;as my main language
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300 ring-zinc-300 duration-150 hover:ring-2 hover:scale-105">
          <BsArrowRightShort size="30" />
          <span className="text-white">Tailwind CSS </span>
          &nbsp;as my CSS framework
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300 ring-zinc-300 duration-150 hover:ring-2 hover:scale-105">
          <BsArrowRightShort size="30" />
          <span className="text-white">Laravel </span>
          &nbsp;as my PHP framework
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300 ring-zinc-300 duration-150 hover:ring-2 hover:scale-105">
          <BsArrowRightShort size="30" />
          <span className="text-white">Terraform </span>
          &nbsp;as my DevOPS framework
        </p>
      </div>

      <p className="text-lg font-medium text-slate-300">
        ...more skills include <span className="text-yellow-600">javascript</span>,{" "}
        <span className="text-blue-400">reactjs</span>,{" "}
        <span className="text-yellow-400">python</span>,{" "}
        <span className="text-violet-400">php</span>,{" "}
        <span className="text-orange-400">java</span>,{" "}
        <span className="text-white">and</span>{" "}
        <span className="text-purple-700">devops</span>{" "}
      </p>
    </div>
  );
};

export default Skills;
