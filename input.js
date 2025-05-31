export function Input({ value, onChange, placeholder }) {
  return <input value={value} onChange={onChange} placeholder={placeholder} className="p-2 rounded bg-gray-800 text-white" />;
}