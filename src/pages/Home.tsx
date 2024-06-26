import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Contact } from "./Contact";
import { Depositions } from "./Depositions";
import { Gallery } from "./Gallery";
import { Video } from "./Video";


export function Home(){
    return (
        <>
            <Header />
            <Video />
            <Gallery />
            <Depositions />
            <Contact />
            <Footer />
        </>
    )
}