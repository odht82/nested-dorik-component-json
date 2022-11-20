const Form = ({ className, content, form }) => {
    return (
        <>
            <form className={className}>
                {form.fields.items.map((item) => <input key={item.id} className={item.id} placeholder={item.attr.placeholder}></input>)}
                <button className={form.submitButton.id}>{form.submitButton.content}</button>
            </form>
        </>
    );
};

export default Form;