import parse from "html-react-parser";

const Text = ({ className, content }) => {

    return (
        <>
            <p className={className}>{parse(content)}</p>
        </>
    );
};

export default Text;