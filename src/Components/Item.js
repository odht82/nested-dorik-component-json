import Image from './Image'
import Text from './Text'
import Heading from './Heading'
import Form from './Form'
import Button from './Button';

const Item = ({ type, heading, className, attr, content, form }) => {

    return (
        <>
            {type === "image" && <Image className={className} attr={attr} />}
            {type === "text" && <Text className={className} content={content} />}
            {type === "heading" && <Heading heading={heading} className={className} content={content} />}
            {type === "subscription" && <Form className={className} form={form} />}
            {type === "button" && <Button className={className} content={content} />}
        </>
    );
};

export default Item;