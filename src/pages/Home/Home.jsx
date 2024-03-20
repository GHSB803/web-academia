import './Home.css';
import Welcome from '../../components/Welcome/Welcome';
import Navegacao from '../../components/Navegacao/Navegacao';
import Rodape from '../../components/Rodape/Rodape';

function Home() {

    return (
        <>
            <Navegacao/>
            <Welcome/>
            <Rodape/>
        </>
    );
}

export default Home;