import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link, usePage} from '@inertiajs/react';
import {InboxIcon, PaperAirplaneIcon, PlusCircleIcon} from "@heroicons/react/24/outline/index.js";
import React from "react";

const Dashboard = ({auth, mails}) => {
    const {url} = usePage();
    console.log(mails)
    return (
        <AuthenticatedLayout
            user={auth.user}//
            //header={<span className="font-semibold text-xl text-gray-800 leading-tight"></span>}
        >
            <Head title="Dashboard"/>
            <div className="py-12 flex flex-row">
                <div className="max-w-sm sm:px-6 lg:px-8 w-full">
                    <div className={"bg-white overflow-hidden shadow-sm sm:rounded-lg"}>
                        <div className="p-6 text-gray-900 w-full flex flex-col space-y-2">
                            <button
                                className={"px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded text-start flex flex-row"}
                            >
                                <PlusCircleIcon className={"w-6 h-6 mr-2"}/>
                                Создать
                            </button>
                            <Link href='/dashboard'
                                  className={`hover:bg-gray-200 ${url === '/dashboard' ? 'bg-gray-200' : ''}`}>
                                <button
                                    className={"px-4 py-2  rounded text-start flex flex-row "}
                                >
                                    <InboxIcon className={"w-6 h-6 mr-2"}/>
                                    Входящие
                                </button>
                            </Link>
                            <Link href='/send'
                                  className={`hover:bg-gray-200 ${url === '/send' ? 'bg-gray-200' : ''}`}>
                                <button
                                    className={"px-4 py-2  rounded text-start flex flex-row "}
                                >
                                    <PaperAirplaneIcon className={"w-6 h-6 mr-2"}/>
                                    Отправленные
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="max-w-full mx-auto sm:px-6 lg:px-8 w-full">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <table className="min-w-full divide-y divide-gray-50">
                                <thead className="bg-slate-100">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        ID
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        От куда
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        ТИП
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        статус
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Контрольный
                                    </th>
                                    <th scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"

                                    >
                                        <span className="">Дата выполнения</span>
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-50">
                                {
                                    mails.map((mail) =>
                                        mail.document ? (
                                                <tr
                                                    key={mail.id}
                                                    className={`${mail.opened ? 'bg-slate-100' : 'bg-white'}  border-b border-gray-100 hover:bg-slate-300 cursor-pointer`}
                                                >
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{mail.id}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{mail.id}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{mail.id}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{mail.id}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{mail.id}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{mail.id}</td>
                                                </tr>
                                            )
                                            :
                                            null
                                    )
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
export default Dashboard;
