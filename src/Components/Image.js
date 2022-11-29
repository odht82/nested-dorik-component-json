const Image = ({ data, className }) => {
    return (<img className={className} src={data.attr.src} alt={data.attr.alt} />);
};
export default Image;