let navigationInstance = null;

export function setNavigationInstance(instance) {
    navigationInstance = instance;
}

var BenaficiaryListData = [
    {
        title: 'Nguyen Minh Nhat',
        img: require('../assets/Logo-Agribank-H.png'),
        onPress: () => {navigationInstance.navigate('Home')}
    },
    {
        title: 'Le Nguyen Thanh Tai',
        img: require('../assets/Logo-Agribank-H.png'),
        onPress: () => {navigationInstance.navigate('Home')}
    },
]
export default BenaficiaryListData;