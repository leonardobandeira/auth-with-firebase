export default function Button({ name, type, value, onChange, placeholder }) {
  return (
    <div className="flex flex-col gap-1 shadow-lg">
      <label className="text-lg font-bold ">{name}</label>
      <input
        className="text-black p-2 rounded-lg"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}
