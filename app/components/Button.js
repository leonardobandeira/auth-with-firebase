export default function Button({ name, onClick }) {
  return (
    <button
      className="
      bg-transparent hover:bg-white hover:text-black transition-opacity
      p-2 
    text-black font-bold text-md
    border-solid border-2 border-black rounded-xl"
      onClick={onClick}
    >
      {name}
    </button>
  );
}
