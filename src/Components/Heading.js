import parse from "html-react-parser";
const Heading = ({ heading, className, content }) => {

    return (
        <>
            {heading === "h1" && <h1 className={className}>{parse(content)}</h1>}
            {heading === "h2" && <h2 className={className}>{parse(content)}</h2>}
            {heading === "h3" && <h3 className={className}>{parse(content)}</h3>}
            {heading === "h4" && <h4 className={className}>{parse(content)}</h4>}
            {heading === "h5" && <h5 className={className}>{parse(content)}</h5>}
            {heading === "h6" && <h6 className={className}>{parse(content)}</h6>}
        </>
    );
};

export default Heading;