export default function Button({ name, onClick }) {
  return (
    <button
      className="
      bg-transparent hover:bg-white hover:text-gray-800 transition-opacity
      p-2 
    text-gray-800 font-bold text-md
    border-solid border-2 border-gray-800 rounded-xl"
      onClick={onClick}
    >
      {name}
    </button>
  );
}
