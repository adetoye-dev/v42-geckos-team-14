import ExampleComponentTemplate  from "./ExampleComponentTemplate";

function ComponentList(props) {
    return (
      <section id="ComponentList" onClick={props.onSelectComponent}>
        <ExampleComponentTemplate className="c1" id="c1" />
        <div className="c2" id="c2">Component 2</div>
        <div className="c3" id="c3">Component 3</div>
      </section>
    );
}

export default ComponentList;
