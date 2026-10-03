export default function ListComponent() {
  const items = ["Item 1", "Item 2", "Item 3"];

  return (
    <>
      {items.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </>
  );
}
