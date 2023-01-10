function ComponentList(props) {
    return (
      <section onClick={props.onSelectComponent}>
        <div className="c1" id="c1">Component 1</div>
        <div className="c2" id="c2">Component 2</div>
        <div className="c3" id="c3">Component 3</div>
      </section>
    );
}

export default ComponentList;
