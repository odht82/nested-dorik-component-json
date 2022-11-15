export const formStyleProcessor = (data) => {
    const gatherStyles = (className, styleObject) => {
        let allStyles = [];
        let styleProperties = (key, value) => `${key}:"${value}";`;
        for (let i in styleObject) { allStyles.push(styleProperties(i.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), styleObject[i])); }
        allStyles = allStyles.join(" ");
        allStyles = `.${className}{${allStyles}}`;
        return allStyles;
    }
    let formStylesArr = [];
    formStylesArr.push(
        gatherStyles(data.id, data.style).replaceAll('"', "'"),
        data.fields.items.map(item => gatherStyles(item.id, data.fields.style).replaceAll('"', "'")),
        gatherStyles(data.fields.items.map(item => item.id), data.fields.style).replaceAll('"', "'"),
        gatherStyles(data.submitButton.id, data.submitButton.style).replaceAll('"', "'")
    );

    const subscriptionFormStyles = (formStylesArr + "\n").replaceAll(",", "\n").replaceAll("'", "");

    return { subscriptionFormStyles };
};