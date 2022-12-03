const Column = ({ data, className }) => {
    return (
        <div className={className}>
            {data.children}
        </div>
    );
};

export default Column;