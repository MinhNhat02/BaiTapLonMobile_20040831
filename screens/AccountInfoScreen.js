import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function AccountInfoScreen() {
  const route = useRoute();
  const { userData } = route.params || {};

  return (
    <View style={styles.container}>
      {/* Avatar Section */}
      <View style={styles.avatarContainer}>
        <Image
          source={require('../assets/iconAvata.png')} // Thay đổi với đường dẫn ảnh avatar
          style={styles.avatar}
        />
      </View>

    

      {/* Tab Section */}
      <View style={styles.tabContainer}>
        <TouchableOpacity style={[styles.tabButton, styles.activeTab]}>
          <Text style={styles.tabTextActive}>Thanh toán</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Text style={styles.tabText}>Tiền gửi</Text>
        </TouchableOpacity>
      </View>

      {/* Content Section */}
      <Text style={styles.sectionTitle}>Quản lý nickname tài khoản</Text>
      <TouchableOpacity style={styles.accountBox}>
        <View>
          <Text style={styles.accountLabel}>Tài khoản thanh toán</Text>
          <Text style={styles.accountNumber}>
            {userData?.accountNumber || '6500205163687'}
          </Text>
        </View>
        <View>
          <Text style={styles.accountBalance}>
            {userData?.balance ? `${userData.balance} VND` : '4,550,000 VND'}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  avatarContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#b91350',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#b91350',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  backButton: {
    color: '#fff',
    fontSize: 20,
    marginRight: 10,
  },
  icon: {
    width: 24, // Kích thước icon
    height: 24,
    marginHorizontal: 8, // Khoảng cách với nút Back và tiêu đề
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1, // Để căn giữa tiêu đề với icon
    textAlign: 'left',
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#f4f4f4',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: '#b91350',
  },
  tabText: {
    fontSize: 16,
    color: '#888',
  },
  tabTextActive: {
    fontSize: 16,
    color: '#b91350',
    fontWeight: 'bold',
  },
  sectionTitle: {
    marginTop: 16,
    marginLeft: 16,
    color: '#b91350',
    fontSize: 18,
    fontWeight: 'bold',
  },
  accountBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginVertical: 16,
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#f0b90b',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  accountLabel: {
    color: '#888',
    fontSize: 14,
    marginBottom: 4,
  },
  accountNumber: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  accountBalance: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
