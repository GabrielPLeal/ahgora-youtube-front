import { useForm } from 'react-hook-form';

const useContent = () => {
    const { register, setValue, getValues, formState: { errors }, handleSubmit } = useForm()

    const submit = (data) => { }

    return {
        register,
        setValue,
        getValues,
        errors,
        handleSubmit,
        submit
    }
}

export default useContent