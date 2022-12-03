const Subscription = (className, style) => {
    const defaultStyles = ``
    const regularStyles = `${style}`

    return `.${className} {${defaultStyles}${regularStyles} } `
};

export default Subscription;




// import Button from './Button';
// import Input from './Input';

// const Subscription = ({ data, className }) => {
//     return (
//         <form className={className}>
//             {data.form.fields.items.map((item) =>
//                 <Input key={item.id} data={item} className={item.id} />
//             )}
//             <Button
//                 key={data.form.submitButton.id}
//                 data={data.form.submitButton}
//                 className={data.form.submitButton.id}
//             />
//         </form>
//     );
// };

// export default Subscription;
