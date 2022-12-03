const Heading = (className, style) => {
    const defaultStyles = ``
    const regularStyles = `${style}`

    return `.${className} {${defaultStyles}${regularStyles} } `
};

export default Heading;