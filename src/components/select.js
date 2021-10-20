
export default function Select(props) {
	const data = props.data;
	function onChange(event) {
		props.change(event.target.value);
	}
	return (
		<select onChange={onChange}  class="form-select mt-2">
			<option key="all" selected>All</option>
			{
		        Object.keys(data).map((key, index) => (
		         <option key={key} value={key}>{data[key]}</option>
		        ))
		      }
		</select>
	);
}