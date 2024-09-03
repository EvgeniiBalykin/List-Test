import "./Block.css";
const Block = ({ bgColor }: { className?: string; bgColor?: string }) => {
  return (
    <div
      className="block"
      style={{
        backgroundColor: bgColor,
      }}
    />
  );
};

export default Block;
