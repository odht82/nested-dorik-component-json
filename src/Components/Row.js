import Column from './Column';

const Row = ({ className, content }) => {
    return (
        <div className={className}>
            {
                content.map(column => (
                    <Column
                        key={column.id}
                        className={column.id}
                    // content={column.content}
                    />
                ))
            }
        </div>
    );
};

export default Row;