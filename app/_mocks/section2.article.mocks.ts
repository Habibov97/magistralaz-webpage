import { articlePropsTypes } from "../_types/article.types";


export default function section2Articles() :articlePropsTypes[] {
    const items: articlePropsTypes[] = [
        {
            id:1,
            title: "Təcrübəli Təlimçilər Sizə Rəhbərlik Etməyə Hazırdır",
            info: "Müəllimlərimiz peşəkar və işinə tam sadiqdir",
            img: "/stockImg1.jpg"
        },
        {
            id:2,
            title: "Sizə Uyğun Rahat Dərs Saatları Təklif Edirik",
            info: "Sizə uyğun saatlarda praktiki dərslər təklif edirik",
            img: "/stockImg2.jpg"
        },
        {
            id:3,
            title: "Hər əsin Səviyyəsinə Uygun Tam Tədris Proqramı",
            info: "Tədris proqramımızda həm əsas, həm də irəliləmiş mövzular yer alır",
            img: "/stockImg3.jpg"
        },
    ]

    return items;
}

