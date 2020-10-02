import ThankYou from "../../components/ThankYouPage/ThankYouPage";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useRouter } from "next/router";

export default function ThankYouPage(props) {
    const router = useRouter();
    const { id } = router.query;
    return (
        <div className="App">
            <Header />
            <ThankYou id={id} />
            <Footer />
        </div>
    );
}
