import Button from './Button';
import Input from './Input';

const Form = ({ data, className }) => {
    return (
        <form className={className}>
            {data.fields.items.map((item) =>
                <Input key={item.id} props={item} className={item.className} />
            )}
            <Button
                key={data.className}
                props={data.submitButton.content}
                className={data.submitButton.id}
            />
        </form>
    );
};

export default Form;