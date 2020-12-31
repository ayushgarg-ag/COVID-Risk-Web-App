# COVID-19 Exposure Modeler
## About the Model
This is a tool to help understand COVID-19 transmission risk to students and teachers/professors due to transmission by microscopic airborne particles (i.e. aerosols) in classroom settings. This is not an infectious disease dynamics model, but rather a model that predicts airborne virion concentrations within a classroom, taking into account exhalation of virion-containing aerosols by infected individuals and the loss of these particles due to various processes. Probabilities of infection are calculated based on the virion dose inhaled (accounting for use of masks) by uninfected people in the classroom.

The risk calculations here are only for disease transmission by the airborne aerosol route, and do not account for transmission by droplets or from contaminated surfaces. The implicit assumption is that appropriate social distancing and hygiene protocols are strictly adhered to in the classroom. To the extent that this is not true, the risk of infection will be higher than predicted by these calculations. Users should also also bear in mind that the absolute estimates of predicted risk from this model are quite uncertain because of uncertainties in our knowledge of key parameters such as the exhalation rate of virion-containing aerosols by infected individuals and the percentage of infected individuals in the classroom. The model is nevertheless useful to explore the relative effects of control measures (e.g. more ventilation, fewer people, shorter duration, masks vs no masks) on COVID-19 transmission by aerosols in classrooms.

## The Team
This probabilistic Monte Carlo framework was developed by <b>Prasad Kasibhatla</b>, as an offshoot of the COVID-19 risk estimator developed by Jose Jimenez.

### FRONT END
Donghan Park, Helen Xiao, Kevin Yin, Jennifer Schultz, Ayush Garg

### BACK END
Ayush Garg, Akash Mullick, Ameya Rao, Jerry Hou

### MOBILE DEVELOPMENT
Jerry Hou, Isabel Garfinkel



<!-- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

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

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify -->
