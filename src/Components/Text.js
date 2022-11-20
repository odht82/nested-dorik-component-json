import parse from "html-react-parser";
const Text = (props) => {
    return (
        <>
            <p className={props.className}>{parse(props.props.content)}</p>
        </>
    );
};

export default Text;