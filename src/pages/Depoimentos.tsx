import { BoxCard, BoxCenter } from "../components/Box";
import { Card } from "../components/Cards";
import { CenteredContent } from "../components/CenteredContent";
import { OrangeH1, OrangeH2 } from "../components/Topic";
import { Image } from '../components/Image';
import sonia from '../assets/images/sonia.jpg';
import silvana from '../assets/images/silvana.jpg';
import silvio from '../assets/images/silvio.jpg';
import sandro from '../assets/images/sandro.jpg';
import samira from '../assets/images/samira.jpg';
import { GreenH2 } from "../components/Text";
import { useState } from "react";

export function Depoimentos(){
    const [showModal, setShowModal] = useState(false);

    function toggleModal(){

    }
    return (
        <>
        <BoxCenter>
            <CenteredContent>
                <OrangeH1>Depoimentos</OrangeH1>
            </CenteredContent>
            <BoxCard>
                <Card>
                    <Image width="100px" height="100px" src={sonia} />
                    <OrangeH2>Sônia</OrangeH2>
                    <GreenH2>
                        Papai. 
                        Teste testetetstetstet etestetst etsttets Teste testetetstetstet etestetst etsttetstststststtstststtst...
                        <button onClick={toggleModal}><b>Leia mais</b></button>
                    </GreenH2>
                </Card>
                <Card>
                    <Image width="100px" height="100px" src={silvana} />
                    <OrangeH2>Silvana</OrangeH2>
                    <GreenH2>
                        Papai. 
                        Ter você em minha vida sempre foi exemplo de superação, honestidade, paciência, dedicação e amor. Como foi bom ter você...
                        <button><b>Leia mais</b></button>
                    </GreenH2>
                </Card>
                <Card>
                    <Image width="100px" height="100px" src={silvio} />
                    <OrangeH2>Silvio</OrangeH2>
                    <GreenH2>
                        Papai. 
                        Teste testetetstetstet etestetst etsttets Teste testetetstetstet etestetst etsttetstststststtstststtst...
                        <button><b>Leia mais</b></button>
                    </GreenH2>
                </Card>
                <Card>
                    <Image width="100px" height="100px" src={sandro} />
                    <OrangeH2>Sandro</OrangeH2>
                    <GreenH2>
                        Papai. 
                        Teste testetetstetstet etestetst etsttets Teste testetetstetstet etestetst etsttetstststststtstststtst...
                        <button><b>Leia mais</b></button>
                    </GreenH2>
                </Card>
                <Card>
                    <Image width="100px" height="100px" src={samira} />
                    <OrangeH2>Samira</OrangeH2>
                    <GreenH2>
                        Papai. 
                        Teste testetetstetstet etestetst etsttets Teste testetetstetstet etestetst etsttetstststststtstststtst...
                        <button><b>Leia mais</b></button>
                    </GreenH2>
                </Card>
                
            </BoxCard>
        </BoxCenter>
        </>

    )
}


/*
Papai. 
Ter você em minha vida sempre foi exemplo de superação, honestidade, paciência, dedicação e amor. Como foi bom ter você como pai, sei que aproveitei cada minuto possível com você, fizemos planos e os desfazemos, foram dias incríveis ao seu lado, tudo era possível, otimismo era seu lema, não tinha tempo ruim, mesmo nas horas mais complicadas. Mas, ainda assim, gostaria de mais,  mais abraços seus, mais conversas, mais beijos ou apenas ficar pertinho no sofá enquanto você descansava, minha vida tem um marco, com você e sem você, o antes e o depois, tudo tem um novo olhar, um novo significado e nada mais será completo a cada dia que passa a saudade aumenta, como dói saber que você não está aqui entre nós. mas, honrarei sua memória com a prática de seus ensinamentos e seu legado estará vivo  para sempre. 
Com amor sua filha Silvana.
*/