export default function Select({ id, type, children }) {
    return (
      <label htmlFor={id}>
        {children}
        <select name="select">
            <option value="valor1"></option>
            <option value="valor2" selected></option>
            <option value="valor3"></option>
        </select>
      </label>
    )
  }