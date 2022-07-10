# LifeHack 2022

> By **geekignore**
> - [Daryl](https://github.com/wongdaryl)
> - [Jerald](http://github.com/jeraldlyh/)
> - [Nicholas](http://github.com/oversparkling/)
> - [Yvonne](https://github.com/yvonnelhs/)

Code submission for [NUS LifeHack 2022](https://lifehack.nuscomputing.com/)

| Platform             | Description                                                                                            |
:--------------------- | :----------------------------------------------------------------------------------------------------: |
| Youtube              | [App Demo](https://youtu.be/n6b5ixmxc1U)                                                              |
| Figma                | [Wireframes](https://www.figma.com/file/fSVIRBO5hb8efVPJhJwqm0/lifehack-2022?node-id=2%3A1874) |
| Canva                | [Pitch Deck](https://www.canva.com/design/DAFF54-ognI/fJpgIHH7VpwHqL0f3f5iCQ/edit?utm_content=DAFF54-ognI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton) |


## Problem Statement
**"In 2021, the National Environment Agency lamented that Singapore’s recycling rate had fallen to a 10 year low. What can we do to encourage more people to recycle, or make recycling more convenient and accessible?"**
> WeCycle is a one-stop app that aims to provide improved convenience, flexibility and information for young adults, creating a more conducive environment where they can recycle easily and reliably.

## Target Audience
- Singaporeans

## Core Features

***Marketplace***
> A platform that provides convenience for users to access recyclable materials. Buyers can purchase upcycled items, extending the life cycles of these products which would have otherwise been thrown away.

***Maps***
> We Used National Environment Agency (NEA) resources on publicly available recycle bins to populate the data required for our map feature. This map can then be used to display nearest recycling bins based user's current geolocation.

***FactSheet***
> Currently, the low domestic recycling rate can be attributed to the lack of and poor knowledge of different types of materials that can be recycled. As such, FactSheet provides concise information to educate users about recycling domain knowledge

***Quizzes***
> After learning about recycling, users can put their knowledge to a test to earn more points. This encourages participation by awarding points, which can be used to redeem attractive rewards, such as vouchers and deals.


## Technology Stack
- [React Native](https://reactnative.dev/)
- [Firestore](https://firebase.google.com/docs/firestore)

## Local Deployment
### Expo
Refer to official [Expo documentation](https://docs.expo.io/get-started/installation/)
```bash
$ yarn global add --global expo-cli
```
Download Expo App:
- [Android](https://play.google.com/store/apps/details?id=host.exp.exponent)
- [IOS](https://itunes.com/apps/exponent)

### Firestore
Refer to official [Firestore documentation](https://firebase.google.com/docs/firestore/quickstart)

### Environment Variables
#### Backend
Refer to official [Firestore documentation](https://firebase.google.com/docs/firestore/quickstart)

![image](https://user-images.githubusercontent.com/37609749/122356081-0b2c8880-cf85-11eb-97bd-5dac71a1b36f.png)
- Navigate to `.env.local` and copy the above config into the file
- Subsequently, rename `.env.local` to `.env`


### Cloning of Repo
#### Mobile App
```console
root:~$ git clone https://github.com/jeraldlyh/LifeHack-2022.git
root:~$ cd LifeHack-2022/app
root:CodeEXP-2022$ yarn
root:CodeEXP-2022$ expo start
```
- Scan the QR code provided by Expo CLI using your Expo Go App on your phone


## Disclaimer
We do not own or license any copyrights in the images used in the application. You may use the Services and the contents contained in the Services soley for your own individual non-commercial and informational purposes only.
