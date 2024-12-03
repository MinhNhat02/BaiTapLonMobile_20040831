let navigationInstance = null;

export function setNavigationInstance(instance) {
    navigationInstance = instance;
}

var financeList = [
    {
        title: 'Nguyen Van A',
        stk : '6500205163687 ',
        img: require('../assets/ck1.png'),
        onPress: () => {navigationInstance.navigate('Chuyển')},
        name : 'CK nội bộ',
        screen : 'Chuyển'
    },
    {
        title: 'Tran Van B',
        stk : '6500205163687 ',
        img: require('../assets/ck2.png'),
        onPress: () => {navigationInstance.navigate('Thông tin')},
        name : 'CK LNH nhanh qua stk',
        screen : 'Thông tin'
    },
    {
        title: 'Vo Van C',
        stk : '6500205163687 ',
        img: require('../assets/ck3.png'),
        onPress: () => {navigationInstance.navigate('Thông tin')},
        name : 'CK LNH nhanh qua số thẻ',
        screen : 'Thông tin'

    },
    {
        title: 'Nguyen Minh Nhat',
        stk : '6500205163687',
        img: require('../assets/ck4.png'),
        onPress: () => {navigationInstance.navigate('Thông tin')},
        name : 'Chuyển tiền 24/7 mã QR',
        screen : 'Thông tin'

    },
    {
        title: 'Le Nguyen Thanh Tai',
        stk : '6500205163687 ',
        img: require('../assets/ck5.png'),
        onPress: () => {navigationInstance.navigate('Thông tin')},
        name : 'CK LNH thường',
        screen : 'Thông tin'

    },
 
]
export default financeList;