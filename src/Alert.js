function Alert() {
function handleChange(event) {
    alert(event.target.value);
  }
  return (
    <>
      <h1>WEATHER</h1>
      <p>今日の天氣は</p>
      <p id="text"></p>
      <select onChange={handleChange}>
       <option value="tokyo">東京</option>
       <option value="osaka">大阪</option>
       <option value="sapporo">札幌</option>
  </select>
    </>
  )
}
export default Alert;