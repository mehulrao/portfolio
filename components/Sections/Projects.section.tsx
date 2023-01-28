import type { NextComponentType } from "next";

import Link from "next/link";

const Projects: NextComponentType = () => {
    return (
        <div className="my-16 px-3 font-sen" id="projects">
            <p className="text-3xl font-bold text-white">Featured Projects</p>
            <div className="my-8 flex flex-col items-center justify-center gap-10 sm:flex-row">
                <Link href="https://github.com/mehulrao/Chess-AI" passHref>
                    <a
                        className="h-[7rem] w-[14rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#1d1686] to-[#5E72EB] p-1 text-white duration-100 hover:scale-105"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary from-[#1d1686] to-[#5E72EB] px-2 text-center font-medium hover:bg-gradient-to-r hover:text-primary">
                            <p className="text-xl font-semibold">Chess AI</p>
                            <p>
                                Competitive chess AI <br />
                                Written in Java
                            </p>
                        </div>
                    </a>
                </Link>

                <Link href="https://github.com/mehulrao/Racecar-ML" passHref>
                    <a
                        className="h-[7rem] w-[14rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#5E72EB] to-[#FF9190] p-1 text-white duration-100 hover:scale-105"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary from-[#5E72EB] to-[#FF9190] px-2 text-center font-medium hover:bg-gradient-to-r hover:text-primary">
                            <p className="text-xl font-semibold">Racecar ML</p>
                            <p>
                                Self Driving MIT RACECAR <br />
                                Built Using C# and Unity
                            </p>
                        </div>
                    </a>
                </Link>

                <Link href="https://github.com/mehulrao/2D-Game" passHref>
                    <a
                        className="h-[7rem] w-[14rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#FF9190] to-[#FDC094] p-1 text-white duration-100 hover:scale-105"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary from-[#FF9190] to-[#FDC094] px-2 text-center font-medium hover:bg-gradient-to-r hover:text-primary">
                            <p className="text-xl font-semibold">
                                2D Platformer Game
                            </p>
                        </div>
                    </a>
                </Link>
            </div>
        </div>
    );
};

export default Projects;
