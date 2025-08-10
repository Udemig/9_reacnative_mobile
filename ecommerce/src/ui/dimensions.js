import { Dimensions } from 'react-native';

// Ekranın genişlik ve yüksekliğine eriş
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

// Erişilen genişlik ve yüksekliği dosya dışarısına çıkar
export { screenWidth, screenHeight };
