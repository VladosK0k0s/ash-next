import "../public/index.scss";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

export default function MyApp({ Component, pageProps }) {
    const [prevObj, setPrevObt] = useState({});
    return (
        <Component {...pageProps} prevObj={prevObj} setPrevObt={setPrevObt} />
    );
}
