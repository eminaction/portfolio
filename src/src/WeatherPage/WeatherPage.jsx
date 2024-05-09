import "./WeatherPage.css";

export default function WeatherPage() {
  return (
    <>
      <div className="weather-page">
        <div className="header">
          <h1>Weather Wizard ⛅️</h1>

          <div className="tech">
            <p>Typescript</p>
            <p>React</p>
            <p>Vite</p>
            <p>API</p>
            <p>CSS</p>
          </div>
        </div>
        <div className="plan">
          <p>
            <b>Goal:</b> The aim of this project was to create a sleek way to
            display weather data for any city.
          </p>
          <br />
          <p className="mvp">
            <b>MVP1:</b> Use an API to fetch data to show the current
            temperature in a city
          </p>
          <p className="stretch-goals">
            <b>Stretch Goals:</b>
            <br />
            <br />
            1. Display more information other than temperature, eg cloud and
            rain
            <br />
            <br />
            2. Add styling using CSS
            <br />
            <br />
            3. Add sharing functionality to allow users to share with friends
          </p>
          <p>
            <b>Plan:</b>
            <br />
            <br />
            1. Create Vite app using typescript
            <br />
            <br />
            2. Decide on API to use to fetch weather data
            <br />
            <br />
            3. Break up app into different components; Header, Search & results,
            Share, Footer
            <br />
            <br />
            4. Header: add app header
            <br />
            <br />
            5. Search
            <ul>
              <li>Install SWR</li>
              <li>Fetch data from API using SWR </li>
              <li>Handle loading and errors </li>
              <li>Update state of city to input </li>
              <li>Click search button to show results</li>
              <li>Display results</li>
            </ul>
            <br />
            6. Stretch Goals:
            <ul>
              <li>
                Share: Import FacebookShare, WhatsappShare, TwitterShare from
                REACT share kit{" "}
              </li>
              <li>
                CSS: Added design and styling eg background colours emojis etc.{" "}
              </li>
            </ul>
          </p>
        </div>
        <h3>FINAL PRODUCT</h3>
        <div className="iteration-images">
          <div>
            <img src="./weather-app1.png" />
            <figcaption>Iteration 1</figcaption>
          </div>
          <span>→</span>
          <div>
            <img src="./weather-app2.png" />
            <figcaption>Iteration 2</figcaption>
          </div>
        </div>

        <a
          href="https://weather-app-eminactions-projects.vercel.app"
          target="_blank"
        >
          <button>Visit Site</button>
        </a>
      </div>
    </>
  );
}
