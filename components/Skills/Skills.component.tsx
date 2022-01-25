import { BsArrowRightShort } from "react-icons/bs";

const Skills = () => {
  return (
    <div className="px-3 my-16 text-white font-sen" id="skills">
      <p className="text-3xl text-white font-bold">Skills & Uses</p>

      <div className="flex flex-col my-8 font-medium text-md custom:text-lg md:text-xl">
        <p className="text-slate-300 py-1 border-b-[0.1px] border-gray-500 flex flex-row items-center">
          <BsArrowRightShort size="30" />
          <span className="text-white">NextJS</span>
          &nbsp;as my Frontend Framework
        </p>

        <p className="text-slate-300 py-1 border-b-[0.1px] border-gray-500 flex flex-row items-center">
          <BsArrowRightShort size="30" />
          <span className="text-white">Typescript </span>
          &nbsp;as my main language
        </p>

        <p className="text-slate-300 py-1 border-b-[0.1px] border-gray-500 flex flex-row items-center">
          <BsArrowRightShort size="30" />
          <span className="text-white">Tailwind CSS </span>
          &nbsp;as my CSS framework
        </p>

        <p className="text-slate-300 py-1 border-b-[0.1px] border-gray-500 flex flex-row items-center">
          <BsArrowRightShort size="30" />
          <span className="text-white">Figma </span>
          &nbsp;as my designing tool
        </p>

        <p className="text-slate-300 py-1 border-b-[0.1px] border-gray-500 flex flex-row items-center">
          <BsArrowRightShort size="30" />
          <span className="text-white">Express JS </span>
          &nbsp;as my API framework
        </p>
      </div>

      <p className="text-slate-300 font-medium text-lg">
        ...more skills include <span className="text-white">javascript</span>,{" "}
        <span className="text-white">reactjs</span>,{" "}
        <span className="text-white">fastapi </span>{" "}
      </p>
    </div>
  );
};

export default Skills;