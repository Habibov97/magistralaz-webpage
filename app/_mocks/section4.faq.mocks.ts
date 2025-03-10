import { FaqTypes } from "../_types/faq.types";


export default function getFaqData() : FaqTypes[]{
    const items: FaqTypes[] = [
        {
            id:1,
            title: "Tələbə ünvandan götürülülə bilərmi?",
            answer: "Xeyr."
        },
        {
            id:2,
            title: "Tələbəyə tələbənin şəxsi avtomilində dərs keçirsinizmi?",
            answer: "Xeyr."
        },
        {
            id:3,
            title: "Bir tələbəyə hər gün ardıcıl dərs keçirsiniz?",
            answer: "Xeyr. Dərslər həftədə 3 dəfə keçirilir."
        },
        {
            id:4,
            title: "1-3-5 saatlıq tələbə qəbul edirsiniz?",
            answer: "Xeyr. Tələbə minimum 10 saatlıq qəbul edilərək sıfırdan hazırlaşdırılır."
        },
        {
            id:5,
            title: "10 saatın sonunda tələbənin tam öyrənəcəyinə zəmanət verirsiniz?",
            answer: "Xeyr. Hər tələbənin fərqli qavrama zamanı var. Tam öyrənmək üçün daha çox dərs  saatlarlarına ehtiyyac yarana bilər."
        },
        {
            id:6,
            title: "Ödənişi hissə-hissə edə bilərəm?",
            answer: "Xeyr. Ödəniş tam şəkildə və öncədən ödənilir."
        },
        {
            id:7,
            title: "Dərslər üçün sürücülük vəsiqəsi tələb olunur?",
            answer: "Xeyr."
        },
        {
            id:8,
            title: "Hər hansısa səbəbdən dərsdə iştirak edə bilmədikdə nə etməliyik?",
            answer: "Bir gün öncədən məlumat verməyiniz xahiş olunur, yoxsa gəlinməyən günün dərs saatı ekstrimal vəziyyət olmadığı təqdirdə paketinizdən silinir. (İnsan itkisi, qəza kimi hallar nəzərə alınır.)"
        },
        {
            id:9,
            title: "Hər hansısa səbəbdən dərsdə iştirak edə bilmədikdə nə etməliyik?",
            answer: "Bir gün öncədən məlumat verməyiniz xahiş olunur, yoxsa gəlinməyən günün dərs saatı ekstrimal vəziyyət olmadığı təqdirdə paketinizdən silinir. (İnsan itkisi, qəza kimi hallar nəzərə alınır.)"
        },
        {
            id:10,
            title: "Dərsdə 3-cü şəxsin iştirakına icazə verilirmi?",
            answer: "Xeyr."
        },
    ]

    return items;
}