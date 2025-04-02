import React from 'react';
import ShadowButton from "../../Shadow-Button.tsx";

const ButtonNav = () => {
    return (
        <div className={"fixed bottom-1 z-0 w-full hidden md:block"}>
            <div className={"flex justify-between mx-5 p-8"}>
                <ShadowButton value={"Back"} color={"red"}/>
                <ShadowButton value={"Next"}/>
            </div>
        </div>
    );
};

export default ButtonNav;