import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { youtubeApi } from '../../jwt/Axios.service';
import { weekDayYup } from '../../utils';

const useContent = () => {
    const [loading, setLoading] = useState()
    const {
        register,
        setValue,
        getValues,
        formState: { errors },
        handleSubmit,
        watch
    } = useForm({ resolver: yupResolver(validationSchema) })

    const generateUrl = (data) => {
        let url = '/search?'
        Object.entries(data).forEach(
            ([key, value], index) => {
                const query = `${key}=${value}`
                const signal = index !== 0 ? '&' : ''
                url += `${signal}${query}`
            }
        )
        return url
    }

    const setContentData = (resp) => {
        const data = resp.data
        setValue('videosData', data.videosData)
        setValue('fiveWordsMostUsed', data.fiveWordsMostUsed)
        setValue('howManyDaysWatchAllVideos', data.howManyDaysWatchAllVideos)
    }

    const submit = async (data) => {
        setLoading(true)
        const url = generateUrl(data)
        await youtubeApi.get(url).then(
            (resp) => {
                setContentData(resp)
            }
        ).catch(
            (error) => console.log(error)
        )
        setLoading(false)
    }

    const cleanSearch = () => {
        const values = getValues()

        Object.keys(values).forEach(
            (key) => {
                let newValue = key === 'videosData' ? [] : ""
                setValue(key, newValue)
            }
        )
    }

    return {
        register,
        setValue,
        getValues,
        watch,
        errors,
        handleSubmit,
        submit,
        cleanSearch,
        loading
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