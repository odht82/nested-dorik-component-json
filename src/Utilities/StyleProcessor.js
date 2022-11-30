import { componentStyle } from "../Styles/index";
let stylesArr = [];

const styleProcessor = ({ data }) => {
    const Compo = componentStyle[data.type];
    if (Array.isArray(data.content)) {
        for (let i = 0; i < data.length; i++) {
            let allStyles = [];
            let styleProperties = (key, value) => `${key}:"${value}";`;
            for (let n in data[i].style) {
                allStyles.push(styleProperties(n.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), data[i].style[n]))
            }
            stylesArr.push(`.${data[i].id}{${allStyles.join(" ")}}`.replaceAll('"', "'"));
            console.log("inner", data[i].id, allStyles);
        }
        console.log(stylesArr);
        return <Compo className={data.id}><styleProcessor data={data.content} className={data.id} key={data.id} /></Compo>;
    }
    // else if (Array.isArray(data)) {
    //     for (let i = 0; i < data.length; i++) {
    //         let allStyles = [];
    //         let styleProperties = (key, value) => `${key}:"${value}";`;
    //         for (let n in data[i].style) {
    //             allStyles.push(styleProperties(n.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), data[i].style[n]))
    //         }
    //         stylesArr.push(`.${data[i].id}{${allStyles.join(" ")}}`.replaceAll('"', "'"));
    //     }
    //     const styles = (stylesArr + "\n").replaceAll(",", "\n").replaceAll("'", "");
    //     return { styles };
    // } else if (!Array.isArray(data)) {
    //     for (let i = 0; i < data.length; i++) {
    //         let allStyles = [];
    //         let styleProperties = (key, value) => `${key}:"${value}";`;
    //         for (let n in data[i].style) {
    //             allStyles.push(styleProperties(n.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), data[i].style[n]))
    //         }
    //         stylesArr.push(`.${data[i].id}{${allStyles.join(" ")}}`.replaceAll('"', "'"));
    //     }
    //     const styles = (stylesArr + "\n").replaceAll(",", "\n").replaceAll("'", "");
    //     return { styles };
    // } else { return }

};
export default styleProcessor;


// import { component } from "../Components/index";

// const ComponentProcessor = ({ data }) => {
//     const Compo = component[data.type];
//     if (Array.isArray(data.content)) {
//         return (<Compo className={data.id}><ComponentProcessor data={data.content} className={data.id} key={data.id} /></Compo>);
//     } else if (Array.isArray(data)) {
//         return (<>{data.map(compo => <ComponentProcessor data={compo} className={compo.id} key={compo.id} />)}</>)
//     } else if (!Array.isArray(data)) {
//         return (<Compo className={data.id} data={data} />);
//     } else { return }
// }


// const gatherStyles = (className, styleObject) => {
//     let allStyles = [];
//     let styleProps = (key, value) => `${key}:"${value}";`;
//     for (let n in styleObject) {
//         allStyles.push(styleProps(n.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), styleObject[n]));
//     }
//     allStyles = allStyles.join(" ");
//     allStyles = `.${className}{${allStyles}}`;
//     return allStyles;
// }

// const styleGenerate = (data) => {
//     let stylesArr = [];
//     let totalClasses = {};
//     const camelCaseParser = Object.keys(stylesArr).map((key) => {
//         const newKey = key.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`);
//         return `${newKey}:${stylesArr[key]};`
//     }).join("\n");
//     data.forEach((elem) => {
//         const className = `${elem.id}`;
//         const style = elem.style ? camelCaseParser(elem.style) : camelCaseParser(elem.form.style);
//         const myStyles = styledElements[`${TypeCamelCase(elem.type)}Style`];
//         stylesArr.push(myStyles(className, style));
//         if (Array.isArray(elem.content)) { styleGenerate(elem.content); }
//         if (elem.form) {
//             let className = `.formButton1`;
//             stylesArr.push(className, `{${camelCaseParser(elem.form.submitButton.style)}}`);
//             elem.form.fields.items.forEach((i, index) => {
//                 className = `.fromInput${index}`;
//                 stylesArr.push(className, `{${camelCaseParser(elem.form.fields.style)}}`);
//             });
//         }
//     });
//     return stylesArr;
// };