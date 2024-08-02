# @stalwartszen/react-native-expo-blur

## Overview
`@stalwartszen/react-native-expo-blur` is a custom blur component for React Native, providing a smooth blur effect for both iOS and Android platforms. The component leverages `@react-native-community/blur` for iOS and `react-native-svg` for Android to achieve the blur effect, offering an elegant glassmorphism aesthetic.

## Installation
To install the package, run the following command:

```sh
npm install @stalwartszen/react-native-expo-blur
```

Additionally, make sure to install the required dependencies:

```sh
npm install @react-native-community/blur react-native-svg
```

## Usage
Here's a basic example of how to use the `Blurzen` component in your React Native project:

```jsx
import React from 'react'
import { View, Text } from 'react-native'
import Blurzen from '@stalwartszen/react-native-expo-blur'

const App = () => {
  return (
    <Blurzen intensity={15} style={{ padding: 20 }} backgroundColor="rgba(255, 255, 255, 0.6)" aopacity={0.8}>
      <View>
        <Text>Hello, World!</Text>
      </View>
    </Blurzen>
  )
}

export default App
```

## Props
- `children` (required): The content to be blurred.
- `intensity` (optional, default: `10`): The intensity of the blur effect.
- `style` (optional): Additional styles for the blur container.
- `backgroundColor` (optional, default: `'white'`): Background color to be applied on Android.
- `aopacity` (optional, default: `0.5`): Opacity of the background color on Android.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Author
Kushal Bauskar (@stalwartszen)

## Keywords
- react-native
- native
- blur
- glassmorphism
- react-native-blur
- react-native-expo-blur
- expo-blur

For any issues or feature requests, please open an issue on the [GitHub repository](https://github.com/stalwartszen/react-native-expo-blur).