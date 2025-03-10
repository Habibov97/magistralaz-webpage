import { StatisticTypes } from "../_types/statistic.types";

export default function getSectionStatistics() : StatisticTypes[] {
    const items: StatisticTypes[] = [
        {
            id:1,
            title: 500, // +
            desc: "Məzun Olmuş Tələbələr"
        },
        {
            id:2,
            title: 98, // faiz
            desc: "Tələbə Məmnuniyyəti"
        },
        {
            id:3,
            title: 10000, //+ km
            desc: "Saat Təcrübə Dərsləri"
        },
        {
            id:4,
            title: 95, //faiz
            desc: "İmtahandan Uğurla Keçmə Nisbəti"
        },
    ]

    return items;
}