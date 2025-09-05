export function Button({ children, variant }) {
  const base = "px-4 py-2 rounded-lg font-semibold";
  const styles = variant === "outline"
    ? "border border-blue-600 text-blue-600 hover:bg-blue-50"
    : "bg-blue-600 text-white hover:bg-blue-700";
  return <button className={`${base} ${styles}`}>{children}</button>;
}
