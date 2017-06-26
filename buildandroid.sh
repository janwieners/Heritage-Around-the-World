ionic plugin rm cordova-plugin-console --save
cordova build --release android
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore hatw.keystore ./platforms/android/build/outputs/apk/android-release-unsigned.apk hatw
rm hatw.apk
./zipalign -v 4 ./platforms/android/build/outputs/apk/android-release-unsigned.apk hatw.apk
