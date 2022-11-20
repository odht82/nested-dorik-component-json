import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Item from '../Components/Item';
import Section from '../Components/Section';
import { componentProcessor } from '../Utilities/ComponentProcessor';
import { styleProcessor } from '../Utilities/StyleProcessor';


const HomePage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);
    const { styles } = styleProcessor(data);

    const { sectionsArr, rowsArr, columnsArr, itemsArr } = componentProcessor(data);

    console.log(sectionsArr)
    console.log(rowsArr)
    console.log(columnsArr)
    console.log(itemsArr)
    return (
        <>
            <Helmet >
                <style>{styles}</style>
            </Helmet>

            {/* {data.map(section => (
                <Section
                    key={section.id}
                    className={section.id}
                    content={section.content}
                />
            ))} */}
            {sectionsArr.map(section =>
                <div key={section.id} className={section.id}>
                    {rowsArr.map(row =>
                        <div key={row.id} className={row.id}>
                            {columnsArr.map(column =>
                                <div key={column.id} className={column.id}>
                                    {itemsArr.map(item =>
                                        <Item
                                            key={item.id}
                                            type={item.type}
                                            titleType={item.titleType}
                                            className={item.id}
                                            attr={item.attr}
                                            content={item.content}
                                            form={item.form}
                                        />)}
                                </div>)}
                        </div>)}
                </div>
            )}
        </>
    );
}

export default HomePage;

