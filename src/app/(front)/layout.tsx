import React, {ReactNode} from 'react';
import Navbar from "@/components/frontend/navbar";
import MegaMenu from "@/components/frontend/megaMenu";

function Layout({children} : {children : ReactNode}) {
    return (
        <div className={"bg-gray-100 "}>
            <Navbar/>
            <div className={"max-w-5xl mx-auto py-3"}><MegaMenu/></div>
            {children}
        </div>
    );
}

export default Layout;