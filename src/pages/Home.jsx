import { useEffect, useState } from "react";
import { CardNewsCol } from "../layouts/CardNewsCol";
import { CardNewsSide } from "../layouts/CardNewsSide";
import { Hero } from "../layouts/Home/Hero"
import { MdKeyboardArrowRight } from "react-icons/md";
import { getNewsByCategory } from "../services/newsService";
import { SkeletonLoading } from "../layouts/SkeletonLoading";
import { useParams } from "react-router-dom";

export function Home() {
    const { category } = useParams()

    const [data, setData] = useState({
        news: [],
        newsUpdate: null,
        updateNews: [],
        mustReadMain: [],
        mustRead: [],
        weeklyNews: [],
        loading: true
    })

    useEffect(() => {
        getNewsByCategory("ekonomi")
            .then(({ data }) => {
                setData({
                    news: data,
                    newsUpdate: data[0] || null,
                    updateNews: data.slice(6, 9),
                    mustReadMain: data.slice(9, 10),
                    mustRead: data.slice(10, 14),
                    weeklyNews: data.slice(14, 19),
                    loading: false
                })
            })
            .catch((err) => console.error(err))
    }, [])

    const { newsUpdate, updateNews, mustReadMain, mustRead, weeklyNews, loading } = data;
    const handleClickHeader = () => newsUpdate?.link && window.open(newsUpdate.link, "_blank");

    return (
        <div className="mt-10">
            <div>
                <header className="bg-gray-100 px-5 py-3 rounded-lg cursor-pointer flex gap-1 group transition-colors" onClick={handleClickHeader}>
                    <span className="text-red-500 font-semibold group-hover:text-black">Berita Terkini:</span>
                    <h3 className="font-semibold group-hover:text-red-500">
                        {newsUpdate?.title}
                    </h3>
                </header>
                <Hero news={data.news} category={category}/>
            </div>

            {/* Latest News Section */}
            <div className="mt-20">
                <header className="flex justify-between">
                    <h3 className="text-3xl font-semibold text-red-500">Berita Terbaru</h3>
                    <span className="flex items-center gap-1 text-red-500 text-sm">
                        <p className="hover:underline cursor-pointer">Lihat selengkapnya</p>
                        <MdKeyboardArrowRight className="text-lg" />
                    </span>
                </header>
                <div className="flex justify-between mt-5">
                    {loading ? Array.from({ length: 3 }).map((_, i) => (
                        <SkeletonLoading
                            key={i}
                            width="370px"
                            height="440px"
                            className={"rounded-lg"}
                            category={category}
                        />
                    )) : updateNews.map((item, idx) => (
                        <CardNewsCol key={idx} news={item} category={category} />
                    ))}
                </div>
            </div>

            {/* Must Read Section */}
            <div className="mt-20">
                <header className="flex justify-between">
                    <h3 className="text-3xl text-red-500 font-semibold">Harus Baca</h3>
                    <span className="flex items-center gap-1 text-red-500 text-sm">
                        <p className="hover:underline cursor-pointer">Lihat selengkapnya</p>
                        <MdKeyboardArrowRight className="text-lg" />
                    </span>
                </header>
                <div className="flex gap-5 mt-5 ">
                    <div className="w-3/5 ">
                        {loading ? (
                            <SkeletonLoading
                                width="100%"
                                height="445px"
                                className={"rounded-lg"}
                            />
                        ) : mustReadMain.map((item, idx) => (
                            <CardNewsCol
                                className={"w-full"}
                                heightImg={"h-[304px]"}
                                key={idx}
                                news={item}
                            />
                        ))}
                    </div>
                    <div className="w-2/5 gap-5 flex flex-col ">
                        {loading ? Array.from({ length: 4 }).map((_, i) => (
                            <SkeletonLoading
                                key={i}
                                width="100%"
                                height="96px"
                                className={"rounded-lg"}
                            />
                        )) : mustRead.map((item, idx) => (
                            <CardNewsSide
                                key={idx}
                                news={item}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-20">
                <header className="flex justify-between">
                    <h3 className="text-3xl text-red-500 font-semibold">Sorotan Mingguan</h3>
                    <span className="flex items-center gap-1 text-red-500 text-sm">
                        <p className="hover:underline cursor-pointer">Lihat selengkapnya</p>
                        <MdKeyboardArrowRight className="text-lg" />
                    </span>
                </header>

                <div className="mt-5 flex justify-between">
                    {loading ? Array.from({ length: 5 }).map((_, i) => (
                        < SkeletonLoading
                            key={i}
                            width="208px"
                            height="310px"
                            className={"rounded-lg"}
                        />

                    ))
                        : weeklyNews.map((item, idx) => (
                            <CardNewsCol
                                className={"w-52"}
                                heightImg={"h-44"}
                                isHidden={true}
                                key={idx}
                                news={item}
                            />
                        ))}
                </div>
            </div>
        </div>
    )
}