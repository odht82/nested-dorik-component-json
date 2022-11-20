import parse from "html-react-parser";
const Heading = (props) => {
    return (
        <>
            {props.props.titleType === "h1" && <h1 className={props.className}>{parse(props.props.content)}</h1>}
            {props.props.titleType === "h2" && <h2 className={props.className}>{parse(props.props.content)}</h2>}
            {props.props.titleType === "h3" && <h3 className={props.className}>{parse(props.props.content)}</h3>}
            {props.props.titleType === "h4" && <h4 className={props.className}>{parse(props.props.content)}</h4>}
            {props.props.titleType === "h5" && <h5 className={props.className}>{parse(props.props.content)}</h5>}
            {props.props.titleType === "h6" && <h6 className={props.className}>{parse(props.props.content)}</h6>}
        </>
    );
};

export default Heading;