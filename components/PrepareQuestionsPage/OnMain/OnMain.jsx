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
                <Link href="/">
                    <a>На головну</a>
                </Link>
            </div>
        );
    }
}

export default OnMain;
