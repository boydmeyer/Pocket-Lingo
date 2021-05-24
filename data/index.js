import chapter4 from "../data/4";
import chapter5 from "../data/5";
import chapter6 from "../data/6";

export default [
    // {
    //     number: 1,
    //     title: "Chapter 1",
    //     words: chapter5,
    // },
    // {
    //     title: "2",
    //     words: chapter5,
    // },
    // {
    //     title: "3",
    //     words: chapter5,
    // },
    {
        number: 4,
        title: "Chapter 4",
        words: chapter4,
    },
    {
        number: 5,
        title: "Chapter 5",
        words: chapter5,
    },
    // {
    //     title: "6",
    //     words: chapter6,
    // },
    {
        number: "ALL",
        title: "All chapters",
        words: [...chapter4, ...chapter5],
    },
];
