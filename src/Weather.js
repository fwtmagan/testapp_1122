// const [data, setData] = useState([]);

function App () {
  return <Weather></Weather>
}

function Weather() {
  async function queryWeather () {
    const url = "https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json";
    const response = await fetch(url);
    const jsondata = await response.json();
    document.getElementById('text').innerHTML = `<p>${jsondata[0].timeSeries[0].areas[0].weathers[0]}</p>`
    // console.log(JSON.stringify(jsondata));
    console.log(jsondata[0].timeSeries[0].areas[0].weathers)
  }
  function handleChange() {
    queryWeather();
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

export default App;