import { styleProcessor } from '../Utilities/StyleProcessor';
import { setStyle } from '../Utilities/StyleSetter';
import Row from './Row';

const Section = ({ className, content }) => {
    const { styles } = styleProcessor(content);
    setStyle(styles);
    return (
        <>
            <div className={className}>
                {
                    content.map(row => (
                        <Row key={row.id} className={row.id} content={row.content} />
                    )
                    )
                }
            </div>
        </>
    );
};

export default Section;