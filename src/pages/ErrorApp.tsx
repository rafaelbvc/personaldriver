import { Link } from 'react-router-dom';

export const ErrorApp = () => {
    return (
        <div style={{ textAlign: 'center', padding: '50px', marginTop: "36vh"}}>
            <h1>404 - Página não encontrada</h1>
            <p>Ops! O caminho que você tentou acessar não existe.</p>
            <Link color="blue" to="/">Voltar para o Início</Link>
        </div>
    );
};
