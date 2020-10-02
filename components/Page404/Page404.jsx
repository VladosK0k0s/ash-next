import React from "react";
import Link from "next/link";

const Page404 = () => {
    return (
        <div className="Page404">
            <h4>
                404{" "}
                <span>
                    -{" "}
                    <u>
                        <br />
                    </u>
                    сторінку{" "}
                    <u>
                        <br />
                    </u>
                    <br />
                    не знайдено
                </span>
            </h4>
            <p>
                Щось пішло не так :({" "}
                <u>
                    <br />
                </u>{" "}
                Спробуйте <br /> пізніше
                <Link href="/">
                    <a>
                        <h6>Повернутись на головну</h6>
                    </a>
                </Link>
            </p>
        </div>
    );
};

export default Page404;
