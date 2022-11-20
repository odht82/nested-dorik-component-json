export const styleProcessor = (data) => {
    let stylesArr = [];
    let totalClasses = {};
    const stylesCollector = (elem) => {
        for (let i = 0; i < elem?.length; i++) {
            if (elem[i].content) {
                totalClasses[i] = elem[i].id;
                let allStyles = [];
                let styleprops = (key, value) => `${key}:"${value}";`;
                for (let n in elem[i].style) {
                    allStyles.push(styleprops(n.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), elem[i].style[n]))
                }
                stylesArr.push(`.${elem[i].id}{${allStyles.join(" ")}}`.replaceAll('"', "'"));
                stylesCollector(elem[i].content)
            }
            if (elem[i].form) {
                const gatherStyles = (className, styleObject) => {
                    let allStyles = [];
                    let styleprops = (key, value) => `${key}:"${value}";`;
                    for (let n in styleObject) {
                        allStyles.push(styleprops(n.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), styleObject[n]));
                    }
                    allStyles = allStyles.join(" ");
                    allStyles = `.${className}{${allStyles}}`;
                    return allStyles;
                }

                stylesArr.push(
                    gatherStyles(elem[i].id, elem[i].form.style).replaceAll('"', "'"),
                    elem[i].form.fields.items.map(item => gatherStyles(item.id, elem[i].form.fields.style).replaceAll('"', "'")),
                    gatherStyles(elem[i].form.submitButton.id, elem[i].form.submitButton.style).replaceAll('"', "'")
                );
            }
        }
    }
    stylesCollector(data)
    const styles = (stylesArr + "\n").replaceAll(",", "\n").replaceAll("'", "");
    // console.log(styles)
    return { styles };
};
