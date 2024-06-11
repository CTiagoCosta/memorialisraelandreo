
import styled from 'styled-components';
import { WhiteH1 } from '../components/Topic';
// import israelAndreo  from '../assets/videos/rael2.mp4'
import ReactPlayer from 'react-player';


const Wrapper = styled.div`
    background: #1c4532;
    padding: 100px 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const Paragraph = styled.p`
    font-size: 1rem;
    font-weight: 600;
    color: white;
    
`;

const ReactPlayerVideo = styled.div`
    border: 7px solid #ED8936;
    border-radius: 20px;
`;

export function Video(){
    return (
        <Wrapper>
            <ReactPlayerVideo>
                <ReactPlayer
                    url={israelAndreo}
                    controls
                    playing={true}
                    muted={true}
                    loop={true}
                    />
            </ReactPlayerVideo>
            <Paragraph> 
            <WhiteH1>Música: Vida melhor</WhiteH1> 
                De: Israel Andreo <br></br><br></br>
                    Eu fiz de tudo pra tratar vida melhor,<br></br>
                    Eu trabalhei eu derramei o meu suor,<br></br>
                    Não tive tudo foi por isso que sofri,<br></br>
                    Por opção sem profissão, mas consegui.<br></br><br></br>

                    Corri, parei, sorri, mas também chorei, <br></br>
                    Eu construí, eu desmanchei,<br></br>
                    Fui insistente e não desanimei<br></br>

                    Homem valente é aquele que trabalha,<br></br>
                    Luta com fé e não perde a batalha.<br></br>
                    Na minha vida muita luta enfrentei<br></br>
                    Com muito brilho os meus filhos eu criei<br></br><br></br>

                    Corri, parei, sorri, mas também chorei, <br></br>
                    Eu construí, eu desmanchei,<br></br>
                    Fui insistente e não desanimei<br></br>
            </Paragraph>
        </Wrapper>

    )
}