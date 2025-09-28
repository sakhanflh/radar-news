import { formatDistanceToNow } from "date-fns";
import { id } from "date-fns/locale";

export function CardNewsCategorySide({ news, category }) {
    if (!news) return null

    const img = "https://cdn.cnnindonesia.com/cnnid/images/logo_cnn_fav.png"

    const timeAgo = formatDistanceToNow(new Date(news.pubDate), {
        locale: id,
        addSuffix: true,
    }).replace("sekitar", "").replace("yang", "");

    return (
        <div className="flex gap-2">
            <article className="w-[55%] space-y-1">
                <h1 className="line-clamp-2 font-semibold">{news.title}</h1>
                <p className="line-clamp-2 text-gray-400 text-sm">{news.content}</p>
                <span className="flex gap-2 text-sm">
                    <p className="text-orange-400 font-semibold capitalize">{category}</p>
                    <p className="text-gray-400 opacity-50">|</p>
                    <p className="text-gray-400">{timeAgo}</p>
                </span>
            </article>
            <aside className="w-[45%]">
                <div className="rounded-lg h-32 overflow-hidden">
                    <img src={news.image} alt="" className="w-full h-full object-cover" />
                </div>
            </aside>
        </div>
    )
}