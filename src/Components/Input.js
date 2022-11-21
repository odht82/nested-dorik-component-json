const Input = (props) => {
    return (
        <>
            <label>{props.props.label}</label>
            <input className={props.props.id} placeholder={props.props.attr.placeholder} />
        </>
    );
};
export default Input;