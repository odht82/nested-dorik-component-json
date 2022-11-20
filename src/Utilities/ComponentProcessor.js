import Section from "../Components/Section";
import Row from "../Components/Row";
import Column from "../Components/Column";
import Item from "../Components/Input";
import Button from "../Components/Button";
import Form from "../Components/Form";
import Heading from "../Components/Heading";
import Text from "../Components/Text";
import Image from "../Components/Image";

const component = {
    Section,
    Row,
    Column,
    Item,
    Button,
    Form,
    Heading,
    Text,
    Image
}
export default component;

const components = (type, props, className) => {
    let Compo = component[type.charAt(0).toUpperCase() + type.slice(1)];
    return <Compo className={className} props={props} />;
};

export const componentProcessor = (data) => {
    if (Array.isArray(data.content)) {
        const Compo = component[data.type.charAt(0).toUpperCase() + data.type.slice(1)];
        return (
            <Compo className={data.id}>
                {componentProcessor(data.content)}
            </Compo>
        );
    } else if (Array.isArray(data)) {
        return data.map((el) => componentProcessor(el));
    } else {
        if (data.form) {
            return components("Form", data.form, data.id);
        } else if (!data.form) {
            return components(data.type, data, data.id);
        } else { return }
    }
}