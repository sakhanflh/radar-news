import { formatDistanceToNow } from "date-fns";
import { id } from "date-fns/locale";

export function CardNewsCol({ className, heightImg, isHidden, news, category }) {
    if (!news) return null

    const timeAgo = formatDistanceToNow(new Date(news.pubDate), {
        locale: id,
        addSuffix: true,
    }).replace("sekitar", "").replace("yang", "");

    const img = "https://cdn.cnnindonesia.com/cnnid/images/logo_cnn_fav.png"
    return (
        <div className={`flex flex-col gap-2 ${className ?? "w-[23rem]"}`}>
            <aside className={`w-full overflow-hidden rounded-lg ${heightImg ? heightImg : "h-60"}`}>
                <img src={news.image} alt="" className="object-cover w-full h-full" />
            </aside>
            <article className="flex-1 min-w-0 justify-between space-y-2">
                <div className="flex gap-2 items-center">
                    <span className="flex items-center gap-1">
                        <img src={img} alt="" className="w-6 h-6 rounded-full" />
                        <h2 className="font-semibold">CNN News</h2>
                    </span>
                    <p className="text-gray-400 text-sm opacity-20">|</p>
                    <p className="text-gray-400 text-sm">{timeAgo}</p>
                </div>
                <p className="font-semibold line-clamp-3">{news.title}</p>
                <p className={`line-clamp-2 text-sm text-gray-400 ${isHidden ? "hidden" : ""}`}>{news.content}</p>
                <div className="flex items-center gap-1 text-sm ">
                    <p className="font-semibold text-red-500 capitalize">{category}</p>

                </div>
            </article>
        </div>
    )
}