import Button from './Button';
import Input from './Input';

const Subscription = ({ data, className }) => {
    return (
        <form className={className}>
            {data.form.fields.items.map((item) =>
                <Input key={item.id} data={item} className={item.id} />
            )}
            <Button
                key={data.form.submitButton.id}
                data={data.form.submitButton}
                className={data.form.submitButton.id}
            />
        </form>
    );
};

export default Subscription;
