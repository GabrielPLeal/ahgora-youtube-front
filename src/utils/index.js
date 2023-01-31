import * as yup from 'yup';

export const weekDayYup = () => (
    yup.number()
        .typeError("Campo obrigatório!")
        .required("Campo obrigatório!")
        .max(3600, "Tempo MÁXIMO possível é 3600 minutos")
        .min(1, "Tempo MÍNIMO possível é 1 minuto")
)