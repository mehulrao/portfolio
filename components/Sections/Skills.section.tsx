import { BsArrowRightShort } from "../Misc/Icons.collection";

const Skills = () => {
  return (
    <div className="my-16 px-3 font-sen text-white" id="skills">
      <p className="text-3xl font-bold text-white">Skills & Uses</p>

      <div className="text-md my-8 flex flex-col font-medium custom:text-lg md:text-xl">
        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300 ring-zinc-300 duration-150 hover:scale-105 hover:ring-2">
          <BsArrowRightShort size="30" />
          <span className="text-white">Java</span>
          &nbsp;as my Main Language
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300 ring-zinc-300 duration-150 hover:scale-105 hover:ring-2">
          <BsArrowRightShort size="30" />
          <span className="text-white">AWS </span>
          &nbsp;as my Cloud Provider
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300 ring-zinc-300 duration-150 hover:scale-105 hover:ring-2">
          <BsArrowRightShort size="30" />
          <span className="text-white">NextJS </span>
          &nbsp;as my Javascript Framework
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300 ring-zinc-300 duration-150 hover:scale-105 hover:ring-2">
          <BsArrowRightShort size="30" />
          <span className="text-white">Unity </span>
          &nbsp;as my Game Development Framework
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300 ring-zinc-300 duration-150 hover:scale-105 hover:ring-2">
          <BsArrowRightShort size="30" />
          <span className="text-white">Terraform </span>
          &nbsp;as my DevOPS Framework
        </p>
      </div>

      <p className="text-lg font-medium text-slate-300">
        ...more skills include <span className="text-yellow-400">python</span>,{" "}
        <span className="text-blue-400">reactjs</span>,{" "}
        <span className="text-green-400">css</span>,{" "}
        <span className="text-purple-400">php</span>,{" "}
        <span className="text-orange-400">docker</span>,{" "}
        <span className="text-red-400">ansible</span>,{" "}
        <span className="text-white">and</span>{" "}
        <span className="text-indigo-400">wordpress</span>,{" "}
      </p>
    </div>
  );
};

export default Skills;
