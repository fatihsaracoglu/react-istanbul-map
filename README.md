# React Istanbul Map

An Istanbul map implemented on React.

![demo](https://i.imgur.com/FiWIq5H.gif)
# Installation

```$ npm install react-istanbul-map```

or

```$ yarn add react-istanbul-map```

## Usage

Import the package in your component:

```javascript
import IstanbulMap from 'react-istanbul-map'
```

### Using with default props

```javascript
<IstanbulMap />
```

**NOTE:** Make sure that you imported Bootstrap CSS file as below:

```javascript
import 'bootstrap/dist/css/bootstrap.min.css'
```

## Styling

| Name   |      Description      |  Default |
|----------|:-------------:|------:|
| mapColor | The color of districts without hover | #708090 |
| hoverColor | The color of districts with hover | #F9D342 |


```javascript
<IstanbulMap
  mapColor="#colorCode"
  hoverColor="#colorCode"
/>
```

## Custom Data

You can use your data in the format as below:

```javascript
const customData = [
  {
    name: "TUZLA",
    content: "Nüfus: 267.400 (2019)"
  },
  {
    name: "PENDİK",
    content: "Nüfus: 711.894 (2019)"
  },
  ...
];
```

Use your custom data in data prop:

```javascript
<IstanbulMap
  data={customData}
/>
```

![app-demo](https://i.imgur.com/dYIUu7H.png)
**NOTE:** If you don't provide any data, only the name of each district will be shown by default.  

## API

### props

| Name   |      Description      |  Default |
|----------|:-------------:|------:|
| isHoverable | If it's hoverable, the district names with/without additional content will be shown | true |
| mapWidth | The width of viewport for SVG | 1000px |
| mapHeight | The height of viewport for SVG | 700px |
| viewBox | The viewbox for SVG | 70 25 80 60 |

## License

This project is licensed under MIT (https://opensource.org/licenses/MIT)
