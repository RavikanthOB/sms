import {Navigation} from 'react-native-navigation';


const HomeTabsList = [
    {
      componentName: 'Home',
      icon: require('../assets/TabIcons/home-outline.png'),
    },
    {
      componentName: 'Dashboard',
      icon: require('../assets/TabIcons/view-dashboard-outline.png'),
    },
  ];

const smsDefaultOptions= {
    statusBar: {
      backgroundColor: '#FAFAFA',
      style: 'dark',
    },
    topBar: {
      visible: false,
    },
    animations: {
      pop: {
        content: {
          alpha: {
            from: 1,
            to: 0,
            duration: 300,
            startDelay: 0,
            interpolation: 'accelerate',
          },
        },
      },
      push: {
        waitForRender: true,
        content: {
          alpha: {
            from: 0,
            to: 1,
            duration: 300,
            startDelay: 0,
            interpolation: 'accelerate',
          },
        },
      },
      setRoot: {
        waitForRender: true,
      },
    },
  };

  

  const HomeTabs = HomeTabsList.map((tabItem) => {
    let tab = {
      stack: {
        children: [
          {
            component: {
              name: tabItem.componentName,
              id: tabItem.componentName,
            },
          },
        ],
        options: {
          bottomTab: {
            text: tabItem.componentName,
            icon: tabItem.icon,
            iconColor: '#B9B9B9',
            selectedIconColor: '#484848',
            fontSize: 14,
            fontFamily: 'Barlow-Regular',
            animate: false,
          },
        },
      },
    };
    return tab;
  });
export function setLoginRoot() {
    Navigation.setDefaultOptions(
      smsDefaultOptions,
    );
    Navigation.setRoot({
      root: {
        stack: {
          children: [
            {
              component: {
                name: 'Login',
              },
            },
          ],
        },
      },
    });
  }

  export function SwitchRoot() {
    Navigation.setDefaultOptions(
      smsDefaultOptions,
    );
    Navigation.setRoot({
      root: {
        stack: {
          children: [
            {
              component: {
                name: 'Login',
              },
            },
          ],
        },
      },
    });
  }