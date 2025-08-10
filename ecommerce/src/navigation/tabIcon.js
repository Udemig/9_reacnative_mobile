//import liraries
import { ClipboardText, Heart, Home, Profile } from 'iconsax-react-nativejs';
import React from 'react';

import AppRoutes from './routes';

// Her route için bir TabIcon return eden fonksiyon
const TabIcons = ({ route, focused }) => {
  const iconColor = focused ? '#3498db' : '#95a5a6';
  const iconVariant = focused ? 'Bold' : 'Outline';
  switch (route.name) {
    case AppRoutes.TAB:
      return <Home size="24" color={iconColor} variant={iconVariant} />;
    case AppRoutes.ORDERS:
      return (
        <ClipboardText size="24" color={iconColor} variant={iconVariant} />
      );
    case AppRoutes.FAVORITES:
      return <Heart size="24" color={iconColor} variant={iconVariant} />;
    case AppRoutes.PROFILE:
      return <Profile size="24" color={iconColor} variant={iconVariant} />;

    default:
      return null;
  }
};

export default TabIcons;
