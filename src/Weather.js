// const [data, setData] = useState([]);

function Weather() {
  function handleChange(){
    
  }
  return (
    <>
      <h1>WEATHER</h1>
      <p>今日の天氣</p>
      <select onChange={handleChange}>
       <option value="tokyo">東京</option>
       <option value="osaka">大阪</option>
       <option value="sapporo">札幌</option>
  </select>
    </>
  )
}

export default Weather;