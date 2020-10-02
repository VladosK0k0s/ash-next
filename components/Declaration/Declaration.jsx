import React, { useState, useEffect } from "react";
import Content from "./Content/Content.jsx";

const Declaration = (props) => {
    const [isChecked, setIsChecked] = useState(false);
    const [isPass, setIsPass] = useState(false);

    useEffect(() => {
        const pass = JSON.parse(localStorage.getItem("passed")).pass;
        setIsPass(pass);
        setIsChecked(true);
    }, []);

    if (isChecked && !isPass) {
        return props.router.push({
            pathname: "/",
        });
    }
    return (
        <div className="Declaration">
            {isChecked && (
                <Content prevObj={props.prevObj} router={props.router} />
            )}
        </div>
    );
};

export default Declaration;
