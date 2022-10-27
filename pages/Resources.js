import {useState, useEffect} from 'react';
import {
  Button,
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Menu} from '../components/menu';
import LinearGradient from 'react-native-linear-gradient';
import {Header} from '../components/header';

import customData from '../assets/sample.json';

export function ResourceScreen({navigation}) {
  const [customData, setCustomData] = useState();
  // const [isLoading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(false);
  const [fromFetch, setFromFetch] = useState(false);
  const goForFetch = async () => {
    setFromFetch(true);
    setLoading(true);
    await fetch('http://mobile.cbcl7.com/teamCasino.json')
      .then(response => response.json())
      .then(responseJson => {
        console.log('getting data from fetch', responseJson);
        setTimeout(() => {
          setLoading(false);
          setCustomData(responseJson);
        }, 2000);
      })
      .catch(error => console.log(error));
  };
  // const getUsers = async () => {
  //   await fetch(
  //     'https://raw.githubusercontent.com/garysenoc/simple-dynamic-config-react-native/master/sample1.json',
  //   )
  //     .then(response => {
  //       response.json();
  //     })
  //     .then(json => setCustomData(json))
  //     .catch(error => console.error(error))
  //     .finally(() => setLoading(false));

  //   console.log(customData);
  // };
  useEffect(() => {
    setLoading(true);
    goForFetch();
    // console.log(customData);
    // console.log(users);
  }, []);
  return (
    <SafeAreaProvider style={{backgroundColor: 'white'}}>
      {/* <StatusBar backgroundColor="transparent" /> */}

      <Menu
        onPress={() => {
          navigation.toggleDrawer();
        }}
      />
      <ScrollView>
        <Header />

        <View
          style={{
            height: 1.2,
            backgroundColor: 'rgb(0,87,170)',
            width: '100%',
            marginTop: 20,
          }}
        />

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 15,
          }}>
          <Text
            style={{
              color: customData?.resources.title1Color,
              fontWeight: '900',
            }}>
            {customData?.resources.title1}
          </Text>
          <View style={{width: '55%', alignItems: 'center', marginTop: 5}}>
            <Text
              style={{
                textAlign: 'center',
                color: customData?.resources.subtitleColor,
                fontSize: 12,
              }}>
              {customData?.resources.subtitle}
            </Text>
          </View>

          <View style={{marginTop: 10}} />
        </View>

        <View style={{flex: 1, marginTop: 10}}>
          {customData?.resources.files1.map(file => (
            <View>
              <View
                style={{
                  alignSelf: 'flex-start',
                  marginLeft: '18%',
                  flexDirection: 'row',
                  marginTop: 5,
                }}>
                <Text
                  style={{fontWeight: 'bold', color: 'black', fontSize: 12}}>
                  {file.title}
                </Text>
                <Image
                  source={require('../assets/pdf.png')}
                  style={{
                    height: 20,
                    width: 20,
                  }}
                  resizeMode="contain"
                />
              </View>
            </View>
          ))}
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 15,
          }}>
          <Text
            style={{
              color: customData?.resources.title2Color,
              fontWeight: '900',
            }}>
            {customData?.resources.title2}
          </Text>

          <View style={{marginTop: 10}} />
        </View>
        <View style={{flex: 1, marginTop: 10}}>
          <View>
            {customData?.resources.files2.map(file => (
              <View>
                <View
                  style={{
                    alignSelf: 'flex-start',
                    marginLeft: '18%',
                    flexDirection: 'row',
                    marginTop: 5,
                  }}>
                  <Text
                    style={{fontWeight: 'bold', color: 'black', fontSize: 12}}>
                    {file.title}
                  </Text>
                  <Image
                    source={require('../assets/pdf.png')}
                    style={{
                      height: 20,
                      width: 20,
                    }}
                    resizeMode="contain"
                  />
                </View>
              </View>
            ))}
          </View>
        </View>
        <View
          style={{
            height: 420,
            backgroundColor: 'black',
            marginTop: 30,
          }}>
          <View style={{alignItems: 'center', marginTop: 40}}>
            <Image
              source={require('../assets/footer.png')}
              style={{
                height: '55%',
                width: '55%',
                // marginTop: '4%',
              }}
              resizeMode="contain"
            />
          </View>
          <View style={{alignItems: 'center', marginTop: '-18%'}}>
            <Text style={{color: 'rgb(210,155,41)', fontSize: 14}}>
              MORONGO CASINO RESORT & SPA
            </Text>
            <Text style={{color: 'white'}}>49500 Seminole Dr.</Text>
            <Text style={{color: 'white'}}>
              Cabazon, California 92230 Seminole Dr.
            </Text>
            <Text style={{color: 'white'}}>Email: morongo@morongo.com</Text>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity>
                <Text
                  style={{
                    color: 'rgb(34,72,142)',
                    textDecorationLine: 'underline',
                  }}>
                  TERMS OF USE
                </Text>
              </TouchableOpacity>
              <Text style={{color: 'white'}}> | </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    color: 'rgb(34,72,142)',
                    textDecorationLine: 'underline',
                  }}>
                  RESPONSIBLE GAMING
                </Text>
              </TouchableOpacity>
            </View>

            <Image
              source={require('../assets/team-casino.png')}
              style={{
                height: '55%',
                width: '55%',
                marginTop: '-4%',
              }}
              resizeMode="contain"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}
var styles = StyleSheet.create({
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    height: 30,
    borderRadius: 12,
    alignItems: 'center',

    justifyContent: 'center',
    // borderBottomWidth: 0.2,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
