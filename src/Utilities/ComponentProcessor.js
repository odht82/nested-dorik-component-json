import { component } from "../Components/index";

const ComponentProcessor = ({ data }) => {
    const Compo = component[data.type];
    if (Array.isArray(data.content)) {
        return (<Compo className={data.id}><ComponentProcessor data={data.content} className={data.id} key={data.id} /></Compo>);
    } else if (Array.isArray(data)) {
        return (<>{data.map(compo => <ComponentProcessor data={compo} className={compo.id} key={compo.id} />)}</>)
    } else if (!Array.isArray(data)) {
        return (<Compo className={data.id} data={data} />);
    } else { return }
}

export default ComponentProcessor;