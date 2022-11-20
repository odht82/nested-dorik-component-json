import Button from './Button';
import Input from './Input';

const Form = (props) => {
    return (
        <>
            <form className={props.className}>
                {props.props.fields.items.map((item) =>
                    <Input key={item.id} props={item} className={item.className} />
                )}
                <Button
                    key={props.props.className}
                    props={props.props.submitButton.content}
                    className={props.props.submitButton.id}
                />
            </form>
        </>
    );
};

export default Form;