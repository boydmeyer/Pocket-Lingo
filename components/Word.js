import React, { useEffect, useState } from "react";
import Option from "./Option";

function Word({ type, currentWord, selectedWord, selectOption, clickNext }) {
    const [text, setText] = useState("");
    useEffect(() => {
        if (!currentWord) return;
        if (type === 0) {
            setText(`${currentWord.english}`);
        } else if (type === 1) {
            setText(`${currentWord.traditional}`);
        }
    }, [currentWord, type]);

    return (
        <div>
            {currentWord && (
                <div className="flex flex-col space-y-4">
                    <div className="px-3 flex font-bold text-xl text-indigo-500">
                        {text}
                    </div>
                    <div className="flex flex-col space-y-2">
                        {currentWord.answers.map((option, i) => (
                            <Option
                                key={option.id}
                                type={type}
                                index={i + 1}
                                option={option}
                                currentWord={currentWord}
                                selectedWord={selectedWord}
                                selectOption={selectOption}
                            />
                        ))}
                    </div>

                    {selectedWord && (
                        <span
                            onClick={() => clickNext()}
                            className="cursor-pointer text-center font-bold rounded-lg bg-indigo-500 hover:bg-indigo-400 text-white text-sm text-semibold px-3 py-2"
                        >
                            Next
                        </span>
                    )}
                </div>
            )}
        </div>
    );
}

export default Word;
