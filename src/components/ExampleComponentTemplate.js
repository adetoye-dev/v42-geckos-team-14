function ExampleComponentTemplate(props) {

    return (
        <div className={`${props.className}`} id={`${props.id}`}>
            Example
        </div>
    );
}

export default ExampleComponentTemplate;