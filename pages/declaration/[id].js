import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Declaration from "../../components/Declaration/Declaration";
import { useRouter } from "next/router";

const DeclarationPage = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <div className="App">
            <Header />
            <Declaration router={router} id={id} />
            <Footer />
        </div>
    );
};

export default DeclarationPage;
