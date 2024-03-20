import './Navegacao.css'
import treino from'../../assets/treino.jpg'
import {Link} from 'react-router-dom'

function Navegacao() {

    return(
        <div className="barra-navegacao">

            <div className="navbar-opcoes">

            <img className='treino'
            src={treino}/>

                <ul> 
                <li><Link style={{color: "#fff"}} to="/">Home</Link></li>

                <li><Link style={{color: "#fff"}} to="/planos">Planos</Link></li>

                <li><Link style={{color: "#fff"}} to="/treinos">Treinos</Link></li>

                <li><Link style={{color: "#fff"}} to="/acompanhamento">Acompanhamento</Link></li>

                <button className='botao'><Link style={{color: "#fff"}} to="/cadastro">Cadastrar-se</Link></button>
                </ul>

            </div>
        </div>
    );
}

export default Navegacao;