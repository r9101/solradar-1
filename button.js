export function Button({ onClick, children, disabled }) {
  return <button onClick={onClick} disabled={disabled} className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded shadow-lg">{children}</button>;
}