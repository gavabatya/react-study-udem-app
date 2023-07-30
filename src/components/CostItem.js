import "./CostItem.css";

function CostItem() {
  const costDate = new Date(2023, 2, 12);
  const costDiscription = "Холодильник";
  const costAmount = 999.99;
  return (
    <div className="cost-item">
      <div>{costDate.toDateString()}</div>
      <div className="cost-item__description">
        <h2>{costDiscription}</h2>
        <div className="cost-item__price">${costAmount}</div>
      </div>
    </div>
  );
}

export default CostItem;
