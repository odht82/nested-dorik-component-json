import parse from "html-react-parser";
const Text = ({ data, className }) => {
    return (<p className={className}>{parse(data.content)}</p>);
};

export default Text;