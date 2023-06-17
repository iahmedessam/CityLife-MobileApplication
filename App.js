import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Data from './Context/Data';
import Dashboard from './Context/Dashboard';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './Navigations/MyTabs';
// import MyDrawer from './Navigations/MyDrawer';

export default function App() {
  return (
    <Dashboard>
      <Data>
        <NavigationContainer>
          <MyTabs>
            {/* <MyDrawer> */}
              <StatusBar style="auto" />
            {/* </MyDrawer> */}
          </MyTabs>
        </NavigationContainer>
      </Data >
    </Dashboard>
  );
}