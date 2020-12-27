# mongolian-script-helper

Энэ chrome extension нь танд монгол бичгээрээ бичихэд туслах болно.
Та монгол бичгээр яаж бичихээ мэдэхгүй байгаа үгээ кирилл, эсвэл латинаар оруулбал монгол бичгийн хувилбарыг харуулах юм.


- [mongolian-script-helper](#mongolian-script-helper)
- [Хувилбар 2.0](#хувилбар-20)
  - [Chrome extension local орчинд ашиглаж үзэх заавар](#chrome-extension-local-орчинд-ашиглаж-үзэх-заавар)
  - [React апп.аа localhost дээр ажиллуулах](#react-аппаа-localhost-дээр-ажиллуулах)
    - [`yarn test`](#yarn-test)
    - [`yarn build`](#yarn-build)
    - [`yarn eject`](#yarn-eject)
  - [Learn More](#learn-more)
    - [Code Splitting](#code-splitting)
    - [Analyzing the Bundle Size](#analyzing-the-bundle-size)
    - [Making a Progressive Web App](#making-a-progressive-web-app)
    - [Advanced Configuration](#advanced-configuration)
    - [Deployment](#deployment)
    - [`yarn build` fails to minify](#yarn-build-fails-to-minify)

![Зураг](/public/screenshot.png)

# Хувилбар 2.0
Extension-ээс гадна шууд вэб хуудсан дээрээсээ хадмал бичгээрээ бичих боломжтой боллоо.
Талбар дээр бичих хэсгийг https://github.com/sura0111/writtenMongolianKeyboard дотор хөгжүүлж байгаа болно.

![Зураг](/public/хадмал.png)

Толь бичгийн үгс, тайлбарыг [toli.query.mn](https://toli.query.mn/) сайтаас авсан болно.

Chrome extension болон react апп-г цааш нь сайжруулах, ашиглах нөхцөл нь <a href="LICENSE">GNU GPL v3</a> болно. Товч нь та өөрийн хувилбараа нээлттэй байлгах нөхцөлтэйгээр ашиглах бүрэн боломжтой.

Хөгжүүлэлтийн бэлтгэл

1) Install **npm, yarn**
2) `npm install` & `yarn install`

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Chrome extension local орчинд ашиглаж үзэх заавар
- `npm run build` ажиллуулна. build гэсэн фолдер үүсэх болно.
- `npx webpack --config webpack.config.js` коммандыг ажиллуулж хөрвүүлэгдсэн content.js файлыг build.рүү хуулна.
- browser дээрээс [chrome://extensions](chrome://extensions) гэсэн хаяг оруулна.
- **Developer mode** гэдгийг идэвхижүүлнэ.
- **Load unpacked** гэж сонгоод эхний алхамд үүсгэсэн **build** фолдероо зааж **extension** -оо оруулна.
- **Chrome** -ийн **extension** -нд нэмэгдсэн байх болно. Харагдахгүй бол бүх **extension** -оо харах товчийг дараад үзээрэй.

## React апп.аа localhost дээр ажиллуулах

```sh
yarn start
```

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
