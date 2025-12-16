export function Button({ children, variant, className = "", ...props }) {
  const base = "px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105";
  const styles = variant === "outline"
    ? "border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:shadow-lg"
    : "bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 text-white hover:shadow-lg shadow-blue-500/50";
  return <button className={`${base} ${styles} ${className}`} {...props}>{children}</button>;
}
