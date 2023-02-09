# Veriff demo

The goal for this project is to reproduce all the setup problems with Veriff using RN 0.71.

Veriff has been installed in this raw RN project following the instructions detailed here: https://developers.veriff.com/#ios-specific-setup

### iOS does not build showing the following error:

The following build commands failed:
SwiftCompile normal x86_64 Compiling\ VeriffSdk.swift <project path>/node_modules/@veriff/react-native-sdk/ios/VeriffSdk.swift (in target 'react-native-sdk' from project 'Pods')
CompileSwift normal x86_64 <project path>/node_modules/@veriff/react-native-sdk/ios/VeriffSdk.swift (in target 'react-native-sdk' from project 'Pods')
(2 failures)

Solution tried: https://github.com/facebook/react-native/issues/34651 but did not work.

### Android verification does not work:
Android seems to work (it launches Veriff's screens) but once you try to scan a document during the verification it instantly fails.
error "Uhoh. System hiccup. Our apologies. Let's try again." and 2 options "Try again" or "Exit". Clicking on Try again causes the same error and once we click in Exit the result from VeriffSdk has "SETUP_ERROR" with no additional information. I tried to find any information to know what's going on but there is nothing there.


## How to reproduce with this repository

- Install dependencies using yarn install.
- Install pods in ios folder.

Reproduce iOS:
- Execute yarn ios or build app from XCode.

Reproduce Android:
- Run yarn android
- Replace `const sessionToken = 'PASTE A NEW SESSION TOKEN';` in App.tsx file.
- Click on Start verification button and scan a real driving license.


https://user-images.githubusercontent.com/18662998/217899242-a4c1dcd9-3ed8-47e2-9924-5cbe03e6a251.MP4



