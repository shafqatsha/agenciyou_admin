import AppLayout from '@/layouts/app-layout';
export default function Partners() {
    return (
        <AppLayout>
            <div className="mx-auto max-w-7xl">
                <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-col gap-1">
                        <h1 className="text-heading text-3xl leading-tight font-bold dark:text-gray-100">Partner User Management</h1>
                        <p className="text-text-secondary text-base leading-normal font-normal">Manage access and details for all partner accounts.</p>
                    </div>
                    <button className="shadow-soft flex h-11 min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg bg-primary px-5 text-sm leading-normal font-bold tracking-wide text-white transition-colors hover:bg-primary/90">
                        <span className="material-symbols-outlined">add</span>
                        <span className="truncate">Add New Partner</span>
                    </button>
                </div>
                <div className="bg-surface-light dark:bg-surface-dark shadow-soft mb-6 rounded-lg p-4">
                    <div className="flex flex-col gap-4 md:flex-row">
                        <div className="flex-grow">
                            <label className="flex h-11 w-full min-w-40 flex-col">
                                <div className="flex h-full w-full flex-1 items-stretch rounded-lg">
                                    <div className="text-text-secondary border-border-light dark:border-border-dark flex items-center justify-center rounded-l-lg border border-r-0 bg-background-light pl-3 dark:bg-background-dark">
                                        <span className="material-symbols-outlined text-xl">search</span>
                                    </div>
                                    <input
                                        className="form-input text-text-main border-border-light dark:border-border-dark placeholder:text-text-secondary flex h-full w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg rounded-l-none border border-l-0 bg-background-light px-4 pl-2 text-sm leading-normal font-normal focus:ring-2 focus:ring-primary/50 focus:outline-none dark:bg-background-dark dark:text-gray-200"
                                        placeholder="Search by name, email, or company..."
                                        value=""
                                    />
                                </div>
                            </label>
                        </div>
                        <div className="flex items-center gap-3">
                            <button className="border-border-light dark:border-border-dark flex h-11 shrink-0 items-center justify-center gap-x-2 rounded-lg border bg-background-light px-4 transition-colors hover:border-primary/50 dark:bg-background-dark">
                                <p className="text-text-secondary text-sm leading-normal font-medium">Filter by Status</p>
                                <span className="material-symbols-outlined text-text-secondary text-xl">expand_more</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bg-surface-light dark:bg-surface-dark shadow-soft overflow-hidden rounded-lg">
                    <div className="overflow-x-auto">
                        <table className="text-text-secondary w-full text-left text-sm">
                            <thead className="text-text-secondary bg-background-light text-xs uppercase dark:bg-background-dark">
                                <tr>
                                    <th className="p-4" scope="col">
                                        <div className="flex items-center">
                                            <input
                                                className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary focus:ring-2 focus:ring-primary dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary"
                                                id="checkbox-all"
                                                type="checkbox"
                                            />
                                            <label className="sr-only" for="checkbox-all">
                                                checkbox
                                            </label>
                                        </div>
                                    </th>
                                    <th className="px-6 py-3" scope="col">
                                        Partner User
                                    </th>
                                    <th className="px-6 py-3" scope="col">
                                        Company
                                    </th>
                                    <th className="px-6 py-3" scope="col">
                                        Status
                                    </th>
                                    <th className="px-6 py-3" scope="col">
                                        Last Login
                                    </th>
                                    <th className="px-6 py-3" scope="col">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-surface-light dark:bg-surface-dark dark:border-border-dark border-b hover:bg-gray-50 dark:hover:bg-gray-800/50">
                                    <td className="w-4 p-4">
                                        <div className="flex items-center">
                                            <input
                                                className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary focus:ring-2 focus:ring-primary dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary"
                                                id="checkbox-table-1"
                                                type="checkbox"
                                            />
                                            <label className="sr-only" for="checkbox-table-1">
                                                checkbox
                                            </label>
                                        </div>
                                    </td>
                                    <th className="text-text-main flex items-center px-6 py-4 whitespace-nowrap dark:text-white" scope="row">
                                        <img
                                            className="h-10 w-10 rounded-full"
                                            data-alt="User avatar for Olivia Green"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWmIz0nsOYG7gxTg5oz9IwCIQOU9TpupAkEj79tcxIw2dKrsGCCaneIVoH9u2Go8Wq344upNLM2wYq64MloT79fE9_b0U_quFLqSXkN5MG-QYOxVk0tJ42Cy-PK54ynrZHby7T2JNStIZIUTUtrcl0vnVm_4XjF5v1hLbInWg-Yc52PYUldnDm6eCs_LFfqkaoebB2icCYwS8ZQqjxGuHevXYWfBQfPEUOMD9kB1lG2h0HwQ3cYJSbfI3suyY1RjlWHRdXKuuypiE"
                                        />
                                        <div className="pl-3">
                                            <div className="text-base font-semibold">Olivia Green</div>
                                            <div className="text-text-secondary font-normal">olivia.green@solarsolutions.be</div>
                                        </div>
                                    </th>
                                    <td className="px-6 py-4">SolarSolutions BE</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center">
                                            <span className="bg-success/10 text-success inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium">
                                                <span className="bg-success inline-block size-1.5 rounded-full"></span>Active
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">2024-05-20</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-1">
                                            <button className="text-text-secondary p-2 transition-colors hover:text-primary" title="View Details">
                                                <span className="material-symbols-outlined">visibility</span>
                                            </button>
                                            <button className="text-text-secondary p-2 transition-colors hover:text-primary" title="Edit User">
                                                <span className="material-symbols-outlined">edit</span>
                                            </button>
                                            <button className="text-text-secondary p-2 transition-colors hover:text-red-500" title="Delete User">
                                                <span className="material-symbols-outlined">delete</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="bg-surface-light dark:bg-surface-dark dark:border-border-dark border-b hover:bg-gray-50 dark:hover:bg-gray-800/50">
                                    <td className="w-4 p-4">
                                        <div className="flex items-center">
                                            <input
                                                className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary focus:ring-2 focus:ring-primary dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary"
                                                id="checkbox-table-3"
                                                type="checkbox"
                                            />
                                            <label className="sr-only" for="checkbox-table-3">
                                                checkbox
                                            </label>
                                        </div>
                                    </td>
                                    <th className="text-text-main flex items-center px-6 py-4 whitespace-nowrap dark:text-white" scope="row">
                                        <img
                                            className="h-10 w-10 rounded-full"
                                            data-alt="User avatar for Chloe Davis"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkQYiBM4YkAQ0hUBExEMBkj4WsU1U_di1UPawLtQMTh9q2wn52P8trEowo2w1o8z-bRkLx9mOJMTXI20isIJm5ezRNR_1OSX-rFr_oUNCIX2xCGJjK8xQTtPlGwVW_MyDIdvTByzG4ob57cG-el3borPkj2Hn6vDdzKlp2DUw2T2gt-fhwX9i9JP1er3oTaJU6uJJKE9Ald09XJOcO1o0wNPaGVvsiP1AOLDcAljVv0nl_Ck3aqYr3kreDXSgZiOE_ZGvIeeweQS8"
                                        />
                                        <div className="pl-3">
                                            <div className="text-base font-semibold">Chloe Davis</div>
                                            <div className="text-text-secondary font-normal">chloe.davis@sunpower.be</div>
                                        </div>
                                    </th>
                                    <td className="px-6 py-4">SunPower BE</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center">
                                            <span className="inline-flex items-center gap-1.5 rounded-full bg-red-500/10 px-2.5 py-1 text-xs font-medium text-red-500">
                                                <span className="inline-block size-1.5 rounded-full bg-red-500"></span>Inactive
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">2024-03-11</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-1">
                                            <button className="text-text-secondary p-2 transition-colors hover:text-primary" title="View Details">
                                                <span className="material-symbols-outlined">visibility</span>
                                            </button>
                                            <button className="text-text-secondary p-2 transition-colors hover:text-primary" title="Edit User">
                                                <span className="material-symbols-outlined">edit</span>
                                            </button>
                                            <button className="text-text-secondary p-2 transition-colors hover:text-red-500" title="Delete User">
                                                <span className="material-symbols-outlined">delete</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="bg-surface-light dark:bg-surface-dark dark:border-border-dark border-b hover:bg-gray-50 dark:hover:bg-gray-800/50">
                                    <td className="w-4 p-4">
                                        <div className="flex items-center">
                                            <input
                                                className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary focus:ring-2 focus:ring-primary dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary"
                                                id="checkbox-table-4"
                                                type="checkbox"
                                            />
                                            <label className="sr-only" for="checkbox-table-4">
                                                checkbox
                                            </label>
                                        </div>
                                    </td>
                                    <th className="text-text-main flex items-center px-6 py-4 whitespace-nowrap dark:text-white" scope="row">
                                        <img
                                            className="h-10 w-10 rounded-full"
                                            data-alt="User avatar for Liam Jansen"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpDP5wg_pqANUQSGCtafHm821piTiwXPUNBfN5Bp0Cqv2C3-3Q7BMbdiH2-DC2gnkCyO49fi66hVAqJcFXI6cg6Xrr0JAMa1AQqag3WBn3wTwAnlyeuH1zpDdgrX39v6AXs9RJ1XA_AArBnO2QHUvfD7HpFVNKwz3BdA-FOWW5C7QDhwQFnR7_Mj3Iu-Ps2sIrvS1WaWUpq2cL4htG1MhbZT305PnYuNQ0aHSZSNwdDjxWkWCbLY7jZkGRLfACb33ihxaPjiuINvo"
                                        />
                                        <div className="pl-3">
                                            <div className="text-base font-semibold">Liam Jansen</div>
                                            <div className="text-text-secondary font-normal">liam.jansen@dutchsolar.nl</div>
                                        </div>
                                    </th>
                                    <td className="px-6 py-4">DutchSolar NL</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center">
                                            <span className="bg-success/10 text-success inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium">
                                                <span className="bg-success inline-block size-1.5 rounded-full"></span>Active
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">2024-05-21</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-1">
                                            <button className="text-text-secondary p-2 transition-colors hover:text-primary" title="View Details">
                                                <span className="material-symbols-outlined">visibility</span>
                                            </button>
                                            <button className="text-text-secondary p-2 transition-colors hover:text-primary" title="Edit User">
                                                <span className="material-symbols-outlined">edit</span>
                                            </button>
                                            <button className="text-text-secondary p-2 transition-colors hover:text-red-500" title="Delete User">
                                                <span className="material-symbols-outlined">delete</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <nav aria-label="Table navigation" className="flex items-center justify-between p-4">
                        <span className="text-text-secondary text-sm font-normal">
                            Showing <span className="text-text-main font-semibold dark:text-white">1-3</span> of{' '}
                            <span className="text-text-main font-semibold dark:text-white">25</span>
                        </span>
                        <ul className="inline-flex items-center -space-x-px">
                            <li>
                                <a
                                    className="text-text-secondary bg-surface-light dark:bg-surface-dark border-border-light dark:border-border-dark hover:text-text-main ml-0 flex h-8 items-center rounded-l-lg border px-3 leading-tight hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
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
                                    className="text-text-secondary bg-surface-light dark:bg-surface-dark border-border-light dark:border-border-dark hover:text-text-main flex h-8 items-center border px-3 leading-tight hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                                    href="#"
                                >
                                    2
                                </a>
                            </li>
                            <li>
                                <a
                                    className="text-text-secondary bg-surface-light dark:bg-surface-dark border-border-light dark:border-border-dark hover:text-text-main flex h-8 items-center border px-3 leading-tight hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                                    href="#"
                                >
                                    3
                                </a>
                            </li>
                            <li>
                                <a
                                    className="text-text-secondary bg-surface-light dark:bg-surface-dark border-border-light dark:border-border-dark hover:text-text-main flex h-8 items-center rounded-r-lg border px-3 leading-tight hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                                    href="#"
                                >
                                    Next
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </AppLayout>
    );
}
