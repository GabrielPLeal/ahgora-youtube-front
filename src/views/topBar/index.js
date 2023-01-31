import { BsYoutube } from 'react-icons/bs';
import './index.css';

const TopBar = () => (
    <div className='top-bar-container'>
        <div className='icon'>
            <BsYoutube size={55} color="white" />
        </div>
        <div className='title'>
            <h1>Ahgora Youtube</h1>
        </div>
    </div>
)

export default TopBar