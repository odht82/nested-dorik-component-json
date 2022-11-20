const Image = ({ className, attr }) => {

    return (
        <>
            <img className={className} src={attr.src} alt={attr.alt}></img>
        </>
    );
};
export default Image;