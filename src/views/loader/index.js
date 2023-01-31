import { Spinner } from 'reactstrap'
import './index.css'
const Loader = () => {
    return (
        <div className="loader-container">
            <Spinner />
            <p>Carregando...</p>
        </div>
    )
}
export default Loader
