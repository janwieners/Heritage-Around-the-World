ionic plugin rm cordova-plugin-console --save
cordova build --release android
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore ds3checklist.keystore ./platforms/android/build/outputs/apk/android-release-unsigned.apk ds3checklist
rm ds3checklist.apk
./zipalign -v 4 ./platforms/android/build/outputs/apk/android-release-unsigned.apk ds3checklist.apk
