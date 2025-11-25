import React, { useState } from 'react';

const LoginPage: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div
            className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden"
            style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
        >
            <div className="layout-container flex h-full grow flex-col">
                <div className="flex flex-1 items-center justify-center p-4 sm:p-6 lg:p-8">
                    <div className="layout-content-container flex w-full max-w-4xl flex-col">
                        <div className="flex w-full flex-col overflow-hidden rounded-xl bg-white shadow-lg dark:bg-zinc-900 lg:flex-row">
                            {/* Left: Form */}
                            <div className="flex w-full flex-col justify-center p-8 sm:p-12 lg:w-1/2">
                                <div className="mb-8 flex flex-col items-center lg:items-start">
                                    <span className="material-symbols-outlined mb-3 text-5xl text-primary">
                                        solar_power
                                    </span>
                                    <p className="text-3xl font-black leading-tight tracking-[-0.033em] text-[#111827] dark:text-gray-100">
                                        Sign in to your Admin Account
                                    </p>
                                    <p className="mt-2 text-base font-normal leading-normal text-[#6B7280] dark:text-gray-400">
                                        Please enter your credentials to continue
                                    </p>
                                </div>

                                <div className="mt-6 flex flex-col gap-4">
                                    {/* Email */}
                                    <label className="flex w-full flex-col">
                                        <p className="pb-2 text-sm font-medium leading-normal text-[#111827] dark:text-gray-100">
                                            Email Address
                                        </p>
                                        <div className="flex w-full items-stretch rounded-lg border border-[#dbe6e3] bg-white text-sm dark:border-zinc-700 dark:bg-zinc-800">
                                            <input
                                                type="email"
                                                className="form-input flex h-12 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border-none bg-transparent p-[15px] pr-2 text-sm font-normal leading-normal text-[#111827] placeholder:text-[#6B7280] focus:outline-0 focus:ring-2 focus:ring-primary/50 dark:text-gray-100"
                                                placeholder="Enter your email"
                                            />
                                        </div>
                                    </label>

                                    {/* Password */}
                                    <label className="flex w-full flex-col">
                                        <p className="pb-2 text-sm font-medium leading-normal text-[#111827] dark:text-gray-100">
                                            Password
                                        </p>

                                        <div className="flex w-full items-stretch rounded-lg border border-[#dbe6e3] bg-white text-sm dark:border-zinc-700 dark:bg-zinc-800">
                                            <input
                                                type={showPassword ? 'text' : 'password'}
                                                className="form-input flex h-12 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-l-lg border-none bg-transparent p-[15px] pr-2 text-sm font-normal leading-normal text-[#111827] placeholder:text-[#6B7280] focus:outline-0 focus:ring-2 focus:ring-primary/50 dark:text-gray-100"
                                                placeholder="Enter your password"
                                            />
                                            <button
                                                type="button"
                                                className="flex items-center justify-center rounded-r-lg px-3 text-[#6B7280] hover:text-[#111827] focus:outline-none dark:text-gray-400 dark:hover:text-gray-200"
                                                onClick={() => setShowPassword((prev) => !prev)}
                                            >
                                                <span className="material-symbols-outlined text-lg">
                                                    {showPassword ? 'visibility_off' : 'visibility'}
                                                </span>
                                            </button>
                                        </div>
                                    </label>
                                </div>

                                <div className="mt-4 flex justify-end">
                                    <a
                                        className="text-sm font-medium text-primary hover:underline"
                                        href="#"
                                    >
                                        Forgot Password?
                                    </a>
                                </div>

                                <button className="mt-6 w-full rounded-lg bg-primary px-6 py-3 text-base font-bold text-background-dark transition-opacity hover:opacity-90">
                                    Login
                                </button>
                            </div>

                            {/* Right: Illustration */}
                            <div className="hidden w-1/2 items-center justify-center bg-background-light p-8 dark:bg-background-dark lg:flex">
                                <div
                                    className="aspect-square w-full rounded-xl bg-cover bg-center bg-no-repeat"
                                    data-alt="Abstract image of solar panels against a blue sky, representing renewable energy technology."
                                    style={{
                                        backgroundImage:
                                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuALHmEaCalr_WMh54bAALTzwd-KsrIDT-VM6mLeVNwALjJMmc2IzRHtdMR6oiNK9KJs2T_v4bn59OhqVoPRav2_JKI-Pe-tsOrMaKLtpE_iN1usBlpLN-Tj0oabVhlSmQz25lq_CiRJx0D75-0fyUnmpeTqz-ub6wTsaUPQLbDksu881TveStDOGrcWqTdb5CFyrxGw5wFw2-a7cYtn6y8pemPjAqInleu7gRcrIkgjEYX_uuqPZ4_EbkDVFvlfJCwsxFo7Yd6k0wU")',
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
