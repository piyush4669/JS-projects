let theme = "Light"

const getTheme = () => {
    return theme
}

const setTheme = (t) => {
    theme = t
}

module.exports = {
    getTheme:getTheme,
    setTheme:setTheme
}