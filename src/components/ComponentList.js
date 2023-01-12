import useResizer from "./useResizer";
import "./Resizer.css";

function ComponentList() {
  const [ref, resizers] = useResizer();
  return (
    <section>
      <div className="c1">Component 1</div>
      <div ref={ref} className="c2">
        {" "}
        {resizers}Component 2
      </div>
      <div className="c3">Component 3</div>
    </section>
  );
}

export default ComponentList;
