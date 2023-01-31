import { useState } from "react"

const useContentResponse = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [currentUrl, setCurrentUrl] = useState('')
    const handleClose = () => setModalIsOpen(!modalIsOpen)

    const hasValue = (value) => {
        return value > 0
    }

    const formatDate = (data) => {
        let stringDate = ''
        let [minutes, seconds] = data.split(".")
        minutes = Number(minutes)
        seconds = Number(seconds)
        const restMinutes = minutes % 60
        const hours = (minutes - restMinutes) / 60

        if (hasValue(hours)) {
            stringDate += `${hours}h `
        }
        if (hasValue(restMinutes)) {
            stringDate += `${restMinutes}m `
        }
        if (hasValue(seconds)) {
            stringDate += `${seconds}s`
        }
        return stringDate
    }

    return {
        formatDate,
        modalIsOpen,
        handleClose,
        currentUrl,
        setCurrentUrl
    }
}

export default useContentResponse