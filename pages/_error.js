import Page404 from "../components/Page404/Page404";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function Home() {
    return (
        <div className="App">
            <Header />
            <Page404 />
            <Footer />
        </div>
    );
}
