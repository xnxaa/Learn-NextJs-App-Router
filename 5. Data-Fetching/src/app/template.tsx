"use client"


// import { useState } from 'react';

import { ReactNode } from "react";

function Template({children} : {children : ReactNode}) {
// usf
    // const [state, setState] = useState(0);
    return ( 
        <div>
            {/* <h1>
                Hello world {state}
            </h1>
            <button onClick={()=>setState(state +1)}>Klik</button> */}
            {children}
        </div>
     );
}

export default Template;