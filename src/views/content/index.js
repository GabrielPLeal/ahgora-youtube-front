import useContent from '../../hooks/useContent';
import ContentResponse from '../contentResponse';
import Search from '../search';
import './index.css';

const Content = (props) => {
    const {
        register,
        errors,
        handleSubmit,
        submit,
        loading,
        getValues
    } = useContent()

    return (
        <div className='content-container'>
            <Search
                register={register}
                handleSubmit={handleSubmit}
                submit={submit}
                errors={errors}
            />
            <ContentResponse
                loading={loading}
                getValues={getValues}
            />
        </div>
    )
}

export default Content