
export default function Child(props) {
    function handleChange(event) {
        // Here, we invoke the callback with the new value
        props.onChangeInput(event.target.value);
    }
  
    return <input value={props.value} onChange={handleChange} />
}