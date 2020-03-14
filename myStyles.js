import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    myButtonMargin: {
        width: 120,
        // height: 50,
        marginVertical: 25,
        marginHorizontal: 50,
        // backgroundColor: 'black',
        alignSelf: 'center'
    },
    customTitle: {
        color: 'red'
    },
    header: {
        flex: 0.3,
        flexDirection: 'row',
        // justifyContent: 'space-between',
        justifyContent: 'flex-start',
        borderBottomWidth: 1,
        marginVertical: 30
    }
  });