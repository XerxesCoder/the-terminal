import Output from "@/components/Output";

export default function History({ history }) {
  return (
    <div className="mb-4 space-y-2">
      {history.map((item, index) => (
        <Output
          key={index}
          text={item.text}
          type={item.type}
          typewriter={item.typewriter}
          speed={item.speed}
          delay={item.delay}
        />
      ))}
    </div>
  );
}
