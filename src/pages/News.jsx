import { MdKeyboardArrowRight } from "react-icons/md";
import { CardNewsCategorySide } from "../layouts/CardNewsCategorySide";
import { CardNewsInside } from "../layouts/CardNewsInside";
import { CardNewsSide } from "../layouts/CardNewsSide";
import { CardNewsCol } from "../layouts/CardNewsCol";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getNewsByCategory } from "../services/newsService";
import { formatDistanceToNow } from "date-fns";
import { id } from "date-fns/locale";
import { SkeletonLoading } from "../layouts/SkeletonLoading";


export function News() {
    const img = "https://cdn.cnnindonesia.com/cnnid/images/logo_cnn_fav.png"
    const { category } = useParams()

    const [data, setData] = useState({
        news: [],
        loading: true,
        newsUpdate: null,
        newsUpdateSide: [],
        newsUpdateInside: [],
        newsUpdateRow: [],
        newsMustRead: [],
        newsMustReadMain: [],
    })

    useEffect(() => {
        getNewsByCategory(category)
            .then(({ data }) => {
                setData({
                    news: data,
                    loading: false,
                    newsUpdate: data[0] || null,
                    newsUpdateSide: data.slice(1, 4),
                    newsUpdateInside: data.slice(4, 6),
                    newsUpdateRow: data.slice(6, 10),
                    newsMustRead: data.slice(10, 13),
                    newsMustReadMain: data[13] || null,
                })
            })
            .catch((err) => console.error(err))
    }, [])
    const { newsUpdate, loading, newsUpdateSide, newsUpdateInside, newsUpdateRow, newsMustRead, newsMustReadMain } = data;

    const timeAgo = newsUpdate?.pubDate
        ? formatDistanceToNow(new Date(newsUpdate.pubDate), {
            locale: id,
            addSuffix: true,
        }).replace("sekitar", "").replace("yang", "")
        : "";

    return (
        <div className="mt-32">
            <div className="flex gap-7 ">
                <aside className="w-1/2 space-y-2">
                    <div className="flex items-center gap-1">
                        <div className="bg-red-500 rounded-full w-6 h-6 overflow-hidden">
                            <img src={img} alt="" className="w-full h-full object-cover" />
                        </div>
                        <p className="font-semibold">CNN</p>
                    </div>
                    <div className="space-y-1">
                        <h1 className="line-clamp-2 font-semibold">{newsUpdate?.title}</h1>
                        <span className="flex gap-3 text-sm">
                            <p className="text-orange-400 font-semibold capitalize">{category}</p>
                            <p className="text-gray-400 opacity-50">|</p>
                            <p className="text-gray-400">{timeAgo}</p>
                        </span>
                    </div>
                    <div className="bg-red-500 w-full h-[288px] rounded-lg overflow-hidden">
                        <img src={newsUpdate?.image} alt="" className="w-full h-full object-cover" />
                    </div>
                </aside>
                <article className="w-1/2 space-y-2">
                    {loading ? Array.from({ length: 3 }).map((_, idx) => (
                        <SkeletonLoading
                            key={idx}
                            width="100%"
                            height="96px"
                            className="rounded-xl"
                        />
                    ))
                        : newsUpdateSide.map((item, idx) => (
                            <CardNewsCategorySide key={idx} news={item} category={category} />
                        ))}
                </article>
            </div>
            <div className="flex justify-between mt-24">
                {loading ? Array.from({ length: 2 }).map((_, idx) => (
                    <SkeletonLoading
                        key={idx}
                        width="35rem"
                        height="288px"
                        className="rounded-lg mt-6"
                    />
                ))
                    : newsUpdateInside.map((item, idx) => (
                        <CardNewsInside key={idx} news={item} category={category} />
                    ))}
            </div>
            <div className="mt-20">
                <header className="flex justify-between">
                    <h3 className="text-2xl font-semibold">Berita Terbaru</h3>
                    <span className="flex items-center gap-1 text-red-500 text-sm">
                        <p>Lihat selengkapnya</p>
                        <MdKeyboardArrowRight className="text-lg" />
                    </span>
                </header>
                <div className="flex justify-between mt-5">
                    {loading ? Array.from({ length: 4 }).map((_, idx) => (
                        <SkeletonLoading
                            key={idx}
                            width="35rem"
                            height="288px"
                            className="rounded-lg mt-6"
                        />
                    ))
                        : newsUpdateRow.map((item, idx) => (
                            <CardNewsCol className={"w-[17rem]"} heightImg={"h-40"} isHidden={true} key={idx} news={item} category={category} />
                        ))}
                </div>
            </div>

            <div className="mt-24">
                <header className="flex justify-between">
                    <h3 className="text-2xl font-semibold">Harus Baca</h3>
                    <span className="flex items-center gap-1 text-red-500 text-sm">
                        <p>Lihat selengkapnya</p>
                        <MdKeyboardArrowRight className="text-lg" />
                    </span>
                </header>
                <div className="flex gap-7 mt-5">
                    <article className="w-1/2 space-y-3">
                        {loading ? Array.from({ length: 3 }).map((_, idx) => (
                            <SkeletonLoading
                                key={idx}
                                width="144px"
                                height="100px"
                                className="rounded-lg mt-6"
                            />
                        ))
                            : newsMustRead.map((item, idx) => (
                                <CardNewsSide className={"w-36"} isBlock={true} key={idx} news={item} category={category} />
                            ))}
                    </article>
                    <aside className="w-1/2">
                        {loading ? (
                            <SkeletonLoading
                                width="100%"
                                height="236px"
                            />
                        ) : newsMustReadMain ? (
                            <CardNewsCol className={"w-full"} heightImg={"h-[236px]"} news={newsMustReadMain} category={category} />
                        ) : null}
                    </aside>
                </div>
            </div>
        </div>
    )
}