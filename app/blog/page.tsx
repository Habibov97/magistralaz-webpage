import { Metadata } from "next";
import getBlockMocks from "../_mocks/blog.mocks";
import BlogMaterials from "../_ui/BlogMaterials";
import { montserrat } from "../layout";
import Heading from "../_ui/Heading";
import { Suspense } from "react";
import Loading from "../loading";

export const metadata: Metadata = {
    title: "Bloq"
}

export default function Page() {
    const blogdata = getBlockMocks();
    
    return (
      <section className={`${montserrat.className} bg-[url(/bg-section-layout.svg)] bg-cover bg-center px-[5vw] bg-purple-100`}>
        <div className="w-full max-w-[1200px] min-h-screen mx-auto flex flex-col pb-20">
            <Heading title="Bloq" subtitle="Dərslərimizin gedişatını aşağıdakı videolardan izləyə bilərsiniz. Daha çox video material üçün bizi sosial şəbəkələrdən izləyin."/>       
            <div className="flex flex-col gap-20">
                {blogdata.map((data) => (
                    <Suspense fallback={<Loading/>} key={data.id}>
                        <BlogMaterials key={data.id} title={data.title} videos={data.videos} />
                    </Suspense>
                ))}
            </div>
        </div>
      </section>
    );
}
