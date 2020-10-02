import React from "react";

class LiqForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        if (this.props.secondval !== null && this.props.firstval !== null) {
            return (
                <form
                    method="POST"
                    className="LiqForm"
                    action="https://www.liqpay.ua/api/3/checkout"
                    acceptCharset="utf-8"
                >
                    <input
                        type="hidden"
                        name="data"
                        value={this.props.firstval}
                    />
                    <input
                        type="hidden"
                        name="signature"
                        value={this.props.secondval}
                    />
                    <button>
                        {" "}
                        <img src="/images/oplata.png" alt="oplata" />
                        Оплатити 50 UAH
                    </button>
                </form>
            );
        } else return <div></div>;
    }
}

export default LiqForm;
