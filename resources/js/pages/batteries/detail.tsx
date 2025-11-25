import AppLayout from '@/layouts/app-layout';
import { usePage } from '@inertiajs/react';
import React from 'react';

type PageProps = {
    id?: string | number;
};

const BatteryDetailPage: React.FC = () => {
    const { id } = usePage<PageProps>().props;

    return (
        <AppLayout>
            <div className="max-w-7xl mx-auto">
                <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-col gap-1">
                        <a
                            className="mb-2 flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-primary"
                            href="#"
                        >
                            <span className="material-symbols-outlined">arrow_back</span>
                            Back to Battery List
                        </a>

                        <h1 className="text-heading dark:text-gray-100 text-3xl font-bold leading-tight">
                            PowerWall X {id ? `(ID: ${id})` : ''}
                        </h1>
                        <p className="text-text-secondary text-base font-normal leading-normal">
                            Detailed information for the battery model.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            className="flex h-11 min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg border border-border-light bg-background-light px-5 text-text-main transition-colors hover:border-primary/50 dark:border-border-dark dark:bg-background-dark dark:text-gray-200"
                        >
                            <span className="material-symbols-outlined">edit</span>
                            <span className="truncate">Edit</span>
                        </button>

                        <button
                            type="button"
                            className="flex h-11 min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg bg-red-500/10 px-5 text-red-500 transition-colors hover:bg-red-500/20"
                        >
                            <span className="material-symbols-outlined">delete</span>
                            <span className="truncate">Delete</span>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {/* LEFT COLUMN */}
                    <div className="flex flex-col gap-8 lg:col-span-2">
                        {/* General Information */}
                        <div className="bg-surface-light dark:bg-surface-dark rounded-lg p-6 shadow-soft">
                            <h2 className="mb-4 text-lg font-semibold text-heading dark:text-gray-100">
                                General Information
                            </h2>

                            <div className="grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2">
                                <div>
                                    <label className="text-sm text-text-secondary">Brand</label>
                                    <p className="text-text-main dark:text-white text-base font-medium">
                                        ElectroCharge
                                    </p>
                                </div>

                                <div>
                                    <label className="text-sm text-text-secondary">Model</label>
                                    <p className="text-text-main dark:text-white text-base font-medium">
                                        PowerWall X
                                    </p>
                                </div>

                                <div>
                                    <label className="text-sm text-text-secondary">Retail Price (€)</label>
                                    <p className="text-text-main dark:text-white text-base font-medium">
                                        €6,500.00
                                    </p>
                                </div>

                                <div>
                                    <label className="text-sm text-text-secondary">Wholesale Price (€)</label>
                                    <p className="text-text-main dark:text-white text-base font-medium">
                                        €5,800.00
                                    </p>
                                </div>

                                <div>
                                    <label className="text-sm text-text-secondary">Status</label>
                                    <p className="text-text-main dark:text-white text-base font-medium">
                                        <span className="inline-flex items-center gap-1.5 rounded-full bg-success/10 px-2.5 py-1 text-xs font-medium text-success">
                                            <span className="inline-block size-1.5 rounded-full bg-success" />
                                            Active
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Technical Specs */}
                        <div className="bg-surface-light dark:bg-surface-dark rounded-lg p-6 shadow-soft">
                            <h2 className="mb-4 text-lg font-semibold text-heading dark:text-gray-100">
                                Technical Specifications
                            </h2>

                            <div className="grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2">
                                <div>
                                    <label className="text-sm text-text-secondary">Capacity (kWh)</label>
                                    <p className="text-text-main dark:text-white text-base font-medium">
                                        13.5 kWh
                                    </p>
                                </div>

                                <div>
                                    <label className="text-sm text-text-secondary">Voltage (V)</label>
                                    <p className="text-text-main dark:text-white text-base font-medium">
                                        400 V
                                    </p>
                                </div>

                                <div>
                                    <label className="text-sm text-text-secondary">Chemistry</label>
                                    <p className="text-text-main dark:text-white text-base font-medium">
                                        Lithium-Ion
                                    </p>
                                </div>

                                <div>
                                    <label className="text-sm text-text-secondary">Warranty (Years)</label>
                                    <p className="text-text-main dark:text-white text-base font-medium">
                                        10 Years
                                    </p>
                                </div>

                                <div>
                                    <label className="text-sm text-text-secondary">Cycle Life</label>
                                    <p className="text-text-main dark:text-white text-base font-medium">
                                        6000 cycles
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Dimensions & Weight */}
                        <div className="bg-surface-light dark:bg-surface-dark rounded-lg p-6 shadow-soft">
                            <h2 className="mb-4 text-lg font-semibold text-heading dark:text-gray-100">
                                Dimensions &amp; Weight
                            </h2>

                            <div className="grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2">
                                <div>
                                    <label className="text-sm text-text-secondary">Height (mm)</label>
                                    <p className="text-text-main dark:text-white text-base font-medium">
                                        1150 mm
                                    </p>
                                </div>

                                <div>
                                    <label className="text-sm text-text-secondary">Width (mm)</label>
                                    <p className="text-text-main dark:text-white text-base font-medium">
                                        755 mm
                                    </p>
                                </div>

                                <div>
                                    <label className="text-sm text-text-secondary">Depth (mm)</label>
                                    <p className="text-text-main dark:text-white text-base font-medium">
                                        147 mm
                                    </p>
                                </div>

                                <div>
                                    <label className="text-sm text-text-secondary">Weight (kg)</label>
                                    <p className="text-text-main dark:text-white text-base font-medium">
                                        114 kg
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Notes */}
                        <div className="bg-surface-light dark:bg-surface-dark rounded-lg p-6 shadow-soft">
                            <h2 className="mb-4 text-lg font-semibold text-heading dark:text-gray-100">
                                Advanced / Notes
                            </h2>
                            <p className="text-text-secondary dark:text-gray-300 text-base">
                                Features an integrated inverter and software for energy monitoring.
                                Compatible with most solar panel installations. Installation requires a
                                certified technician.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="flex flex-col gap-8 lg:col-span-1">
                        <div className="bg-surface-light dark:bg-surface-dark rounded-lg p-6 shadow-soft">
                            <h2 className="mb-4 text-lg font-semibold text-heading dark:text-gray-100">
                                Media &amp; Documents
                            </h2>

                            <div className="flex flex-col gap-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div
                                        className="aspect-square rounded-lg bg-gray-100 bg-cover bg-center dark:bg-gray-800"
                                        style={{
                                            backgroundImage:
                                                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA7WuzY-oFPb0HxhF-SpzZRaviQzpiV3k8bv70UqOIAN7yk-gUZ9PrFTMgK2Sce288GHWTfwBd2QcYNtzNUGAJYlvoTww-nuCakbLCcxzdTvVY2_5Iu5Isg24ZYwkZzNAOtM2_KvxCwRCRGptlMhnSbnYX69WXG5jh79RzlUZnpNV3HuAGHSFu_milfjRtGe3PUFfEKTscOd2rugv4G1ss59yTpLrKgP9FxFof_7moUoPbUtXLvdePssb5znKFVofCAMWQ-JZDSXDE')",
                                        }}
                                    />
                                    <div
                                        className="aspect-square rounded-lg bg-gray-100 bg-cover bg-center dark:bg-gray-800"
                                        style={{
                                            backgroundImage:
                                                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA7WuzY-oFPb0HxhF-SpzZRaviQzpiV3k8bv70UqOIAN7yk-gUZ9PrFTMgK2Sce288GHWTfwBd2QcYNtzNUGAJYlvoTww-nuCakbLCcxzdTvVY2_5Iu5Isg24ZYwkZzNAOtM2_KvxCwRCRGptlMhnSbnYX69WXG5jh79RzlUZnpNV3HuAGHSFu_milfjRtGe3PUFfEKTscOd2rugv4G1ss59yTpLrKgP9FxFof_7moUoPbUtXLvdePssb5znKFVofCAMWQ-JZDSXDE')",
                                        }}
                                    />
                                </div>

                                <div className="flex flex-col gap-3 border-t border-border-light pt-4 dark:border-border-dark">
                                    <a
                                        href="#"
                                        className="flex items-center gap-3 text-text-secondary transition-colors hover:text-primary"
                                    >
                                        <span className="material-symbols-outlined text-primary">
                                            description
                                        </span>
                                        <span className="text-sm font-medium">
                                            Technical_Datasheet_PowerWallX.pdf
                                        </span>
                                    </a>

                                    <a
                                        href="#"
                                        className="flex items-center gap-3 text-text-secondary transition-colors hover:text-primary"
                                    >
                                        <span className="material-symbols-outlined text-primary">
                                            description
                                        </span>
                                        <span className="text-sm font-medium">
                                            Installation_Guide.pdf
                                        </span>
                                    </a>

                                    <a
                                        href="#"
                                        className="flex items-center gap-3 text-text-secondary transition-colors hover:text-primary"
                                    >
                                        <span className="material-symbols-outlined text-primary">
                                            description
                                        </span>
                                        <span className="text-sm font-medium">
                                            Warranty_Information.pdf
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default BatteryDetailPage;
