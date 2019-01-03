import { StyleSheet, PixelRatio } from 'react-native'
import { getHeightPercent } from './ratio'

export default StyleSheet.create({
  container: {},
  modalContainer: {
 //   backgroundColor: '#001f33',
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  //  backgroundColor: '#001f33',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    marginBottom: 7
  },
  input: {
    height: 48,
    width: '70%',
    color: 'white',
  },
  inputOnly: {
    marginLeft: '15%',
  },
  touchFlag: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 19,
    backgroundColor: 'transparent',
  },
  imgStyle: {
    resizeMode: 'contain',
    width: 20,
    height: 20,
    borderWidth: 1 / PixelRatio.get(),
    borderColor: 'transparent',
    opacity: 0.8,
  },
  emojiFlag: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    width: 30,
    height: 30,
    borderWidth: 1 / PixelRatio.get(),
    borderColor: 'transparent',
    backgroundColor: 'transparent',
  },
  itemCountry: {
    flexDirection: 'row',
    height: getHeightPercent(7),
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  itemCountryFlag: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '5%',
    width: '15%',
    paddingBottom: 7
  },
  itemCountryName: {
   // justifyContent: 'space-between',
    flexDirection:'row',
    marginHorizontal:10,
    width: '90%',
    borderBottomWidth: 2 / PixelRatio.get(),
    borderBottomColor: '#ccc',
    height: 20,
  },
  countryName: {
    fontSize: getHeightPercent(2.5),
    color: 'black',
    marginLeft: 10
  },
  scrollView: {
    flex: 1,
  },
  letters: {
    marginRight: 10,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  
  },
  letter: {
    height: 25,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  letterText: {
    textAlign: 'center',
    fontSize: getHeightPercent(2.2),
  //  color: 'white',
  },
  closeButton: {
    height: 48,
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButtonImage: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
    tintColor: 'black',
  },
  title: {
    fontSize: getHeightPercent(3.7),
    color: 'black',
    fontWeight: 'bold'
  }
})
