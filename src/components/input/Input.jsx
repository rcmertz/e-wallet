export default function Input (id, type, minlenght, maxlenght, text) {
  <label htmlFor={id}>
    {text}
    <input 
      type={type} 
      minlenght={minlenght}
      maxlenght={maxlenght}
    />
  </label>
}