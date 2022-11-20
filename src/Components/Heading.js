import parse from "html-react-parser";
const Heading = ({ titleType, className, content }) => {

    return (
        <>
            {titleType === "h1" && <h1 className={className}>{parse(content)}</h1>}
            {titleType === "h2" && <h2 className={className}>{parse(content)}</h2>}
            {titleType === "h3" && <h3 className={className}>{parse(content)}</h3>}
            {titleType === "h4" && <h4 className={className}>{parse(content)}</h4>}
            {titleType === "h5" && <h5 className={className}>{parse(content)}</h5>}
            {titleType === "h6" && <h6 className={className}>{parse(content)}</h6>}
        </>
    );
};

export default Heading;