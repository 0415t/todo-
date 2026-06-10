import { useEffect, useState } from 'react';

const API_KEY = '40a41981d7c0f502b27003b9dbea5a15';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const FORECAST_URL = 'https://api.openweathermap.org/data/2.5/forecast';

const Weather = () => {

    const [city,setCity] = useState("");
    const [weather,setWeather] = useState(null);
    const [error,setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            if (!city) return;

        try {
            const[weatherResponse, forecastResponse] = await Promise.all([
                axios.get(BASE_URL, {params: {q:city,appid:API_KEY,units:"metric",lang:"ja"}}),
                axios.get(FORECAST_URL, {params: {q:city,appid:API_KEY, units:  "metric", lang:"ja"}}),
            ]);
        setWeather({...weatherResponse.data,forecast:forecastResponse.data});
        setError(null);
        }catch(error){
            setWeather(null);
            setError("都市名を正しく入力してください");
        }
    };
    fetchData();
},[city]);

    const getWeatherIcon  = (weatherCondition) => {
        const iconMap = {
        };
        return iconMap[weatherCondition] || null;
    };

    const formatDateTime = (dateTimesString) => {
        return new Date(dateTimesString).toLocaleDateString("ja-JP",{month: "long",day: "numeric"});
    }

    return(
        <div>
            {/*検索バー*/}

            <div>
                    <h1>地域検索</h1>
            </div>
            <div>
                <input 
                    type="text"
                    placeholder='地域を入力'
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
            </div>
            {/*エラーメッセージ*/}
            {error && <p className="help is-danger">{error}</p>}
            {/*天気情報*/}
            <h2>{weather.name}</h2>
            <P>FormatDateTime{weather.forecast.list[0].dt_txt}</P>
            <div>
                {getWeatherIcon(weather.weather[0].main)}
                <p>{wather.wather[0].description}</p>
            </div>
            {weather && (
                <div>
                    <div>
                        {getWeatherIcon(weatherData.wather[0].main)}
                        <p>{weather.weather[0].description}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Weather;