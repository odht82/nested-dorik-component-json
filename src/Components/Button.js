const Button = ({ data, className }) => {
    return (
        <>
            {data.props === 'Subscribe' ?
                (<button className={className}>{data}</button>) :
                (<button className={className}>{data.content}</button>)
            }
        </>
    );
};

export default Button;