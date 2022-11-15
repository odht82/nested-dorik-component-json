import { useEffect, useState } from 'react';
import Section from '../Components/Section';
import { setStyle } from '../Utilities/StyleSetter';
import { styleProcessor } from '../Utilities/StyleProcessor';


const HomePage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);
    const { styles } = styleProcessor(data);
    setStyle(styles);

    return (
        <>
            {/* <Helmet>
                <style>{styles}</style>
            </Helmet> */}

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


// return (
//     <>
//         <Helmet>
//             <style>{styles}</style>
//         </Helmet>
//         {properties.map((prop) => (
//             <ComponentProcessor
//                 key={prop.id}
//                 properties={prop}
//             />
//         ))}
//     </>
// );
// [
//     {
//         "type": "text",
//         "tag": "h1",
//         "className": "heading963h1",
//         "content": "<p>This is all about how we use dorik element for creating our site.</p>"
//     },
//     {
//         "type": "img",
//         "tag": "img",
//         "className": "image8570",
//         "src": "https://images.unsplash.com/photo-1667318994695-2f564f09e5cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
//         "alt": "Unsplash illustration image"
//     },
//     {
//         "type": "text",
//         "tag": "h2",
//         "className": "heading6493h2",
//         "content": "<p>We have used h1 as our first title and h2 for this title</p>"
//     },
//     {
//         "type": "text",
//         "tag": "h3",
//         "className": "heading6618h3",
//         "content": "<p>We can use h1 to h6</p>"
//     },
//     {
//         "type": "text",
//         "tag": "p",
//         "className": "text5747",
//         "content": "<p>We can use text element to use as a paragraph.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>"
//     },
//     {
//         "type": "img",
//         "tag": "img",
//         "className": "image2504",
//         "src": "https://images.unsplash.com/photo-1517926112623-f32a800790d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
//         "alt": "My fav image"
//     },
//     {
//         "type": "form",
//         "tag": "form",
//         "className": "Form365",
//         "itemComponents": [
//             {
//                 "id": "1",
//                 "placeholder": "Email Address",
//                 "className": "Item506",
//                 "tag": "input"
//             },
//             {
//                 "id": "g9itsign",
//                 "placeholder": "First Name",
//                 "className": "Item506",
//                 "tag": "input"
//             }
//         ],
//         "buttonComponent": {
//             "content": "Subscribe",
//             "className": "Btn846",
//             "tag": "button"
//         }
//     }
// ]