import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

export function Footer() {
    return (
        <footer className="bg-black text-gray-800 mt-20">
            {/* Main Footer Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                            <p className="text-white text-3xl font-bold">Radar <span className="text-red-500">News</span></p>
                        </div>
                        <p className="text-gray-100 mb-6 max-w-md">
                            Sumber berita terpercaya dan terupdate untuk informasi terkini seputar politik, bisnis, teknologi, dan hiburan.
                        </p>
                        <div className="flex gap-4">
                            <SocialIcon href="#" icon=<FaInstagram /> />
                            <SocialIcon href="#" icon=<FaTwitter /> />
                            <SocialIcon href="#" icon=<FaFacebook /> />
                            <SocialIcon href="#" icon=<FaGithub /> />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-4 text-red-500">Kategori</h3>
                        <ul className="space-y-2">
                            <FooterLink href="#" text="Politik" />
                            <FooterLink href="#" text="Bisnis" />
                            <FooterLink href="#" text="Teknologi" />
                            <FooterLink href="#" text="Hiburan" />
                            <FooterLink href="#" text="Olahraga" />
                            <FooterLink href="#" text="Kesehatan" />
                        </ul>
                    </div>

                    {/* Company Info */}
                    <div>
                        <h3 className="font-bold text-lg mb-4 text-red-500">Perusahaan</h3>
                        <ul className="space-y-2">
                            <FooterLink href="#" text="Tentang Kami" />
                            <FooterLink href="#" text="Kontak" />
                            <FooterLink href="#" text="Karir" />
                            <FooterLink href="#" text="Privacy Policy" />
                            <FooterLink href="#" text="Terms of Service" />
                        </ul>
                    </div>
                </div>

                {/* Newsletter Subscription */}
                <div className="mt-12 pt-8 border-t border-gray-400">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
                        <div>
                            <h3 className="font-bold text-lg text-red-500">Berlangganan Newsletter</h3>
                            <p className="text-gray-100">Dapatkan update berita terbaru langsung ke email Anda</p>
                        </div>
                        <div className="flex gap-2 w-full lg:w-auto">
                            <input
                                type="email"
                                placeholder="Alamat email Anda"
                                className="px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-red-500 flex-1 lg:flex-none lg:w-64 placeholder:text-gray-100"
                            />
                            <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors font-medium">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="bg-black py-6">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-100 text-sm">
                            © 2024 NewsHub. All rights reserved.
                        </p>
                        <div className="flex gap-6 text-sm">
                            <a href="#" className="text-gray-100 hover:text-red-500 transition-colors">Privacy</a>
                            <a href="#" className="text-gray-100 hover:text-red-500 transition-colors">Terms</a>
                            <a href="#" className="text-gray-100 hover:text-red-500 transition-colors">Sitemap</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

// Component untuk Social Media Icon
function SocialIcon({ href, icon }) {
    return (
        <a
            href={href}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-lg hover:bg-red-500 hover:text-white transition-colors shadow-sm"
        >
            {icon}
        </a>
    );
}

// Component untuk Footer Link
function FooterLink({ href, text }) {
    return (
        <li>
            <a
                href={href}
                className="text-gray-100 hover:text-red-500 transition-colors duration-200"
            >
                {text}
            </a>
        </li>
    );
}