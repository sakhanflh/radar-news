import { useEffect, useState } from "react";
import { CardNewsSide } from "../CardNewsSide";
import { SkeletonLoading } from "../SkeletonLoading";
import { formatDistanceToNow } from "date-fns";
import { id } from "date-fns/locale";

export function Hero({ news, category }) {
    const [mainNews, setMainNews] = useState([])
    const [sideNews, setSideNews] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        if (news && news.length > 0) {
            setMainNews(news[1])
            setSideNews(news.slice(2, 6))
            setLoading(false)
        }
    }, [news])

    const timeAgo = mainNews?.pubDate
        ? formatDistanceToNow(new Date(mainNews.pubDate), {
            locale: id,
            addSuffix: true,
        }).replace("sekitar", "").replace("yang", "")
        : "";

    function handleClick() {
        if (mainNews?.link) {
            window.open(mainNews?.link, "_blank");
        } else {
            console.warn("Link berita tidak tersedia");
        }
    }

    return (
        <div className="w-full flex gap-5 mt-5 cursor-pointer " onClick={handleClick}>
            <aside className="w-2/3 relative">
                {loading ? (
                    <>
                        <SkeletonLoading className="ml-16  h-[409px] rounded-xl" />
                        <SkeletonLoading className="absolute top-10 bg-gray-100 w-80 h-52 p-4 rounded-xl" />
                    </>
                ) : (
                    <>
                        <div className="ml-16  h-[409px] rounded-xl overflow-hidden group relative ">
                            <img
                                src={mainNews.image}
                                alt={mainNews.title}
                                className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        </div>
                        <div className="absolute top-10 bg-gray-100 w-80 p-4 rounded-xl">
                            <div className="flex gap-2 items-center">
                                <span className="flex items-center gap-1">
                                    <img src={mainNews.image} alt="" className="w-6 h-6 rounded-full" />
                                    <h2 className="font-semibold">CNN</h2>
                                </span>
                                <p className="text-sm text-gray-400 opacity-50">|</p>
                                <p className="text-gray-400 text-sm">
                                    {timeAgo}
                                </p>
                            </div>
                            <h1 className="text-2xl font-semibold mt-2 line-clamp-5">{mainNews.title}</h1>
                            <p className="line-clamp-4 text-sm mt-2 text-gray-400">{mainNews.content}</p>
                            <p className="mt-2 text-xs">{mainNews.pubDate}</p>
                        </div>
                    </>
                )}
            </aside>
            <article className="w-1/3 flex flex-col gap-2">
                {loading ? Array.from({ length: 4 }).map((_, idx) => (
                    <SkeletonLoading
                        key={idx}
                        width="100%"
                        height="96px"
                        className="rounded-xl"
                    />
                ))
                    : sideNews.map((item, idx) => (
                        <CardNewsSide key={idx} news={item} category={category} />
                    ))}
            </article>
        </div>
    )
}