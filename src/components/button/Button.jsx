export default function Button({id, onClick, children}){
  
  return(
    <div>
      <button id={id} onClick={onClick}>
        {children}
      </button>
    </div>
  )
}