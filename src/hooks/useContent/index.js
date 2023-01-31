import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { weekDayYup } from '../../utils';

const useContent = () => {
    const { register, setValue, getValues, formState: { errors }, handleSubmit } = useForm({
        resolver: yupResolver(validationSchema)
    })

    const submit = (data) => {
    }


    return {
        register,
        setValue,
        getValues,
        errors,
        handleSubmit,
        submit
    }
}

const validationSchema = yup.object().shape({
    search: yup.string().required('Campo obrigatório!').nullable(),
    mon: weekDayYup(),
    tues: weekDayYup(),
    wed: weekDayYup(),
    thurs: weekDayYup(),
    fri: weekDayYup(),
    sat: weekDayYup(),
    sun: weekDayYup(),
})

export default useContent