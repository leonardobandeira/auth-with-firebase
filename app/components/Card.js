export default function Card({ children }) {
  return (
    <div
      className={`
        w-auto md:w-1/4 flex flex-col justify-center gap-8
        border-solid border-2 border-black rounded-xl
        shadow-lg
        p-4
      `}
    >
      {children}
    </div>
  );
}
