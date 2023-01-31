import * as yup from 'yup';

export const weekDayYup = () => (
    yup.number()
        .typeError("Campo obrigatório!")
        .required("Campo obrigatório!")
        .max(3600, "Tempo Máximo possível é 3600 minutos")
)