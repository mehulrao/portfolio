import type { NextComponentType } from "next";

import Link from "next/link";

const Projects: NextComponentType = () => {
    return (
        <div className="my-16 px-3 font-sen" id="projects">
            <p className="text-3xl font-bold text-white">Featured Projects</p>
            <div className="my-8 flex flex-col items-center justify-center gap-10 sm:flex-row">
                <Link href="https://github.com/mehulrao/Chess-AI" passHref>
                    <a
                        className="h-[7rem] w-[14rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#D8B4FE] to-[#818CF8] p-1 text-white duration-100 hover:scale-105"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary from-[#D8B4FE] to-[#818CF8] px-2 text-center font-medium hover:bg-gradient-to-r hover:text-primary">
                            <p className="text-xl font-semibold">Chess AI</p>
                            <p>Competitive chess AI written in Java</p>
                        </div>
                    </a>
                </Link>

                <Link href="https://github.com/mehulrao/Racecar-ML" passHref>
                    <a
                        className="h-[7rem] w-[14rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#FDE68A] via-[#FCA5A5] to-[#FECACA] p-1 text-white duration-100 hover:scale-105"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary from-[#FDE68A] via-[#FCA5A5] to-[#FECACA] px-2 text-center font-medium hover:bg-gradient-to-r hover:text-primary">
                            <p className="text-xl font-semibold">Racecar ML</p>
                            <p>
                                Self Driving MIT RACECAR built using C# and
                                Unity
                            </p>
                        </div>
                    </a>
                </Link>
            </div>
        </div>
    );
};

export default Projects;
