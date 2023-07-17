import React from 'react';
import {Head, Link, usePage} from "@inertiajs/react";
import {InboxIcon, PaperAirplaneIcon, PlusCircleIcon} from "@heroicons/react/24/outline/index.js";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";

const Index = ({auth, mails}) => {
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
                            Исходящие
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
