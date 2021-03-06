import React from "react";
import Link from "next/link";

class Help extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            telephone: "",
            email: "",
            visible: false,
        };
    }
    render() {
        const { name, telephone, email, visible } = this.state;
        return (
            <div className="Help">
                <h5>
                    На жаль, шанси на оскарження вашої постанови досить низька
                    та Ви не зможете скористатися нашим сервісом
                    <br />
                    Але Ви зможете звернутися до наших адвокатів та вони можуть
                    проаналізувати індивідуально Вашу ситуацію
                </h5>
                {visible ? (
                    <form>
                        <label>
                            Прізвище, ім'я
                            <input
                                required
                                name="name"
                                type="text"
                                value={name}
                                onChange={(e) =>
                                    this.setState({
                                        [e.target.name]: e.target.value,
                                    })
                                }
                            />
                        </label>
                        <label>
                            Телефон
                            <input
                                required
                                name="telephone"
                                type="telephone"
                                value={telephone}
                                onChange={(e) =>
                                    this.setState({
                                        [e.target.name]: e.target.value,
                                    })
                                }
                            />
                        </label>
                        <label>
                            Email
                            <input
                                required
                                name="email"
                                type="email"
                                value={email}
                                onChange={(e) =>
                                    this.setState({
                                        [e.target.name]: e.target.value,
                                    })
                                }
                            />
                        </label>
                        <button type="submit">Надіслати</button>
                    </form>
                ) : (
                    <>
                        <p>Бажаєте звернутися до адвокатів?</p>
                        <div>
                            <button
                                className="customButton"
                                onClick={() => this.setState({ visible: true })}
                            >
                                Так
                            </button>
                            <Link href="/">
                                <a>
                                    <button className="customButton">Ні</button>
                                </a>
                            </Link>
                        </div>
                    </>
                )}
            </div>
        );
    }
}

export default Help;
