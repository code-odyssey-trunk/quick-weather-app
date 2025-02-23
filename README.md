# Weather App

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). This weather app fetches weather data using the WeatherAPI.

## Getting Started

Follow these steps to set up the project locally:

### 1. Clone the Repository

Clone the repository to your local machine:

`git clone <repository-url>`
`cd weather-app`

### 2. Install Dependencies

Install the required dependencies using npm or your preferred package manager:

`npm install`


### 3. Set Up Environment Variables

Create a `.env.local` file in the root of your project and add your Weather API key:

'WEATHER_API_KEY=your_api_key_here'


Make sure to replace `your_api_key_here` with your actual API key from [WeatherAPI](https://www.weatherapi.com/).

### 4. Run the Development Server

Start the development server:

`npm run dev`


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 5. Using the Weather App

- Enter a city name in the input field and click the "Get Weather" button to fetch the current weather data.
- If the location is invalid, an error message will be displayed.
- You can clear the input and results by clicking the "Clear" button.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.