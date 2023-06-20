import { StatusBar } from 'expo-status-bar';
import Data from './Context/Data';
import Dashboard from './Context/Dashboard';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './Navigations/MyTabs';

export default function App() {
  return (
    <Dashboard>
      <Data>
        <NavigationContainer>
          <MyTabs>
              <StatusBar style="auto" />
          </MyTabs>
        </NavigationContainer>
      </Data >
    </Dashboard>
  );
}