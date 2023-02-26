import type { NextComponentType } from "next";

import Link from "next/link";

const Projects: NextComponentType = () => {
    return (
        <div className="my-16 px-3 font-sen" id="projects">
            <p className="text-3xl font-bold text-white">Featured Projects</p>
            <div className="my-8 flex flex-col items-center justify-center gap-10 sm:flex-row">
                <Link href="https://github.com/mehulrao/Racecar-ML" passHref>
                    <a
                        className="h-[9rem] w-[16rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#1d1686] to-[#5E72EB] p-1 text-white duration-100 hover:scale-105"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="flex h-full w-full flex-col rounded-lg bg-primary from-[#1d1686] to-[#5E72EB] px-2 text-center font-medium hover:bg-gradient-to-r hover:text-primary">
                            <p className="pt-3 text-xl font-semibold">
                                Racecar ML
                            </p>
                            <div className="pb-3" />
                            <p className="items-center justify-center">
                                Self Driving MIT RACECAR <br />
                                Written in C# and Built Using Unity
                            </p>
                        </div>
                    </a>
                </Link>

                <Link href="https://github.com/mehulrao/Lav-U" passHref>
                    <a
                        className="h-[9rem] w-[16rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#5E72EB] to-[#FF9190] p-1 text-white duration-100 hover:scale-105"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary from-[#5E72EB] to-[#FF9190] px-2 text-center font-medium hover:bg-gradient-to-r hover:text-primary">
                            <p className="pt-3 text-xl font-semibold">LavÜ</p>
                            <div className="pb-3" />
                            <p className="items-center justify-center text-sm">
                                Back Mounted Stress Management Device <br />
                                Built at TreeHacks Using C++ and React Native
                            </p>
                        </div>
                    </a>
                </Link>

                <Link href="https://github.com/mehulrao/Chess-AI" passHref>
                    <a
                        className="h-[9rem] w-[16rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#FF9190] to-[#FDC094] p-1 text-white duration-100 hover:scale-105"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="flex h-full w-full flex-col rounded-lg bg-primary from-[#FF9190] to-[#FDC094] px-2 text-center font-medium hover:bg-gradient-to-r hover:text-primary">
                            <p className="pt-3 text-xl font-semibold">
                                Chess AI
                            </p>
                            <div className="pb-3" />
                            <p className="items-center justify-center">
                                Competitive Chess AI <br />
                                Written in Java
                            </p>
                        </div>
                    </a>
                </Link>
            </div>
        </div>
    );
};

export default Projects;
