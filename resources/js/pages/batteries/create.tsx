import AppLayout from "@/layouts/app-layout";
import React from "react";

const CreateBatteryPage: React.FC = () => {
    return (
        <AppLayout>

        <div>
            <div className="mx-auto max-w-7xl space-y-6">
                {/* Breadcrumbs */}
                <nav className="text-xs text-gray-500">
                    <span>Admin</span>
                    <span className="mx-1">/</span>
                    <span>Batteries</span>
                    <span className="mx-1">/</span>
                    <span className="text-gray-700">Create</span>
                </nav>

                {/* Page Header */}
                <header>
                    <h1 className="text-2xl font-semibold text-gray-900">
                        Create New Battery
                    </h1>
                    <p className="mt-1 text-sm text-gray-500">
                        Fill in the details below to add a new battery product to the system.
                    </p>
                </header>

                {/* Main Card */}
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
                    <div className="space-y-10">
                        {/* General Information */}
                        <section className="space-y-6">
                            <div>
                                <h2 className="text-sm font-semibold tracking-wide text-gray-900">
                                    General Information
                                </h2>
                                <div className="mt-2 h-px w-full bg-gray-200" />
                            </div>

                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div>
                                    <label className="block text-xs font-medium text-gray-700">
                                        Brand
                                    </label>
                                    <input
                                        className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                                        placeholder="e.g., SolarFlow"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-medium text-gray-700">
                                        Model
                                    </label>
                                    <input
                                        className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                                        placeholder="e.g., PowerHouse 5000"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-medium text-gray-700">
                                        Sale Price (₹)
                                    </label>
                                    <input
                                        type="number"
                                        className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                                        placeholder="e.g., 5500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-medium text-gray-700">
                                        Purchase Price (₹)
                                    </label>
                                    <input
                                        type="number"
                                        className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                                        placeholder="e.g., 4800"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-medium text-gray-700">
                                        Warranty (Years)
                                    </label>
                                    <input
                                        type="number"
                                        className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                                        placeholder="e.g., 10"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-medium text-gray-700">
                                        Country of Origin
                                    </label>
                                    <input
                                        className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                                        placeholder="e.g., Germany"
                                    />
                                </div>

                                <div className="sm:col-span-2">
                                    <label className="block text-xs font-medium text-gray-700">
                                        Website URL
                                    </label>
                                    <input
                                        type="url"
                                        className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                                        placeholder="https://example.com/product"
                                    />
                                </div>

                                <div className="sm:col-span-2">
                                    <label className="block text-xs font-medium text-gray-700">
                                        Description
                                    </label>
                                    <textarea
                                        rows={3}
                                        className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                                        placeholder="Enter a detailed product description..."
                                    />
                                </div>
                            </div>
                        </section>

                        {/* Technical Specifications */}
                        <section className="space-y-6">
                            <div>
                                <h2 className="text-sm font-semibold tracking-wide text-gray-900">
                                    Technical Specifications
                                </h2>
                                <div className="mt-2 h-px w-full bg-gray-200" />
                            </div>

                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div>
                                    <label className="block text-xs font-medium text-gray-700">
                                        Capacity (kWh)
                                    </label>
                                    <input
                                        className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                                        placeholder="e.g., 10"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-medium text-gray-700">
                                        Power (kW)
                                    </label>
                                    <input
                                        className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                                        placeholder="e.g., 5"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-medium text-gray-700">
                                        Inverter Power (kW)
                                    </label>
                                    <input
                                        className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                                        placeholder="e.g., 5.5"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-medium text-gray-700">
                                        Cycle Life
                                    </label>
                                    <input
                                        className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                                        placeholder="e.g., 6000"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-medium text-gray-700">
                                        Depth of Discharge (DoD %)
                                    </label>
                                    <input
                                        className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                                        placeholder="e.g., 90"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-medium text-gray-700">
                                        Efficiency (%)
                                    </label>
                                    <input
                                        className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                                        placeholder="e.g., 95"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-medium text-gray-700">
                                        Cooling Type
                                    </label>
                                    <select className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500">
                                        <option>Natural Convection</option>
                                        <option>Forced Air</option>
                                        <option>Liquid Cooled</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-medium text-gray-700">
                                        Cell Type
                                    </label>
                                    <select className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500">
                                        <option>Lithium-Ion (NMC)</option>
                                        <option>LiFePO₄</option>
                                        <option>Lead Acid</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-medium text-gray-700">
                                        Operational Temp Min (°C)
                                    </label>
                                    <input
                                        className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                                        placeholder="e.g., -10"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-medium text-gray-700">
                                        Operational Temp Max (°C)
                                    </label>
                                    <input
                                        className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                                        placeholder="e.g., 45"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-medium text-gray-700">
                                        Weight (kg)
                                    </label>
                                    <input
                                        className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                                        placeholder="e.g., 98.5"
                                    />
                                </div>

                                <div className="sm:col-span-2">
                                    <label className="block text-xs font-medium text-gray-700">
                                        Dimensions (W × D × H in mm)
                                    </label>
                                    <div className="mt-1 grid grid-cols-1 gap-3 sm:grid-cols-3">
                                        <input
                                            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                                            placeholder="Width (W)"
                                        />
                                        <input
                                            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                                            placeholder="Depth (D)"
                                        />
                                        <input
                                            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                                            placeholder="Height (H)"
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Status */}
                        <section className="space-y-4">
                            <div>
                                <h2 className="text-sm font-semibold tracking-wide text-gray-900">
                                    Status
                                </h2>
                                <div className="mt-2 h-px w-full bg-gray-200" />
                            </div>

                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-medium text-gray-700">
                                        Product Status
                                    </p>
                                    <p className="mt-1 text-xs text-gray-500">
                                        Set the product to active to make it visible.
                                    </p>
                                </div>

                                <label className="flex items-center gap-3">
                                    <div className="relative inline-flex items-center">
                                        <input
                                            type="checkbox"
                                            defaultChecked
                                            className="peer sr-only"
                                        />
                                        <div className="h-6 w-11 rounded-full bg-gray-200 transition peer-checked:bg-emerald-500" />
                                        <span className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white shadow-sm transition peer-checked:translate-x-5" />
                                    </div>
                                    <span className="text-xs font-medium text-gray-700">
                                        Active
                                    </span>
                                </label>
                            </div>
                        </section>

                        {/* Media & Documents */}
                        <section className="space-y-6">
                            <div>
                                <h2 className="text-sm font-semibold tracking-wide text-gray-900">
                                    Media &amp; Documents
                                </h2>
                                <div className="mt-2 h-px w-full bg-gray-200" />
                            </div>

                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <p className="text-xs font-medium text-gray-700">
                                        Product Images
                                    </p>
                                    <div className="flex h-40 flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 text-center">
                                        <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50">
                                            <span className="material-symbols-outlined text-xl text-emerald-600">
                                                upload
                                            </span>
                                        </div>
                                        <p className="text-xs font-medium text-gray-700">
                                            Click to upload or drag and drop
                                        </p>
                                        <p className="mt-1 text-[11px] text-gray-500">
                                            PNG, JPG or GIF (MAX. 5MB)
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <p className="text-xs font-medium text-gray-700">
                                        Datasheet PDF
                                    </p>
                                    <div className="flex h-40 flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 text-center">
                                        <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50">
                                            <span className="material-symbols-outlined text-xl text-emerald-600">
                                                description
                                            </span>
                                        </div>
                                        <p className="text-xs font-medium text-gray-700">
                                            Click to upload or drag and drop
                                        </p>
                                        <p className="mt-1 text-[11px] text-gray-500">
                                            PDF, DOCX (MAX. 10MB)
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-gray-700">
                                    Datasheet URL
                                </label>
                                <input
                                    className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                                    placeholder="https://example.com/datasheet.pdf"
                                />
                            </div>
                        </section>

                        {/* Advanced / Notes */}
                        <section className="space-y-6">
                            <div>
                                <h2 className="text-sm font-semibold tracking-wide text-gray-900">
                                    Advanced / Notes
                                </h2>
                                <div className="mt-2 h-px w-full bg-gray-200" />
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-xs font-medium text-gray-700">
                                        Design Notes
                                    </label>
                                    <textarea
                                        rows={2}
                                        className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                                        placeholder="Add any internal notes about the product design..."
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-medium text-gray-700">
                                        EMS Features
                                    </label>
                                    <textarea
                                        rows={2}
                                        className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                                        placeholder="List key Energy Management System features..."
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-medium text-gray-700">
                                        Included Materials
                                    </label>
                                    <textarea
                                        rows={2}
                                        className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                                        placeholder="List all materials included in the package..."
                                    />
                                </div>

                                <label className="flex items-center gap-2 text-xs text-gray-700">
                                    <input
                                        type="checkbox"
                                        className="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                                    />
                                    <span>Installation Required</span>
                                </label>
                            </div>
                        </section>

                        {/* Actions */}
                        <div className="flex items-center justify-end gap-3 pt-2">
                            <button
                                type="button"
                                className="rounded-lg border border-gray-300 px-5 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="rounded-lg bg-emerald-500 px-6 py-2 text-sm font-medium text-white hover:bg-emerald-600"
                            >
                                Create Battery
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </AppLayout>
 
    );
};

export default CreateBatteryPage;
