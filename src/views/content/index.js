import useContent from '../../hooks/useContent';
import ContentResponse from '../contentResponse';
import Search from '../search';
import './index.css';

const Content = (props) => {
    const {
        register,
        errors,
        handleSubmit,
        submit
    } = useContent()

    return (
        <div className='content-container'>
            <Search
                register={register}
                handleSubmit={handleSubmit}
                submit={submit}
                errors={errors}
            />
            <ContentResponse />
        </div>
    )
}

export default Content