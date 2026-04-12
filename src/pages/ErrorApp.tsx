import "./Error_app_css.css"
import { Link } from 'react-router-dom';

export const ErrorApp = () => {
    return (
        <div className="error_container_css">
            <h1>404 - Página não encontrada</h1>
            <p>Ops! O caminho que você tentou acessar não existe.</p>
            <Link color="blue" to="/">Voltar para o Início</Link>
        </div>
    );
};
