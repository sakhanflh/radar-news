import { formatDistanceToNow } from "date-fns";
import { id } from "date-fns/locale";

export function CardNewsSide({ className, isBlock, isHidden, news, category }) {
    if (!news) return null;

    const timeAgo = formatDistanceToNow(new Date(news.pubDate), {
        locale: id,
        addSuffix: true,
    }).replace("sekitar", "").replace("yang", "");

    function handleClick() {
        if (news.link) {
            window.open(news.link, "_blank");
        } else {
            console.warn("Link berita tidak tersedia");
        }
    }

    const img = "https://cdn.cnnindonesia.com/cnnid/images/logo_cnn_fav.png"

    return (
        <div className="flex gap-2 cursor-pointer group" onClick={handleClick}>
            <aside
                className={`overflow-hidden rounded-lg ${className ? className : "w-24 h-24"}`}
            >
                <img
                    src={news.image}
                    alt=""
                    className="object-cover w-full h-full bg-gray-300 transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
            </aside>
            <article className="flex-1 min-w-0 justify-between">
                <div className={`flex gap-2 items-center ${isHidden ? "hidden" : ""}`}>
                    <span className="flex items-center gap-1">
                        <img
                            src={img}
                            alt={news.title}
                            className="w-5 h-5 rounded-full bg-gray-300"
                        />
                        <h2 className="font-semibold">CNN News</h2>
                    </span>
                    <p className="text-gray-400 text-sm opacity-20">|</p>
                    <p className="text-gray-400 text-sm">{timeAgo}</p>
                </div>
                <p className="font-semibold line-clamp-2 hover:text-red-500 transition-colors">
                    {news.title}
                </p>
                <p
                    className={`text-slate-400 line-clamp-2 text-sm ${isBlock ? "" : "hidden"
                        }`}
                >
                    {news.content}
                </p>
                <div className="flex items-center gap-1 text-sm">
                    <p className="font-semibold text-red-500">{category}</p>
                </div>
            </article>
        </div>
    );
}
