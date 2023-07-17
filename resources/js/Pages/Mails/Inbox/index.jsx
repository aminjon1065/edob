import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head} from "@inertiajs/react";

const Index = (props) => {
    console.log(props)
    return (
        <>
            <AuthenticatedLayout
                user={props.auth.user}
            >
                <Head title={"Входящие"}/>
                Lorem ipsum dolor sit amet.
            </AuthenticatedLayout>
        </>
    );
};

export default Index;
