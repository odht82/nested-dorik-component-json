import Row from './Row';

const Section = ({ className, content }) => {
    return (
        <>
            {/* <div className={className}>
                {
                    content.map(row => (
                        <Row
                            key={row.id}
                            className={row.id}
                        // content={row.content}
                        />
                    )
                    )
                }
            </div> */}
        </>
    );
};

export default Section;