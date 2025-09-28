import { FaSearch } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";

export function Header() {
    const categories = [
        "Nasional",
        "Ekonomi",
        "Olahraga",
        "Teknologi",
        "Hiburan",
        "Internasional",
    ];
    return (
        <header className="w-full fixed top-0 z-50">
            <header className="flex items-center justify-between bg-black h-16 px-[5%] text-sm text-white ">
                <div className="flex items-center">
                    <a href="/" className="text-2xl font-semibold">Radar<span className="text-red-500">News</span></a>
                    <ul className="flex gap-6 ml-10">
                        {categories.map((category) => (
                            <li key={category}>
                                <a href={`/berita/${category.toLowerCase()}`}>{category}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex gap-3">
                    <FaSearch />
                    <IoMdMenu />
                </div>
            </header>
        </header>
    )
}