const Button = ({ data, className }) => {
    return (<button className={className}>{data.content}</button>);
};

export default Button;