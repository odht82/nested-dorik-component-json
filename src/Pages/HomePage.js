import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import component, { componentProcessor } from '../Utilities/ComponentProcessor';
import { styleProcessor } from '../Utilities/StyleProcessor';

const HomePage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);
    const { styles } = styleProcessor(data);
    return (
        <>
            <Helmet >
                <style>{styles}</style>
            </Helmet>
            {componentProcessor(data, component, data.id).map((el) => el)}
        </>
    );
}

export default HomePage;

