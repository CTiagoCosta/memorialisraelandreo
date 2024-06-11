import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { About } from "./About";
import { Depoimentos } from "./Depoimentos";
import { Depositions } from "./Depositions";
import { Gallery } from "./Gallery";
import { Video } from "./Video";


export function Home(){
    return (
        <>
            <Header />
            <Video />
            {/* <About />           */}
            <Gallery />
            {/* <Depositions /> */}
            <Depoimentos />
            <Footer />
        </>
    )
}