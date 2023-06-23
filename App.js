import { StatusBar } from 'expo-status-bar';
import Data from './Context/Data';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './Navigations/MyTabs';
import { NativeBaseProvider } from "native-base";


export default function App() {
  return (
    <NativeBaseProvider>
      <Data>
        <NavigationContainer>
          <MyTabs>
            <StatusBar style="auto" />
          </MyTabs>
        </NavigationContainer>
      </Data >
    </NativeBaseProvider>
  );
}