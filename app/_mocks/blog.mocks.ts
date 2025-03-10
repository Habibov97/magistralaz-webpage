import { BlogItemsTypes } from "@/app/_types/blogVideos.types";

export default function getBlockMocks() :BlogItemsTypes[]{
    const items : BlogItemsTypes[] = [
        {
            id: 1,
            title: "Ilkin vərdişlər",
            videos: [
                {
                    id: 1,
                    link: "https://www.youtube.com/watch?v=8aj6-70Dpoc",
                    title: "Tələbədə ilkin vərdişlərin formalaşdırılması."
                },
                {
                    id: 2,
                    link: "https://www.youtube.com/watch?v=BdPG2vAMaGE",
                    title: "Tələbənin marifləndirilməsi,psixoloji baxımdan hazırlanma mərhələsi."
                },
                {
                    id: 3,
                    link: "https://www.youtube.com/watch?v=XT8Gh6StWGc",
                    title: "Avtomobilin düzgün şəkildə işə salınması."
                },
                
            ]

        },
        {
            id: 2,
            title: "Geriyə hərəkət",
            videos: [
                {
                    id: 1,
                    link: "https://www.youtube.com/watch?v=L6Z3QLuG2JU",
                    title: "Geriyə hərəkət ilk dərs."
                },
                {
                    id: 2,
                    link: "https://www.youtube.com/watch?v=42Y2uEnVtRY",
                    title: "Geriyə hərəkət ikinci dərs."
                },
            ]

        },
        {
            id: 3,
            title: "Dönmə əməliyyatları",
            videos: [
                {
                    id: 1,
                    link: "https://www.youtube.com/watch?v=MT6alnzeSU4",
                    title: "Dönmə əməliyyatları. Ümumi müddəalar."
                },
                {
                    id: 2,
                    link: "https://www.youtube.com/watch?v=dOFcgEnBNbY",
                    title: "Dönmə əməliyyatları. Dar döngələr."
                },
                {
                    id: 3,
                    link: "https://www.youtube.com/watch?v=WcOu7dpJGrQ",
                    title: "Dönmə əməliyyatları. Geniş döngələr."
                },
                
            ]

        },
    ]

    return items;
}