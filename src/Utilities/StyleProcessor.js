import { componentStyle } from "../Styles/index";

const gatherStyles = (styleObject) => {
    let allStyles = [];
    let styleProps = (key, value) => `${key}:"${value}";`;
    for (let n in styleObject) {
        allStyles.push(styleProps(n.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), styleObject[n]));
    }
    allStyles = allStyles.join(" ");
    return allStyles;
}


const styleProcessor = (data) => {
    const Compo = componentStyle[data.type];
    if (Array.isArray(data.content)) {
        return (Compo(data.id, gatherStyles(data.style)),
            styleProcessor(data.content));
    } else if (Array.isArray(data)) {
        console.log(data);
        data.map(compo => styleProcessor(compo))
    } else if (!Array.isArray(data)) {
        // console.log(data.style);
        return (Compo(data.id, gatherStyles(data.style)));
    } else { return }
};
export default styleProcessor


// const stylesCollector = (elem) => {
//     for (let i = 0; i < elem?.length; i++) {
//         if (elem[i].content) {
//             totalClasses[i] = elem[i].id;
//             let allStyles = [];
//             let styleProps = (key, value) => `${key}:"${value}";`;
//             for (let n in elem[i].style) {
//                 allStyles.push(styleProps(n.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), elem[i].style[n]))
//             }
//             stylesArr.push(`.${elem[i].id}{${allStyles.join(" ")}}`.replaceAll('"', "'"));
//             stylesCollector(elem[i].content)
//         }
//     }
// }

// if (elem[i].form) {
//     const gatherStyles = (className, styleObject) => {
//         let allStyles = [];
//         let styleProps = (key, value) => `${key}:"${value}";`;
//         for (let n in styleObject) {
//             allStyles.push(styleProps(n.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), styleObject[n]));
//         }
//         allStyles = allStyles.join(" ");
//         allStyles = `.${className}{${allStyles}}`;
//         return allStyles;
//     }

//     stylesArr.push(
//         gatherStyles(elem[i].id, elem[i].form.style).replaceAll('"', "'"),
//         elem[i].form.fields.items.map(item => gatherStyles(item.id, elem[i].form.fields.style).replaceAll('"', "'")),
//         gatherStyles(elem[i].form.submitButton.id, elem[i].form.submitButton.style).replaceAll('"', "'")
//     );
// }


// stylesCollector(data)
// const styles = (stylesArr + "\n").replaceAll(",", "\n").replaceAll("'", "");
// console.log(stylesArr)
// return { styles };