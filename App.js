/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import SplashScreen from 'react-native-splash-screen'




import PortraitView from './components/PortraitView';
import LandscapeView from './components/LandscapeView';

const mexp = require('math-expression-evaluator');

const App = () => {


  const [count, setCount] = useState('');
  const [orientation, setOrientation] = useState('portrait');

  const calculateResult = () => {
    let modifiedExpression = count.replace(',', '.').replace('÷', '/').replace('×', '*').replace('√', 'root').replace('π', 'pi').replace('%', 'Mod');
    try {
      setCount(mexp.eval(modifiedExpression));
    } catch (e) {
      alert(e.message);
    }
  }

  const isPortrait = () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
  };

  Dimensions.addEventListener('change', () => {
    let changed = isPortrait() ? 'portrait' : 'landscape';
    setOrientation(changed);
  });

  useEffect(() => {
    let changed = isPortrait() ? 'portrait' : 'landscape';
    setOrientation(changed);
  }, [])
  useEffect(() => {     SplashScreen.hide();   }, []);






  const portraitButtons = [
    {
      title: 'AC',
      backgroundColor: '#646466',
      borderColor: '#535457',
      color: "#fff",
      fontSize: 50,
      padding: 10,
      minWidth: '25%',
      disable: false,
      onPress: () => {
        setCount('');
      }
    },
    {
      title: '',
      backgroundColor: '#646466',
      borderColor: '#535457',
      color: 'transparent',
      fontSize: 50,
      padding: 10,
      minWidth: '50%',
      disable: true,
      onPress: () => {}
    },
    {
      title: '÷',
      backgroundColor: '#f2a33c',
      borderColor: '#646466',
      color: '#fff',
      fontSize: 50,
      padding: 10,
      minWidth: '25%',
      disable: false,
      onPress: () => {
        setCount(count + '÷');
      }
    },
    {
      title: '7',
      backgroundColor: '#7e7d7f',
      borderColor: '#646466',
      color: '#fff',
      fontSize: 50,
      padding: 10,
      minWidth: '25%',
      disable: false,
      onPress: () => {
        setCount(count + '7');
      }
    },
    {
      title: '8',
      backgroundColor: '#7e7d7f',
      borderColor: '#646466',
      color: '#fff',
      fontSize: 50,
      padding: 10,
      minWidth: '25%',
      disable: false,
      onPress: () => {
        setCount(count + '8');
      }
    },
    {
      title: '9',
      backgroundColor: '#7e7d7f',
      borderColor: '#646466',
      color: '#fff',
      fontSize: 50,
      padding: 10,
      minWidth: '25%',
      disable: false,
      onPress: () => {
        setCount(count + '9');
      }
    },
    {
      title: '×',
      backgroundColor: '#f2a33c',
      borderColor: '#646466',
      color: '#fff',
      fontSize: 50,
      padding: 10,
      minWidth: '25%',
      disable: true,
      onPress: () => {
        setCount(count + '×');
      }
    },
    {
      title: '4',
      backgroundColor: '#7e7d7f',
      borderColor: '#646466',
      color: '#fff',
      fontSize: 50,
      padding: 10,
      minWidth: '25%',
      disable: false,
      onPress: () => {
        setCount(count + '4');
      }
    },
    {
      title: '5',
      backgroundColor: '#7e7d7f',
      borderColor: '#646466',
      color: '#fff',
      fontSize: 50,
      padding: 10,
      minWidth: '25%',
      disable: false,
      onPress: () => {
        setCount(count + '5');
      }
    },
    {
      title: '6',
      backgroundColor: '#7e7d7f',
      borderColor: '#646466',
      color: '#fff',
      fontSize: 50,
      padding: 10,
      minWidth: '25%',
      disable: false,
      onPress: () => {
        setCount(count + '6');
      }
    },
    {
      title: '-',
      backgroundColor: '#f2a33c',
      borderColor: '#646466',
      color: '#fff',
      fontSize: 50,
      padding: 10,
      minWidth: '25%',
      disable: true,
      onPress: () => {
        setCount(count + '-');
      }
    },
    {
      title: '1',
      backgroundColor: '#7e7d7f',
      borderColor: '#646466',
      color: '#fff',
      fontSize: 50,
      padding: 10,
      minWidth: '25%',
      disable: false,
      onPress: () => {
        setCount(count + '1');
      }
    },
    {
      title: '2',
      backgroundColor: '#7e7d7f',
      borderColor: '#646466',
      color: '#fff',
      fontSize: 50,
      padding: 10,
      minWidth: '25%',
      disable: false,
      onPress: () => {
        setCount(count + '2');
      }
    },
    {
      title: '3',
      backgroundColor: '#7e7d7f',
      borderColor: '#646466',
      color: '#fff',
      fontSize: 50,
      padding: 10,
      minWidth: '25%',
      disable: false,
      onPress: () => {
        setCount(count + '3');
      }
    },
    {
      title: '+',
      backgroundColor: '#f2a33c',
      borderColor: '#646466',
      color: '#fff',
      fontSize: 50,
      padding: 10,
      minWidth: '25%',
      disable: true,
      onPress: () => {
        setCount(count + '+');
      }
    },
    {
      title: '0',
      backgroundColor: '#7e7d7f',
      borderColor: '#646466',
      color: '#fff',
      fontSize: 50,
      padding: 10,
      minWidth: '50%',
      disable: false,
      onPress: () => {
        setCount(count + '0');
      }
    },
    {
      title: ',',
      backgroundColor: '#7e7d7f',
      borderColor: '#646466',
      color: '#fff',
      fontSize: 50,
      padding: 10,
      minWidth: '25%',
      disable: false,
      onPress: () => {
        setCount(count + ',');
      }
    },
    {
      title: '=',
      backgroundColor: '#f2a33c',
      borderColor: '#646466',
      color: '#fff',
      fontSize: 50,
      padding: 10,
      minWidth: '25%',
      disable: true,
      onPress: () => {
        calculateResult();
      }
    },
  ]

  const landscapeButtons = [
    {
      title: '√',
      backgroundColor: '#646466',
      borderColor: '#535457',
      color: "#fff",
      fontSize: 25,
      padding: 5,
      minWidth: '16.66%',
      disable: false,
      onPress: () => {
        setCount(count + '√(');
      }
    },
    {
      title: 'x!',
      backgroundColor: '#646466',
      borderColor: '#535457',
      color: "#fff",
      fontSize: 25,
      padding: 5,
      minWidth: '16.66%',
      disable: false,
      onPress: () => {
        setCount(count + '!');
      }
    },
    {
      title: '(',
      backgroundColor: '#646466',
      borderColor: '#535457',
      color: "#fff",
      fontSize: 25,
      padding: 5,
      minWidth: '16.66%',
      disable: false,
      onPress: () => {
        setCount(count + '(');
      }
    },
    {
      title: ')',
      backgroundColor: '#646466',
      borderColor: '#535457',
      color: "#fff",
      fontSize: 25,
      padding: 5,
      minWidth: '16.66%',
      disable: false,
      onPress: () => {
        setCount(count + ')');
      }
    },
    {
      title: '%',
      backgroundColor: '#646466',
      borderColor: '#535457',
      color: "#fff",
      fontSize: 25,
      padding: 5,
      minWidth: '16.66%',
      disable: false,
      onPress: () => {
        setCount(count + '%');
      }
    },
    {
      title: 'AC',
      backgroundColor: '#f2a33c',
      borderColor: '#535457',
      color: "#fff",
      fontSize: 25,
      padding: 5,
      minWidth: '16.66%',
      disable: false,
      onPress: () => {
        setCount('');
      }
    },
    {
      title: 'e^x',
      backgroundColor: '#646466',
      borderColor: '#535457',
      color: "#fff",
      fontSize: 25,
      padding: 5,
      minWidth: '16.66%',
      disable: false,
      onPress: () => {
        setCount(count + 'e^(');
      }
    },
    {
      title: '10^x',
      backgroundColor: '#646466',
      borderColor: '#535457',
      color: "#fff",
      fontSize: 25,
      padding: 5,
      minWidth: '16.66%',
      disable: false,
      onPress: () => {
        setCount(count + '10^(');
      }
    },
    {
      title: '7',
      backgroundColor: '#7e7d7f',
      borderColor: '#646466',
      color: '#fff',
      fontSize: 25,
      padding: 5,
      minWidth: '16.66%',
      disable: false,
      onPress: () => {
        setCount(count + '7');
      }
    },
    {
      title: '8',
      backgroundColor: '#7e7d7f',
      borderColor: '#646466',
      color: '#fff',
      fontSize: 25,
      padding: 5,
      minWidth: '16.66%',
      disable: false,
      onPress: () => {
        setCount(count + '8');
      }
    },
    {
      title: '9',
      backgroundColor: '#7e7d7f',
      borderColor: '#646466',
      color: '#fff',
      fontSize: 25,
      padding: 5,
      minWidth: '16.66%',
      disable: false,
      onPress: () => {
        setCount(count + '9');
      }
    },
    {
      title: '÷',
      backgroundColor: '#f2a33c',
      borderColor: '#535457',
      color: "#fff",
      fontSize: 25,
      padding: 5,
      minWidth: '16.66%',
      disable: false,
      onPress: () => {
        setCount(count + '÷');
      }
    },
    {
      title: 'ln',
      backgroundColor: '#646466',
      borderColor: '#535457',
      color: "#fff",
      fontSize: 25,
      padding: 5,
      minWidth: '16.66%',
      disable: false,
      onPress: () => {
        setCount(count + 'ln(');
      }
    },
    {
      title: 'log',
      backgroundColor: '#646466',
      borderColor: '#535457',
      color: "#fff",
      fontSize: 25,
      padding: 5,
      minWidth: '16.66%',
      disable: false,
      onPress: () => {
        setCount(count + 'log(');
      }
    },
    {
      title: '4',
      backgroundColor: '#7e7d7f',
      borderColor: '#646466',
      color: '#fff',
      fontSize: 25,
      padding: 5,
      minWidth: '16.66%',
      disable: false,
      onPress: () => {
        setCount(count + '4');
      }
    },
    {
      title: '5',
      backgroundColor: '#7e7d7f',
      borderColor: '#646466',
      color: '#fff',
      fontSize: 25,
      padding: 5,
      minWidth: '16.66%',
      disable: false,
      onPress: () => {
        setCount(count + '5');
      }
    },
    {
      title: '6',
      backgroundColor: '#7e7d7f',
      borderColor: '#646466',
      color: '#fff',
      fontSize: 25,
      padding: 5,
      minWidth: '16.66%',
      disable: false,
      onPress: () => {
        setCount(count + '6');
      }
    },
    {
      title: '×',
      backgroundColor: '#f2a33c',
      borderColor: '#535457',
      color: "#fff",
      fontSize: 25,
      padding: 5,
      minWidth: '16.66%',
      disable: false,
      onPress: () => {
        setCount(count + '×');
      }
    },
    {
      title: 'e',
      backgroundColor: '#646466',
      borderColor: '#535457',
      color: "#fff",
      fontSize: 25,
      padding: 5,
      minWidth: '16.66%',
      disable: false,
      onPress: () => {
        setCount(count + 'e');
      }
    },
    {
      title: 'x^2',
      backgroundColor: '#646466',
      borderColor: '#535457',
      color: "#fff",
      fontSize: 25,
      padding: 5,
      minWidth: '16.66%',
      disable: false,
      onPress: () => {
        setCount(count + '^2');
      }
    },
    {
      title: '1',
      backgroundColor: '#7e7d7f',
      borderColor: '#646466',
      color: '#fff',
      fontSize: 25,
      padding: 5,
      minWidth: '16.66%',
      disable: false,
      onPress: () => {
        setCount(count + '1');
      }
    },
    {
      title: '2',
      backgroundColor: '#7e7d7f',
      borderColor: '#646466',
      color: '#fff',
      fontSize: 25,
      padding: 5,
      minWidth: '16.66%',
      disable: false,
      onPress: () => {
        setCount(count + '2');
      }
    },
    {
      title: '3',
      backgroundColor: '#7e7d7f',
      borderColor: '#646466',
      color: '#fff',
      fontSize: 25,
      padding: 5,
      minWidth: '16.66%',
      disable: false,
      onPress: () => {
        setCount(count + '3');
      }
    },
    {
      title: '-',
      backgroundColor: '#f2a33c',
      borderColor: '#535457',
      color: "#fff",
      fontSize: 25,
      padding: 5,
      minWidth: '16.66%',
      disable: false,
      onPress: () => {
        setCount(count + '-');
      }
    },
    {
      title: 'π',
      backgroundColor: '#646466',
      borderColor: '#535457',
      color: "#fff",
      fontSize: 25,
      padding: 5,
      minWidth: '16.66%',
      disable: false,
      onPress: () => {
        setCount(count + 'π');
      }
    },
    {
      title: 'x^3',
      backgroundColor: '#646466',
      borderColor: '#535457',
      color: "#fff",
      fontSize: 25,
      padding: 5,
      minWidth: '16.66%',
      disable: false,
      onPress: () => {
        setCount(count + '^3');
      }
    },
    {
      title: '0',
      backgroundColor: '#7e7d7f',
      borderColor: '#646466',
      color: '#fff',
      fontSize: 25,
      padding: 5,
      minWidth: '16.66%',
      disable: false,
      onPress: () => {
        setCount(count + '0');
      }
    },
    {
      title: ',',
      backgroundColor: '#7e7d7f',
      borderColor: '#646466',
      color: '#fff',
      fontSize: 25,
      padding: 5,
      minWidth: '16.66%',
      disable: false,
      onPress: () => {
        setCount(count + ',');
      }
    },
    {
      title: '=',
      backgroundColor: '#f2a33c',
      borderColor: '#535457',
      color: "#fff",
      fontSize: 25,
      padding: 5,
      minWidth: '16.66%',
      disable: false,
      onPress: () => {
        calculateResult();
      }
    },
    {
      title: '+',
      backgroundColor: '#f2a33c',
      borderColor: '#535457',
      color: "#fff",
      fontSize: 25,
      padding: 5,
      minWidth: '16.66%',
      disable: false,
      onPress: () => {
        setCount(count + '+');
      }
    },
  ]

  return (
    orientation == 'portrait' ? (
      <PortraitView count={count} buttons={portraitButtons} />
    ) : (
      <LandscapeView count={count} buttons={landscapeButtons} />
    )
  );
};

export default App;
