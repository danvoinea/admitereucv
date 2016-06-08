App.info({
  name: 'AdmitereUCV',
  description: 'Admitere UCV.',
  author: 'Dan Voinea',
  email: 'dan.voinea@gmail.com',
  website: 'http://www.ucv.ro',
  version: '0.0.1'
});

App.icons({
  // iOS
  'iphone': 'resources/icons/ios/icon-60.png',
  'iphone_2x': 'resources/icons/ios/icon@2x.png',
  'ipad': 'resources/icons/ios/icon-72.png',
  'ipad_2x': 'resources/icons/ios/icon-72@2x.png',

  // Android
  'android_ldpi': 'resources/icons/android/drawable-ldpi/ic_launcher.png',
  'android_mdpi': 'resources/icons/android/drawable-mdpi/ic_launcher.png',
  'android_hdpi': 'resources/icons/android/drawable-hdpi/ic_launcher.png',
  'android_xhdpi': 'resources/icons/android/drawable-xhdpi/ic_launcher.png'
});

App.accessRule('*');


App.launchScreens({
  // iOS
  'iphone': 'resources/splash/Default~iphone.png',
  'iphone_2x': 'resources/splash/Default@2x~iphone.png',
  'iphone5': 'resources/splash/Default-568h@2x~iphone.png',
  'ipad_portrait': 'resources/splash/Default-Portrait~ipad.png',
  'ipad_landscape': 'resources/splash/Default-Landscape~ipad.png',

  // Android
  'android_ldpi_portrait': 'resources/splash/drawable-land-ldpi-screen.png',
  'android_ldpi_landscape': 'resources/splash/drawable-port-ldpi-screen.png',
  'android_mdpi_portrait': 'resources/splash/drawable-port-mdpi-screen.png',
  'android_mdpi_landscape': 'resources/splash/drawable-land-mdpi-screen.png',
  'android_hdpi_portrait': 'resources/splash/drawable-port-hdpi-screen.png',
  'android_hdpi_landscape': 'resources/splash/drawable-land-hdpi-screen.png'
});

App.setPreference('StatusBarOverlaysWebView', 'false');
App.setPreference('StatusBarBackgroundColor', '#000000');
