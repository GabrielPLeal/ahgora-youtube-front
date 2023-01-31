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
        getValues,
        cleanSearch,
        watch
    } = useContent()

    return (
        <div className='content-container'>
            <Search
                register={register}
                handleSubmit={handleSubmit}
                submit={submit}
                errors={errors}
                cleanSearch={cleanSearch}
            />
            <ContentResponse
                loading={loading}
                getValues={getValues}
                watch={watch}
            />
        </div>
    )
}

export default Content