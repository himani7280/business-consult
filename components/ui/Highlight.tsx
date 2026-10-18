// "Your Partner In *Business Growth*" 
export default function Highlight({
  text,
  className = "text-brand",
}: {
  text: string;
  className?: string;
}) {
  return (
    <>
      {text.split("*").map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} className={className}>
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </>
  );
}
