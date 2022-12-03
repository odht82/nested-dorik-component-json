// import component, { componentProcessor } from '../Utilities/ComponentProcessor';
import Section from "../Components/Section";
import Row from "../Components/Row";
import Column from "../Components/Column";
import Item from "../Components/Input";
import Button from "../Components/Button";
import Form from "../Components/Form";
import Heading from "../Components/Heading";
import Text from "../Components/Text";
import Image from "../Components/Image";
const component = { Section, Row, Column, Item, Button, Form, Heading, Text, Image }

const HomePage = ({ data }) => {
    if (Array.isArray(data.content)) {
        const Compo = component[data.name];
        return (
            <Compo className={data.id}>
                <HomePage data={data.content} className={data.id} key={data.id} />
            </Compo>
        );
    } else if (Array.isArray(data)) {
        return (
            <>
                {data.map(compo => <HomePage data={compo} className={compo.id} key={compo.id} />)}
            </>
        )
    } else if (!Array.isArray(data.content)) {
        const Elem = component[data.name]
        return (
            <>
                <Elem data={data.content} className={data.id} key={data.id} />
            </>
        )
    } else { return }
}

export default HomePage;

