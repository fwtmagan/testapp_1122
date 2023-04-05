import "./App.css";
import { useEffect, useState, useCallback } from "react";

const App = () => {
  return <Weather></Weather>;
};

const Weather = () => {
  const [data, setData] = useState([]); // JSONで返ってきたデータを保存するためのもの
  const [loading, setLoading] = useState(true); // ローディング中か否かのをフラグを設定する
  const [city, setCitycode] = useState(130000); // 都市コード用、初期値は東京エリア
  const queryWeather = useCallback(async () => {
    // useCallback(第一引数, 第二引数)
    // 第二引数の値[city]の値が変化した時のみ、コールバック内の関数が再実行される。
    const url = `https://www.jma.go.jp/bosai/forecast/data/forecast/${city}.json`;
    const response = await fetch(url);
    const jsondata = await response.json();
    // console.log(JSON.stringify(jsondata));
    // console.log(jsondata[0].timeSeries[0].areas[0].weathers);

    // 必要なデータだけをsetData()で抜き出してステートに保存する
    setData(jsondata[0].timeSeries[0].areas[0]);
    setLoading(false);
  }, [city]);
  const handleChange = (event) => {
    setCitycode(event.target.value);
    setLoading(true);
  };
  useEffect(() => {
    // コンポーネントが描画されてから実行するためuseEffectを使用する
    queryWeather();
  }, [city, queryWeather]);
  let weatherInfo;
  if (loading) {
    weatherInfo = <p>Loading</p>;
  } else {
    weatherInfo = (
      <>
        <p>{data.area.name} 明日の天気</p>
        <p>{data.weathers[0]}</p>
        <p>{data.area.name} 明後日の天気</p>
        <p>{data.weathers[1]}</p>
      </>
    );
  }

  return (
    <>
      <h1>WEATHER</h1>
      <select onChange={handleChange}>
        <option value="130000">東京</option>
        <option value="270000">大阪</option>
        <option value="016000">札幌</option>
      </select>
      {weatherInfo}
    </>
  );
};

export default App;
