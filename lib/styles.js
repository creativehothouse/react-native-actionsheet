import { StyleSheet, Platform, Dimensions } from 'react-native';

export const hairlineWidth = StyleSheet.hairlineWidth;
export default {
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    opacity: 0.4,
    backgroundColor: 'black',
  },
  wrapper: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
    paddingBottom: Platform.OS === 'ios' && Dimensions.get('window').height >= 812 ? 34 : 15,
  },
  body: {
    backgroundColor: 'transparent',
    borderRadius: 20,
  },
  titleBox: {
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 70,
    backgroundColor: 'white',
  },
  titleText: {
    color: '#081b4b',
    fontSize: 18,
    fontWeight: '500',
  },
  messageBox: {
    height: 30,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  messageText: {
    color: '#9a9a9a',
    fontSize: 12,
  },
  buttonBox: {
    height: 50,
    marginTop: hairlineWidth,
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    backgroundColor: 'transparent',
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 18,
  },
  cancelButtonBox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    borderRadius: 20,
    marginTop: 20,
    backgroundColor: 'white',
  },
};
