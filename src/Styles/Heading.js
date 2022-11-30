import parse from "html-react-parser";
const Heading = ({ data, className }) => {
    const Title = data.titleType;
    return (<Title className={className}>{parse(data.content)}</Title>);
};

export default Heading;