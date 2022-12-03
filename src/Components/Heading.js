import parse from "html-react-parser";
const Heading = ({ data, className }) => {
    const Heading = data.titleType;
    return (
        <Heading className={className}>{parse(data.content)}</Heading>
    );
};

export default Heading;