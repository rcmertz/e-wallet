export default function Input({ id, type, minlenght, maxlenght, children }) {
  return (
    <label htmlFor={id}>
      {children}
      <input
        id={id}
        type={type}
        minlenght={minlenght}
        maxlenght={maxlenght}
      />
    </label>
  )
}