import { setStyle } from '../Utilities/StyleSetter';
import { formStyleProcessor } from "../Utilities/formStyleProcessor";

const Form = ({ className, content, form }) => {
    const { subscriptionFormStyles } = formStyleProcessor(form);
    setStyle(subscriptionFormStyles);
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