const Image = (className, style) => {
    const defaultStyles = ``
    const regularStyles = `${style}`

    return `.${className} {${defaultStyles}${regularStyles} } `
};
export default Image;