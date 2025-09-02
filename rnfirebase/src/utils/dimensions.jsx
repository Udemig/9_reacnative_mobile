const { Dimensions } = require("react-native")

const DESIGN_WIDTH = 428
const DESIGN_HEIGHT = 816

// tasarımdaki boyutu, bizim cihazımızın boyutlarına uyarlayan fonksiyon
const verticalScale = (px) =>  (px * Dimensions.get('screen').height) / DESIGN_HEIGHT
const horizontalScale = (px) => (px * Dimensions.get('screen').width) / DESIGN_WIDTH
const fontScale = (px) => (Dimensions.get('screen').width / DESIGN_WIDTH) * px

export {verticalScale, horizontalScale, fontScale}