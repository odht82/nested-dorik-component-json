const Button = (props) => {
    return (
        <>
            {props.props === 'Subscribe' ?
                (<button className={props.className}>{props.props}</button>) :
                (<button className={props.className}>{props.props.content}</button>)
            }
        </>
    );
};

export default Button;