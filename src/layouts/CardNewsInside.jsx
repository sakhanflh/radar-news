import { formatDistanceToNow } from "date-fns";
import { id } from "date-fns/locale";

export function CardNewsInside({ news, category }) {
    if (!news) return null
    const img = "https://cdn.cnnindonesia.com/cnnid/images/logo_cnn_fav.png"

    const timeAgo = formatDistanceToNow(new Date(news.pubDate), {
        locale: id,
        addSuffix: true,
    }).replace("sekitar", "").replace("yang", "");
    return (
        <div
            className="w-[35rem] h-72 bg-red-500 rounded-lg relative overflow-hidden"
            style={{
                backgroundImage: `url(${news.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {/* Overlay untuk readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

            {/* Content */}
            <div className="relative z-10 text-white p-6 h-full flex flex-col justify-end">
                <span className="flex gap-2 text-sm mb-2">
                    <p className="font-medium capitalize">{category}</p>
                    <p className="opacity-70">|</p>
                    <p>{timeAgo}</p>
                </span>
                <div>
                    <p className="line-clamp-2 text-lg font-semibold leading-tight">
                        {news.title}
                    </p>
                </div>
            </div>

            {/* Logo di corner */}
            <div className="absolute top-4 left-4 z-10">
                <div className="bg-white p-2 rounded-lg shadow-lg">
                    <img src={img} alt="CNN Logo" className="w-8 h-8" />
                </div>
            </div>
        </div>
    )
}