import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Section from '../Components/Section';
import { styleProcessor } from '../Utilities/StyleProcessor';


const HomePage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);
    const { styles } = styleProcessor(data);
    styleProcessor(data)

    return (
        <>
            <Helmet >
                <style>{styles}</style>
            </Helmet>

            {data.map(section => (
                <Section
                    key={section.id}
                    className={section.id}
                    content={section.content}
                />
            ))}
        </>
    );
}

export default HomePage;

