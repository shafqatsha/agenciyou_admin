import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

type AppLayoutProps = {
    children: React.ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
    const [isOpen, setIsOpen] = useState(false);
    const { url } = usePage(); // current path, e.g. "/", "/batteries", "/partners/1"

    const navLinkClass = (active: boolean) => {
        const base =
            'flex items-center gap-3 rounded-lg px-3 py-2 transition-colors';
        const activeClasses =
            'bg-primary/20 text-[#1C3D5A] dark:bg-primary/30 dark:text-white';
        const inactiveClasses =
            'text-[#1C3D5A] hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800';

        return `${base} ${active ? activeClasses : inactiveClasses}`;
    };

    return (
        <div className="relative flex min-h-screen w-full">
            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar (fixed, 100vh) */}
            <aside
                className={`
                    fixed inset-y-0 left-0 z-40
                    flex w-64 flex-col border-r border-gray-200 bg-white p-4
                    transition-transform duration-200
                    dark:border-gray-800 dark:bg-gray-900/50
                    ${isOpen ? 'translate-x-0' : '-translate-x-full'}
                    lg:translate-x-0
                `}
            >
                {/* Close Button (Mobile Only) */}
                <button
                    type="button"
                    className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 lg:hidden dark:bg-gray-800 dark:text-gray-300"
                    onClick={() => setIsOpen(false)}
                >
                    <span className="material-symbols-outlined text-2xl">close</span>
                </button>

                <div className="flex flex-1 flex-col gap-4">
                    <div className="flex items-center gap-3 px-3 py-2">
                        <div
                            className="aspect-square size-10 rounded-full bg-cover bg-center bg-no-repeat"
                            style={{
                                backgroundImage:
                                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuClJMG2S_KwyEJGJo2fiXyi1RZ8TRe7Sny035FzuVjtpkfQw4Q1ddBKuHsHgH79GI1_lNR70aG361HwCp8i_7dgSnsvKsBdgoCCA_DenXRNIzquJzDX2IwMyDPujNNBMGCR0tnz03Awcf7aNe5OO0u2Y8m1gcnH3yMtTvmoCwpWdWjEADD9KJumX_V5-wHJJA42nJXuaZgzSSSOAmMnJsRjxptjhmhuxFF4c0ZV5ApRQk7C2NoTO314LYWbDOUBPL0xKijlolFmqKc")',
                            }}
                        ></div>
                        <div className="flex flex-col">
                            <h1 className="text-base font-bold text-[#1C3D5A] dark:text-white">
                                Admin Panel
                            </h1>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                AgenciYou
                            </p>
                        </div>
                    </div>

                    {/* Nav Items */}
                    <nav className="mt-4 flex flex-col gap-2">
                        <Link
                            href="/"
                            className={navLinkClass(url === '/')}
                        >
                            <span className="material-symbols-outlined text-2xl">
                                dashboard
                            </span>
                            Dashboard
                        </Link>

                        <Link
                            href="/batteries"
                            className={navLinkClass(
                                url.startsWith('/batteries')
                            )}
                        >
                            <span className="material-symbols-outlined text-2xl">
                                battery_full
                            </span>
                            Batteries
                        </Link>

                        <Link
                            href="/partners"
                            className={navLinkClass(
                                url.startsWith('/partners')
                            )}
                        >
                            <span className="material-symbols-outlined text-2xl">
                                group
                            </span>
                            Partners
                        </Link>

                        {/* <Link
                            href="/analytics"
                            className={navLinkClass(
                                url.startsWith('/analytics')
                            )}
                        >
                            <span className="material-symbols-outlined text-2xl">
                                analytics
                            </span>
                            Analytics
                        </Link>

                        <Link
                            href="/reports"
                            className={navLinkClass(
                                url.startsWith('/reports')
                            )}
                        >
                            <span className="material-symbols-outlined text-2xl">
                                assessment
                            </span>
                            Reports
                        </Link> */}
                    </nav>
                </div>

                {/* Settings pinned at bottom */}
                <div className="mt-auto pt-4">
                    <a
                        href="#"
                        className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                        <span className="material-symbols-outlined text-2xl">
                            settings
                        </span>
                        <span className="text-sm font-medium">Settings</span>
                    </a>
                </div>
            </aside>

            {/* Main Content (pushed right by sidebar on lg+) */}
            <div className="flex flex-1 flex-col lg:ml-64">
                <header className="sticky top-0 z-20 flex items-center justify-between border-b border-gray-200 bg-white px-6 py-3 dark:border-gray-800 dark:bg-gray-900/50">
                    {/* Hamburger (Mobile Only) */}
                    <button
                        type="button"
                        className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 lg:hidden dark:bg-gray-800 dark:text-gray-300"
                        onClick={() => setIsOpen(true)}
                    >
                        <span className="material-symbols-outlined text-2xl">
                            menu
                        </span>
                    </button>

                    {/* Search Box */}
                    <label className="flex w-64 flex-col md:w-80 lg:w-96">
                        <div className="flex h-10 items-stretch rounded-lg">
                            <div className="flex items-center justify-center rounded-l-lg bg-gray-100 px-3 text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                                <span className="material-symbols-outlined text-xl">
                                    search
                                </span>
                            </div>
                            <input
                                className="form-input h-full w-full rounded-r-lg border-none bg-gray-100 px-2 text-sm text-[#1C3D5A] placeholder:text-gray-500 focus:ring-2 focus:ring-primary/50 dark:bg-gray-800 dark:text-gray-200 dark:placeholder:text-gray-400"
                                placeholder="Search batteries, partners..."
                            />
                        </div>
                    </label>

                    {/* Right Actions */}
                    <div className="flex items-center gap-4">
                        {/* <button className="flex h-10 min-w-[84px] items-center justify-center rounded-lg bg-primary px-4 text-sm font-bold text-[#10221d] hover:opacity-90">
                            Add New
                        </button>

                        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-[#1C3D5A] hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
                            <span className="material-symbols-outlined text-xl">
                                notifications
                            </span>
                        </button> */}

                        <button className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full">
                            <img
                                alt="Admin user avatar"
                                className="h-10 w-10 rounded-full object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQhSzM9u1VJ6qsNLVVYftZeuYzudHpGEjdNocvZs8j8wdvZ0l6vqWyGQgK2SFXSYb9Gf96Sm5lU0Oega1OTZACFyedsHgzFsLRRyh2W4bC2BinmdhRWbbdiPYN41UJc62O9iLTInxCX3c1qw5c9WEK83mMJ72gDzDcpSwyWu7vmJfK638uyZNhPB-CNhiVF3DpmlEsG9itVMJoDpzayV0fP7ZiTJEx3s1LjvaiEPKYmhYknf-HlVG2rr0tOsF7dIkIdbwqamuOWgI"
                            />
                        </button>
                    </div>
                </header>

                <main className="flex-1 p-6 lg:p-8">{children}</main>
            </div>
        </div>
    );
}
