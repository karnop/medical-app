import React, {ReactNode} from 'react';
import Navbar from "@/components/frontend/navbar";

function Layout({children} : {children : ReactNode}) {
    return (
        <div>
            <Navbar/>
            {children}
        </div>
    );
}

export default Layout;