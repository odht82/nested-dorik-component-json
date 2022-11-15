import { setStyle } from '../Utilities/StyleSetter';
import { styleProcessor } from '../Utilities/StyleProcessor';
import Item from './Item';

const Column = ({ className, content }) => {
    const { styles } = styleProcessor(content);
    setStyle(styles);
    return (
        <div className={className}>
            {
                content.map(item => (
                    <Item key={item.id} heading={item.titleType} type={item.type} className={item.id} attr={item.attr} content={item.content} form={item.form} />))
            }
        </div>
    );
};

export default Column;