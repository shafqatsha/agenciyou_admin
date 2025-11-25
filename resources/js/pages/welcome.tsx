import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
export default function Welcome() {
    return (
        <AppLayout>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>

            <div className="mb-6 flex flex-wrap justify-between gap-3">
                <div className="flex min-w-72 flex-col gap-1">
                    <p className="text-3xl leading-tight font-bold text-[#1C3D5A] dark:text-white">Dashboard Overview</p>
                    <p className="text-base leading-normal font-normal text-gray-500 dark:text-gray-400">
                        Welcome back, Admin! Here's a summary of your modules.
                    </p>
                </div>
            </div>
            <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col gap-2 rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900/50">
                    <p className="text-sm leading-normal font-medium text-gray-600 dark:text-gray-300">Active Partners</p>
                    <p className="text-3xl leading-tight font-bold tracking-tight text-[#1C3D5A] dark:text-white">152</p>
                    <p className="text-sm leading-normal font-medium text-[#28A745]">+2 new this month</p>
                </div>
                <div className="flex flex-col gap-2 rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900/50">
                    <p className="text-sm leading-normal font-medium text-gray-600 dark:text-gray-300">Pending Approvals</p>
                    <p className="text-3xl leading-tight font-bold tracking-tight text-[#1C3D5A] dark:text-white">3</p>
                    <p className="text-sm leading-normal font-medium text-yellow-500">Partners waiting</p>
                </div>
                <div className="flex flex-col gap-2 rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900/50">
                    <p className="text-sm leading-normal font-medium text-gray-600 dark:text-gray-300">Total Leads</p>
                    <p className="text-3xl leading-tight font-bold tracking-tight text-[#1C3D5A] dark:text-white">28</p>
                    <p className="text-sm leading-normal font-medium text-[#28A745]">+12 new this month</p>
                </div>
                <div className="flex flex-col gap-2 rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900/50">
                    <p className="text-sm leading-normal font-medium text-gray-600 dark:text-gray-300">Total Battery Products</p>
                    <p className="text-3xl leading-tight font-bold tracking-tight text-[#1C3D5A] dark:text-white">89</p>
                    <p className="text-sm leading-normal font-medium text-[#28A745]">+5 new this month</p>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900/50">
                    <div className="p-6">
                        <h3 className="text-lg font-semibold text-[#1C3D5A] dark:text-white">Battery Management</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Quick access to battery product management.</p>
                    </div>
                    <div className="flex flex-grow flex-col gap-4 p-6 pt-0">
                        <div className="flex items-center justify-between rounded-lg bg-gray-50 p-4 dark:bg-gray-800/50">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-2xl text-primary">inventory_2</span>
                                <span className="font-medium">View All Batteries</span>
                            </div>
                            <span className="material-symbols-outlined text-gray-500">arrow_forward_ios</span>
                        </div>
                        <div className="flex items-center justify-between rounded-lg bg-gray-50 p-4 dark:bg-gray-800/50">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-2xl text-primary">add_circle</span>
                                <span className="font-medium">Add New Battery</span>
                            </div>
                            <span className="material-symbols-outlined text-gray-500">arrow_forward_ios</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900/50">
                    <div className="p-6">
                        <h3 className="text-lg font-semibold text-[#1C3D5A] dark:text-white">User Management (Partners)</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Manage partner accounts and access.</p>
                    </div>
                    <div className="flex flex-grow flex-col gap-4 p-6 pt-0">
                        <div className="flex items-center justify-between rounded-lg bg-gray-50 p-4 dark:bg-gray-800/50">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-2xl text-primary">group</span>
                                <span className="font-medium">View All Partners</span>
                            </div>
                            <span className="material-symbols-outlined text-gray-500">arrow_forward_ios</span>
                        </div>
                        <div className="flex items-center justify-between rounded-lg bg-gray-50 p-4 dark:bg-gray-800/50">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-2xl text-primary">person_add</span>
                                <span className="font-medium">Pending Approvals</span>
                            </div>
                            <span className="material-symbols-outlined text-gray-500">arrow_forward_ios</span>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
