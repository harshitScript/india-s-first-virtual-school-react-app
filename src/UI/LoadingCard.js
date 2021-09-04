import Card from "./Card";
const LoadingCard = (props) => {
  return (
    <Card className={props.className}>
      <lord-icon
        src="https://cdn.lordicon.com/ulhdumaq.json"
        trigger="loop"
        colors="primary:#ffffff,secondary:#ffffff"
        style={{ width: "100px", height: "100px" }}
      ></lord-icon>
    </Card>
  );
};
export default LoadingCard;
