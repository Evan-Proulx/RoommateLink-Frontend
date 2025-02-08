import React from 'react';
import ShadowButton from "../Shadow-Button.tsx";

const ButtonNav = () => {
    return (
            <div className={"flex justify-between mx-5 py-8"}>
                <ShadowButton value={"Back"} color={"red"}/>
                <ShadowButton value={"Next"}/>
            </div>
    );
};

export default ButtonNav;