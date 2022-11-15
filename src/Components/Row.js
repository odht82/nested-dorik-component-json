import { setStyle } from '../Utilities/StyleSetter';
import { styleProcessor } from '../Utilities/StyleProcessor';
import Column from './Column';

const Row = ({ className, content }) => {
    const { styles } = styleProcessor(content);
    setStyle(styles);
    return (
        <div className={className}>
            {
                content.map(column => (
                    <Column key={column.id} className={column.id} content={column.content} />
                ))
            }
        </div>
    );
};

export default Row;