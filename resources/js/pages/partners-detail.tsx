import AppLayout from '@/layouts/app-layout';
import { Link } from '@inertiajs/react';

export default function PartnersDetail() {
    return (
        <AppLayout>
            <div className="mx-auto max-w-7xl">
                <header className="mb-8">
                    <div className="flex flex-wrap gap-2">
                        <a className="text-sm leading-normal font-medium text-text-secondary dark:text-gray-400" href="#">
                            Admin
                        </a>
                        <span className="text-sm leading-normal font-medium text-text-secondary dark:text-gray-400">/</span>
                        <Link className="text-sm leading-normal font-medium text-text-secondary dark:text-gray-400" href="/partners">
                            Partners
                        </Link>
                        <span className="text-sm leading-normal font-medium text-text-secondary dark:text-gray-400">/</span>
                        <span className="text-navy-accent dark:text-teal-accent text-sm leading-normal font-medium">EcoPower Solutions</span>
                    </div>
                    <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex flex-col gap-1">
                            <h1 className="text-navy-accent text-4xl leading-tight font-black tracking-[-0.03em] dark:text-white">
                                EcoPower Solutions
                            </h1>
                            <div className="flex items-center gap-2">
                                <span className="relative flex h-2 w-2">
                                    <span className="bg-green-accent absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
                                    <span className="bg-green-accent relative inline-flex h-2 w-2 rounded-full"></span>
                                </span>
                                <p className="text-green-accent text-base leading-normal font-medium">Active Partner</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <button className="flex items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
                                <span className="material-symbols-outlined text-base">how_to_reg</span>
                                <span>Activate Account</span>
                            </button>
                        </div>
                    </div>
                </header>
                <div className="grid grid-cols-1 gap-8">
                    <div className="col-span-1">
                        <div className="flex w-full flex-col gap-8 rounded-xl bg-white p-6 shadow-sm dark:bg-gray-800">
                            <div className="border-b border-gray-200 pb-8 dark:border-gray-700">
                                <h3 className="text-text-primary text-lg leading-6 font-semibold dark:text-white">Company Logo</h3>
                                <div className="mt-4 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                                    <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700">
                                        <div
                                            className="h-20 w-20 rounded-md bg-cover bg-center bg-no-repeat"
                                            data-alt="EcoPower Solutions company logo"
                                            style={{
                                                backgroundImage:
                                                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA4PII-zDrVwZUTJO4X0LN7gGRQTmGgpPp8ZEv7EgqufoTmloTg2dOcFl81iYlD9OOrI4yNzNU1UwWPM1slHM4y5Q7l3qz4Yf4WYiwTAHBmWatyI5Uwb2QdnB5rGdK2uBTDCtarFybvPYbHZpelhfUvm7ul0RiGnjplDLCESdmDiP6B9Ef7wSq2a4B4UBbZthChNdhwthuTRwZQwIb41h_tVlwP1eI9UidhP789XGgvm31qSJ7plTEADKbSTYx6APqvk4046jpSd4c")',
                                            }}
                                        ></div>
                                    </div>
                                    <div>
                                        <p className="text-sm text-text-secondary dark:text-gray-400">
                                            Recommended: Square image, at least 400x400px.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="border-b border-gray-200 pb-8 dark:border-gray-700">
                                <h3 className="text-text-primary text-lg leading-6 font-semibold dark:text-white">Company Information</h3>
                                <div className="mt-4 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                                    <div>
                                        <label className="block text-sm font-medium text-text-secondary dark:text-gray-400">Company Name</label>
                                        <p className="text-text-primary mt-1 text-base font-medium dark:text-gray-200">EcoPower Solutions</p>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-text-secondary dark:text-gray-400">Owner / User Name</label>
                                        <p className="text-text-primary mt-1 text-base font-medium dark:text-gray-200">Jan Peeters</p>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-text-secondary dark:text-gray-400">Company Email</label>
                                        <p className="text-text-primary mt-1 text-base font-medium dark:text-gray-200">jan.peeters@ecopower.be</p>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-text-secondary dark:text-gray-400">
                                            Company Phone Number
                                        </label>
                                        <p className="text-text-primary mt-1 text-base font-medium dark:text-gray-200">+32 478 12 34 56</p>
                                    </div>
                                </div>
                            </div>
                            <div className="border-b border-gray-200 pb-8 dark:border-gray-700">
                                <h3 className="text-text-primary text-lg leading-6 font-semibold dark:text-white">Address</h3>
                                <div className="mt-4 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                                    <div className="sm:col-span-2">
                                        <label className="block text-sm font-medium text-text-secondary dark:text-gray-400">Street</label>
                                        <p className="text-text-primary mt-1 text-base font-medium dark:text-gray-200">Kerkstraat 10</p>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-text-secondary dark:text-gray-400">City</label>
                                        <p className="text-text-primary mt-1 text-base font-medium dark:text-gray-200">Antwerpen</p>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-text-secondary dark:text-gray-400">Postal Code</label>
                                        <p className="text-text-primary mt-1 text-base font-medium dark:text-gray-200">2000</p>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label className="block text-sm font-medium text-text-secondary dark:text-gray-400">Country</label>
                                        <p className="text-text-primary mt-1 text-base font-medium dark:text-gray-200">Belgium</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-text-primary text-lg leading-6 font-semibold dark:text-white">Business Details</h3>
                                <div className="mt-4 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                                    <div>
                                        <label className="block text-sm font-medium text-text-secondary dark:text-gray-400">GST / Tax Number</label>
                                        <p className="text-text-primary mt-1 text-base font-medium dark:text-gray-200">BE 0123.456.789</p>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-text-secondary dark:text-gray-400">
                                            Company Registration Number
                                        </label>
                                        <p className="text-text-primary mt-1 text-base font-medium dark:text-gray-200">9876543210</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
