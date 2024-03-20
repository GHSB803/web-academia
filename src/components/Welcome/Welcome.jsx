import './Welcome.css'
import peso from '../../assets/peso.jpeg'

function Welcome() {
    return (
        <div className="welcome">
            <img src={peso} alt="apresentacao-gym" className='welcome-image'/>
            
            <div className="welcome-container">
                    <h1>COMECE</h1>
                    <h1>AGORA</h1>
                <p>Vem com tudo, parceiro! Na academia Treino Total, cada suor é um degrau a mais rumo ao seu melhor shape.
                    Vamos conquistar esses ganhos juntos, nessa jornada de superação e determinação!</p>
                        <button className='botao-2'>Conheça Já</button>
            </div>
        </div>
    );
}

export default Welcome;