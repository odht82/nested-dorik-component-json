const Text = (className, style) => {
    const defaultStyles = ``
    const regularStyles = `${style}`

    return `.${className} {${defaultStyles}${regularStyles} } `
};

export default Text;