export const styleProcessor = (data) => {
    let stylesArr = [];
    let totalClasses = {};
    for (let i = 0; i < data.length; i++) {
        totalClasses[i] = data[i].id;
        let allStyles = [];
        let styleProperties = (key, value) => `${key}:"${value}";`;
        for (let n in data[i].style) {
            allStyles.push(styleProperties(n.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), data[i].style[n]))
        }
        stylesArr.push(`.${data[i].id}{${allStyles.join(" ")}}`.replaceAll('"', "'"));
    }
    const styles = (stylesArr + "\n").replaceAll(",", "\n").replaceAll("'", "");

    return { styles };
};