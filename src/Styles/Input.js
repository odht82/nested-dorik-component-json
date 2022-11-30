const Input = ({ data, className }) => {
    return (
        <>
            <label>{data.label}</label>
            <input className={className} placeholder={data.attr.placeholder} />
        </>
    );
};
export default Input;