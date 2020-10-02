import React from "react";
import Link from "next/link";

class OnMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: "",
        };
    }
    render() {
        return (
            <div className="OnMain">
                <Link href="/">На головну</Link>
            </div>
        );
    }
}

export default OnMain;
