const Section = ({ data, className }) => {
    return (
        <div className={className}>
            {data?.children}
        </div>
    );
};

export default Section;