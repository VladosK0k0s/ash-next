import PrepareQuestionsPage from "../components/PrepareQuestionsPage/PrepareQuestionsPage";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useRouter } from "next/router";

export default function PrepareDeclaration(props) {
    const router = useRouter();
    return (
        <div className="App">
            <Header />
            <PrepareQuestionsPage router={router} {...props} />
            <Footer />
        </div>
    );
}
