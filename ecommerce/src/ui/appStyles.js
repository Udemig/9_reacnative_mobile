import { StyleSheet } from 'react-native';
import AppColors from './appColors';

const AppStyles = StyleSheet.create({
  // Global Styles
  container: {
    flex: 1,
    backgroundColor: AppColors.white,
  },
  centerContainer: {
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: AppColors.error,
    marginBottom: 12,
  },
  retryButton: {
    backgroundColor: AppColors.primary,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 15,
  },
  retryText: {
    color: AppColors.white,
    fontSize: 14,
    fontWeight: '600',
  },
  wrapper: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowBetween: {
    justifyContent: 'space-between',
  },
  rowAround: {
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
    color: AppColors.textPrimary,
  },
  subtitle: {
    fontSize: 16,
    color: AppColors.textSecondary,
    marginTop: 4,
  },

  // Header
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 13,
  },

  icon: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: AppColors.notificationDot,
    width: 15,
    height: 15,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  badgeText: {
    fontSize: 10,
    color: AppColors.white,
    fontWeight: 500,
  },

  // Banner
  bannerCard: {
    backgroundColor: AppColors.lightGray,
    borderRadius: 20,
    paddingHorizontal: 16,
    height: 140,
    marginHorizontal: 10,
    marginVertical: 15,
  },
  bannerTextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  bannerTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: AppColors.textPrimary,
  },
  bannerSubtitle: {
    fontSize: 13,
    color: AppColors.textSecondary,
    marginTop: 4,
  },
  bannerImage: {
    width: 90,
    height: 90,
    borderRadius: 10,
    resizeMode: 'contain',
    marginLeft: 12,
  },
  // Products Top
  productsTop: {
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  productsTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: AppColors.textPrimary,
  },
  button: {
    color: AppColors.link,
    fontSize: 15,
    fontWeight: '600',
  },
  // Products Wrapper
  productsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  productCard: {
    backgroundColor: AppColors.white,
    padding: 12,
    width: '48%',
    shadowColor: AppColors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    marginBottom: 12,
    borderRadius: 16,
    position: 'relative',
  },
  productImage: {
    width: '100%',
    height: 140,
    marginBottom: 12,
  },
  favoriteIcon: {
    position: 'absolute',
    backgroundColor: AppColors.textPrimary + '66',
    padding: 9,
    borderRadius: 20,
    top: 12,
    right: 12,
  },
  productTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: AppColors.textPrimary,
  },
  productBrand: {
    fontSize: 12,
    color: AppColors.textSecondary,
    marginVertical: 4,
  },
  productPrice: {
    fontSize: 14,
    fontWeight: '600',
    color: AppColors.textPrimary,
  },
  // Product Detail
  detailHeader: {
    paddingHorizontal: 25,
    paddingVertical: 10,
  },
  detailHeaderTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: AppColors.textPrimary,
  },
  detailImage: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: -40,
  },
  detailCard: {
    backgroundColor: AppColors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    marginTop: -20,
    shadowColor: AppColors.black,
    shadowOffset: { width: 5, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    height: '100%',
  },
  productTop: {
    paddingVertical: 15,
    gap: 15,
  },
  productDetailTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: AppColors.textPrimary,
  },
  buttonsWrapper: {
    gap: 5,
    backgroundColor: AppColors.textSecondary + '77',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
});

export default AppStyles;
