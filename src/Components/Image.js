const Image = (props) => {
    return (
        <>
            <img className={props.props.id} src={props.props.attr.src} alt={props.props.attr.alt}></img>
        </>
    );
};
export default Image;