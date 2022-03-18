import * as React from "react";
import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/pixel-art";
import { motion } from "framer-motion";
import { chooseNameType } from "../types";
import { names } from "../randomInfo";

const ChooseName: React.FC<chooseNameType> = ({
    HandleSetName,
    myInfo,
    setHasChooseName,
    handleSendName,
}) => {
    const handler = (): void => {
        if (myInfo.myName.length === 0) return;
        handleSendName();
        setHasChooseName(true);
    };

    const randomName = (): void => {
        const newName = names[Math.floor(Math.random() * names.length)];
        HandleSetName(newName);
    };

    const src = (elem: string): string => {
        return createAvatar(style, {
            dataUri: true,
            seed: elem,
        });
    };

    return (
        <div className="prose prose-img:m-0 dark:prose-invert m-4 mt-[15vh] rounded-lg px-3 shadow-inner">
            <div className="py-5 space-y-5 ">
                <div className="mx-2 space-y-1">
                    <h2 className="m-0 text-3xl text-center">
                        Choose Your Name
                    </h2>
                    <hr className="dark:opacity-0" />
                </div>

                <div className="flex justify-center ">
                    <div className="space-y-4">
                        <div className="flex space-x-2 ">
                            <img
                                className="self-end rounded-lg bg-slate-600/80 dark:bg-slate-600 dark:opacity-90"
                                src={src(myInfo.myName)}
                                width={70}
                                height={70}
                                alt="icon"
                            />

                            <input
                                onChange={(e) => HandleSetName(e.target.value)}
                                placeholder="Username"
                                className="w-full self-end rounded-md border-transparent bg-gray-200 px-2 py-1.5 text-xl outline-0 dark:bg-gray-300 dark:text-black dark:ring-gray-100"
                                value={
                                    myInfo.myName !== ""
                                        ? localStorage.myName
                                        : myInfo.myName
                                }
                            />
                        </div>

                        <motion.button
                            whileTap={
                                myInfo.myName === ""
                                    ? { scale: 1 }
                                    : { scale: 0.98 }
                            }
                            onClick={() => handler()}
                            className={
                                myInfo.myName !== ""
                                    ? "w-full rounded-md bg-blue-400 px-1.5 py-1 text-white shadow-md dark:bg-blue-500/90"
                                    : "w-full rounded-md bg-blue-500 py-1 px-1.5 text-white opacity-60 shadow-md  "
                            }
                        >
                            Choose Name
                        </motion.button>

                        <p onClick={() => randomName()}>Random Name</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseName;
