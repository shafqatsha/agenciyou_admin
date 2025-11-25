import AppLayout from '@/layouts/app-layout';
import React from 'react';
import { Link } from '@inertiajs/react';


const BatteriesListPage: React.FC = () => {
    return (
        <AppLayout>
            <main className="flex-1">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex flex-col gap-1">
                            <h1 className="text-3xl leading-tight font-bold text-heading dark:text-gray-100">Battery Management</h1>
                            <p className="text-base leading-normal font-normal text-text-secondary">Manage all battery products in the inventory.</p>
                        </div>
                        <Link
                            href="/batteries/create"
                            className="shadow-soft flex h-11 min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg bg-primary px-5 text-sm leading-normal font-bold tracking-wide text-white transition-colors hover:bg-primary/90"
                        >
                            <span className="material-symbols-outlined">add</span>
                            Add New Battery
                        </Link>
                    </div>
                    <div className="shadow-soft mb-6 rounded-lg bg-surface-light p-4 dark:bg-surface-dark">
                        <div className="flex flex-col gap-4 md:flex-row">
                            <div className="flex-grow">
                                <label className="flex h-11 w-full min-w-40 flex-col">
                                    <div className="flex h-full w-full flex-1 items-stretch rounded-lg">
                                        <div className="flex items-center justify-center rounded-l-lg border border-r-0 border-border-light bg-background-light pl-3 text-text-secondary dark:border-border-dark dark:bg-background-dark">
                                            <span className="material-symbols-outlined text-xl">search</span>
                                        </div>
                                        <input
                                            className="form-input flex h-full w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg rounded-l-none border border-l-0 border-border-light bg-background-light px-4 pl-2 text-sm leading-normal font-normal text-text-main placeholder:text-text-secondary focus:ring-2 focus:ring-primary/50 focus:outline-none dark:border-border-dark dark:bg-background-dark dark:text-gray-200"
                                            placeholder="Search by model, brand..."
                                            value=""
                                        />
                                    </div>
                                </label>
                            </div>
                            <div className="flex items-center gap-3">
                                <button className="flex h-11 shrink-0 items-center justify-center gap-x-2 rounded-lg border border-border-light bg-background-light px-4 transition-colors hover:border-primary/50 dark:border-border-dark dark:bg-background-dark">
                                    <p className="text-sm leading-normal font-medium text-text-secondary">Filter by Status</p>
                                    <span className="material-symbols-outlined text-xl text-text-secondary">expand_more</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="shadow-soft overflow-hidden rounded-lg bg-surface-light dark:bg-surface-dark">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm text-text-secondary">
                                <thead className="bg-background-light text-xs text-text-secondary uppercase dark:bg-background-dark">
                                    <tr>
                                        <th className="p-4" scope="col">
                                            <div className="flex items-center">
                                                <input
                                                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary focus:ring-2 focus:ring-primary dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary"
                                                    id="checkbox-all"
                                                    type="checkbox"
                                                />
                                                <label className="sr-only" htmlFor="checkbox-all">
                                                    checkbox
                                                </label>
                                            </div>
                                        </th>
                                        <th className="px-6 py-3" scope="col">
                                            Battery Model
                                        </th>
                                        <th className="px-6 py-3" scope="col">
                                            Brand
                                        </th>
                                        <th className="px-6 py-3" scope="col">
                                            Capacity (kWh)
                                        </th>
                                        <th className="px-6 py-3" scope="col">
                                            Status
                                        </th>
                                        <th className="px-6 py-3" scope="col">
                                            Price (€)
                                        </th>
                                        <th className="px-6 py-3" scope="col">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b bg-surface-light hover:bg-gray-50 dark:border-border-dark dark:bg-surface-dark dark:hover:bg-gray-800/50">
                                        <td className="w-4 p-4">
                                            <div className="flex items-center">
                                                <input
                                                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary focus:ring-2 focus:ring-primary dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary"
                                                    id="checkbox-table-1"
                                                    type="checkbox"
                                                />
                                                <label className="sr-only" htmlFor="checkbox-table-1">
                                                    checkbox
                                                </label>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 font-medium whitespace-nowrap text-text-main dark:text-white">PowerWall X</td>
                                        <td className="px-6 py-4">ElectroCharge</td>
                                        <td className="px-6 py-4">13.5</td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center">
                                                <span className="bg-success/10 text-success inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium">
                                                    <span className="bg-success inline-block size-1.5 rounded-full"></span>Active
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">6,500.00</td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-1">
                                                <Link href={`/batteries/1`} className="p-2 text-text-secondary transition-colors hover:text-primary" title="View Details">
                                                    <span className="material-symbols-outlined">visibility</span>
                                                </Link>
                                                <button className="p-2 text-text-secondary transition-colors hover:text-primary" title="Edit Battery">
                                                    <span className="material-symbols-outlined">edit</span>
                                                </button>
                                                <button
                                                    className="p-2 text-text-secondary transition-colors hover:text-red-500"
                                                    title="Delete Battery"
                                                >
                                                    <span className="material-symbols-outlined">delete</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="border-b bg-surface-light hover:bg-gray-50 dark:border-border-dark dark:bg-surface-dark dark:hover:bg-gray-800/50">
                                        <td className="w-4 p-4">
                                            <div className="flex items-center">
                                                <input
                                                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary focus:ring-2 focus:ring-primary dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary"
                                                    id="checkbox-table-2"
                                                    type="checkbox"
                                                />
                                                <label className="sr-only" htmlFor="checkbox-table-2">
                                                    checkbox
                                                </label>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 font-medium whitespace-nowrap text-text-main dark:text-white">HomeBattery 2</td>
                                        <td className="px-6 py-4">SunPower</td>
                                        <td className="px-6 py-4">10.0</td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center">
                                                <span className="bg-success/10 text-success inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium">
                                                    <span className="bg-success inline-block size-1.5 rounded-full"></span>Active
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">5,200.00</td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-1">
                                                <button className="p-2 text-text-secondary transition-colors hover:text-primary" title="View Details">
                                                    <span className="material-symbols-outlined">visibility</span>
                                                </button>
                                                <button className="p-2 text-text-secondary transition-colors hover:text-primary" title="Edit Battery">
                                                    <span className="material-symbols-outlined">edit</span>
                                                </button>
                                                <button
                                                    className="p-2 text-text-secondary transition-colors hover:text-red-500"
                                                    title="Delete Battery"
                                                >
                                                    <span className="material-symbols-outlined">delete</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="border-b bg-surface-light hover:bg-gray-50 dark:border-border-dark dark:bg-surface-dark dark:hover:bg-gray-800/50">
                                        <td className="w-4 p-4">
                                            <div className="flex items-center">
                                                <input
                                                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary focus:ring-2 focus:ring-primary dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary"
                                                    id="checkbox-table-3"
                                                    type="checkbox"
                                                />
                                                <label className="sr-only" htmlFor="checkbox-table-3">
                                                    checkbox
                                                </label>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 font-medium whitespace-nowrap text-text-main dark:text-white">EnergyBank Pro</td>
                                        <td className="px-6 py-4">Volt-Storage</td>
                                        <td className="px-6 py-4">15.2</td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center">
                                                <span className="inline-flex items-center gap-1.5 rounded-full bg-red-500/10 px-2.5 py-1 text-xs font-medium text-red-500">
                                                    <span className="inline-block size-1.5 rounded-full bg-red-500"></span>Inactive
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">7,800.00</td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-1">
                                                <button className="p-2 text-text-secondary transition-colors hover:text-primary" title="View Details">
                                                    <span className="material-symbols-outlined">visibility</span>
                                                </button>
                                                <button className="p-2 text-text-secondary transition-colors hover:text-primary" title="Edit Battery">
                                                    <span className="material-symbols-outlined">edit</span>
                                                </button>
                                                <button
                                                    className="p-2 text-text-secondary transition-colors hover:text-red-500"
                                                    title="Delete Battery"
                                                >
                                                    <span className="material-symbols-outlined">delete</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="border-b bg-surface-light hover:bg-gray-50 dark:border-border-dark dark:bg-surface-dark dark:hover:bg-gray-800/50">
                                        <td className="w-4 p-4">
                                            <div className="flex items-center">
                                                <input
                                                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary focus:ring-2 focus:ring-primary dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary"
                                                    id="checkbox-table-4"
                                                    type="checkbox"
                                                />
                                                <label className="sr-only" htmlFor="checkbox-table-4">
                                                    checkbox
                                                </label>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 font-medium whitespace-nowrap text-text-main dark:text-white">EcoStore 5</td>
                                        <td className="px-6 py-4">GreenEnergy</td>
                                        <td className="px-6 py-4">5.0</td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center">
                                                <span className="bg-success/10 text-success inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium">
                                                    <span className="bg-success inline-block size-1.5 rounded-full"></span>Active
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">3,100.00</td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-1">
                                                <button className="p-2 text-text-secondary transition-colors hover:text-primary" title="View Details">
                                                    <span className="material-symbols-outlined">visibility</span>
                                                </button>
                                                <button className="p-2 text-text-secondary transition-colors hover:text-primary" title="Edit Battery">
                                                    <span className="material-symbols-outlined">edit</span>
                                                </button>
                                                <button
                                                    className="p-2 text-text-secondary transition-colors hover:text-red-500"
                                                    title="Delete Battery"
                                                >
                                                    <span className="material-symbols-outlined">delete</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <nav aria-label="Table navigation" className="flex items-center justify-between p-4">
                            <span className="text-sm font-normal text-text-secondary">
                                Showing <span className="font-semibold text-text-main dark:text-white">1-4</span> of{' '}
                                <span className="font-semibold text-text-main dark:text-white">32</span>
                            </span>
                            <ul className="inline-flex items-center -space-x-px">
                                <li>
                                    <a
                                        className="ml-0 flex h-8 items-center rounded-l-lg border border-border-light bg-surface-light px-3 leading-tight text-text-secondary hover:bg-gray-100 hover:text-text-main dark:border-border-dark dark:bg-surface-dark dark:hover:bg-gray-700 dark:hover:text-white"
                                        href="#"
                                    >
                                        Previous
                                    </a>
                                </li>
                                <li>
                                    <a
                                        aria-current="page"
                                        className="flex h-8 items-center border border-primary bg-primary/10 px-3 text-primary hover:bg-primary/20"
                                        href="#"
                                    >
                                        1
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="flex h-8 items-center border border-border-light bg-surface-light px-3 leading-tight text-text-secondary hover:bg-gray-100 hover:text-text-main dark:border-border-dark dark:bg-surface-dark dark:hover:bg-gray-700 dark:hover:text-white"
                                        href="#"
                                    >
                                        2
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="flex h-8 items-center border border-border-light bg-surface-light px-3 leading-tight text-text-secondary hover:bg-gray-100 hover:text-text-main dark:border-border-dark dark:bg-surface-dark dark:hover:bg-gray-700 dark:hover:text-white"
                                        href="#"
                                    >
                                        3
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="flex h-8 items-center rounded-r-lg border border-border-light bg-surface-light px-3 leading-tight text-text-secondary hover:bg-gray-100 hover:text-text-main dark:border-border-dark dark:bg-surface-dark dark:hover:bg-gray-700 dark:hover:text-white"
                                        href="#"
                                    >
                                        Next
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </main>
        </AppLayout>
    );
};

export default BatteriesListPage;
