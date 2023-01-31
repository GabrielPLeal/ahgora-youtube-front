const TopFiveWords = ({
    fiveWordsMostUsed
}) => {

    const getDefaulPhrase = (entrie) => {
        const [index, wordCount] = entrie
        const adjustedIndex = Number(index) + 1
        const [word, count] = Object.entries(wordCount)[0]
        return `${adjustedIndex}°- Palavra "${word}" apareceu ${count} vezes.`
    }

    return (
        <div>
            {Object.entries(fiveWordsMostUsed).map(
                (entrie) => <p>{getDefaulPhrase(entrie)}</p>
            )}
        </div>
    )
}

export default TopFiveWords