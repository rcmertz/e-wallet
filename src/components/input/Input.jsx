export default function Input({ id, className, type, minlenght, maxlenght, children }) {
  return (
    <label htmlFor={id}>
      {children}
      <input
        id={id}
        className={className}
        type={type}
        minlenght={minlenght}
        maxlenght={maxlenght}
      />
    </label>
  )
}