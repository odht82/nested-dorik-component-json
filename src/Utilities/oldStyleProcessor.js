export const styleProcessor = (data) => {
    let stylesArr = [];
    let totalClasses = {};
    for (let i = 0; i < data.length; i++) {
        totalClasses[i] = data[i].id;
        let allStyles = [];
        let styleProperties = (key, value) => `${key}:"${value}";`;

        const gatherStyles = (className, styleObject) => {
            let allStyles = [];
            let styleProps = (key, value) => `${key}:"${value}";`;
            for (let n in styleObject) {
                allStyles.push(styleProps(n.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), styleObject[n]));
            }
            allStyles = allStyles.join(" ");
            allStyles = `.${className}{${allStyles}}`;
            return allStyles;
        }

        for (let n in data[i].style) {
            allStyles.push(styleProperties(n.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), data[i].style[n]))
            const stylesCollector = (elem) => {
                for (let i = 0; i < elem?.length; i++) {
                    if (elem[i].content) {
                        totalClasses[i] = elem[i].id;
                        let allStyles = [];
                        let styleProps = (key, value) => `${key}:"${value}";`;
                        for (let n in elem[i].style) {
                            allStyles.push(styleProps(n.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), elem[i].style[n]))
                        }
                        stylesArr.push(`.${elem[i].id}{${allStyles.join(" ")}}`.replaceAll('"', "'"));
                        stylesCollector(elem[i].content)
                    }
                    if (elem[i].form) {
                        stylesArr.push(
                            gatherStyles(elem[i].id, elem[i].form.style).replaceAll('"', "'"),
                            elem[i].form.fields.items.map(item => gatherStyles(item.id, elem[i].form.fields.style).replaceAll('"', "'")),
                            gatherStyles(elem[i].form.submitButton.id, elem[i].form.submitButton.style).replaceAll('"', "'")
                        );
                    }
                }
                stylesArr.push(`.${data[i].id}{${allStyles.join(" ")}}`.replaceAll('"', "'"));
            }
            stylesCollector(data)
            const styles = (stylesArr + "\n").replaceAll(",", "\n").replaceAll("'", "");

            // console.log(styles)
            return { styles };
        };
    }
};