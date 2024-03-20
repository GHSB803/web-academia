import './Rodape.css'
import face from '../../assets/face.png';
import insta from '../../assets/insta.png';

function Rodape() {
    return (
        <div className='rodape'>
            <div className='container-rodape'>
                <h1 className='h1-frase'>"Persista hoje, conquiste amanhã!"</h1>
                <h1>Endereço</h1>
                    <p className='p-rodape'>C. 6 958, La Plata, Provincia de Buenos Aires, Argentina</p>
                    <p>CEP: 1900 TEL: (221) 93664-3687</p>
                <h1 className='h1-redes'>REDES SOCIAIS</h1>
                <img src={insta} alt="instagram"/>
                <img src={face} alt="facebook" />
            </div>
        </div>
    );
}

export default Rodape;
