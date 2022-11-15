let Style = document.createElement('style');
document.getElementsByTagName('head')[0].appendChild(Style)
export const setStyle = (styleStr) => {
    if (typeof styleStr === 'string') {
        Style.appendChild(document.createTextNode(styleStr))
    }
}