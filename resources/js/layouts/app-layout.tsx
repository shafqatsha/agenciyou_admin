import { Link } from "@inertiajs/react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative flex min-h-screen w-full">
            <aside className="flex w-64 flex-col border-r border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900/50">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3 px-3 py-2">
                        <div
                            className="aspect-square size-10 rounded-full bg-cover bg-center bg-no-repeat"
                            data-alt="Company Logo"
                            style={{
                                backgroundImage:
                                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuClJMG2S_KwyEJGJo2fiXyi1RZ8TRe7Sny035FzuVjtpkfQw4Q1ddBKuHsHgH79GI1_lNR70aG361HwCp8i_7dgSnsvKsBdgoCCA_DenXRNIzquJzDX2IwMyDPujNNBMGCR0tnz03Awcf7aNe5OO0u2Y8m1gcnH3yMtTvmoCwpWdWjEADD9KJumX_V5-wHJJA42nJXuaZgzSSSOAmMnJsRjxptjhmhuxFF4c0ZV5ApRQk7C2NoTO314LYWbDOUBPL0xKijlolFmqKc")',
                            }}
                        ></div>
                        <div className="flex flex-col">
                            <h1 className="text-base leading-normal font-bold text-[#1C3D5A] dark:text-white">Admin Panel</h1>
                            <p className="text-sm leading-normal font-normal text-gray-500 dark:text-gray-400">Battery Co.</p>
                        </div>
                    </div>
                    <nav className="mt-4 flex flex-col gap-2">
                        <Link
                            className="flex items-center gap-3 rounded-lg bg-primary/20 px-3 py-2 text-[#1C3D5A] dark:bg-primary/30 dark:text-white"
                            href="/"
                        >
                            <span className="material-symbols-outlined fill text-2xl">dashboard</span>
                            <p className="text-sm leading-normal font-medium">Dashboard</p>
                        </Link>
                        <Link className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800" href="/batteries">
                            <span className="material-symbols-outlined text-2xl">battery_full</span>
                            <p className="text-sm leading-normal font-medium">Batteries</p>
                        </Link>
                        <Link className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800" href="/partners">
                            <span className="material-symbols-outlined text-2xl">group</span>
                            <p className="text-sm leading-normal font-medium">Partners</p>
                        </Link>
                        <Link className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800" href="/analytics">
                            <span className="material-symbols-outlined text-2xl">analytics</span>
                            <p className="text-sm leading-normal font-medium">Analytics</p>
                        </Link>
                        <Link className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800" href="/reports">
                            <span className="material-symbols-outlined text-2xl">assessment</span>
                            <p className="text-sm leading-normal font-medium">Reports</p>
                        </Link>
                    </nav>
                </div>
                <div className="mt-auto">
                    <a className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800" href="#">
                        <span className="material-symbols-outlined text-2xl">settings</span>
                        <p className="text-sm leading-normal font-medium">Settings</p>
                    </a>
                </div>
            </aside>
            <div className="flex flex-1 flex-col">
                <header className="sticky top-0 z-10 flex items-center justify-between border-b border-solid border-gray-200 bg-white px-6 py-3 whitespace-nowrap dark:border-gray-800 dark:bg-gray-900/50">
                    <label className="flex w-full max-w-sm min-w-40 flex-col">
                        <div className="flex h-10 w-full flex-1 items-stretch rounded-lg">
                            <div className="flex items-center justify-center rounded-l-lg bg-gray-100 pr-2 pl-3 text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                                <span className="material-symbols-outlined text-xl">search</span>
                            </div>
                            <input
                                className="form-input flex h-full w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg border-none bg-gray-100 px-2 text-sm leading-normal font-normal text-[#1C3D5A] placeholder:text-gray-500 focus:ring-2 focus:ring-primary/50 focus:outline-0 dark:bg-gray-800 dark:text-gray-200 dark:placeholder:text-gray-400"
                                placeholder="Search batteries, partners..."
                                value=""
                            />
                        </div>
                    </label>
                    <div className="flex items-center gap-4">
                        <button className="flex h-10 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-4 text-sm leading-normal font-bold tracking-[0.015em] text-[#10221d] transition-opacity hover:opacity-90">
                            <span className="truncate">Add New</span>
                        </button>
                        <button className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-gray-100 text-[#1C3D5A] hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
                            <span className="material-symbols-outlined text-xl">notifications</span>
                        </button>
                        <button className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full">
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
