import { StatusBar } from 'expo-status-bar';
import Data from './Context/Data';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './Navigations/MyTabs';
import { NativeBaseProvider } from "native-base";
import { StripeProvider } from '@stripe/stripe-react-native';


export default function App() {
  return (
    <StripeProvider
      publishableKey="pk_test_51NKzz8GrS3wxzFb18a6fDicJKSVB1iPepL8SUCFexsSvb9QQdRz0XMKfpBMEEaEPnAIujRlGCVcsfwFlrQys85UJ000E3EKgGP">
    <NativeBaseProvider>
      <Data>
        <NavigationContainer>
          <MyTabs>
            <StatusBar style="auto" />
          </MyTabs>
        </NavigationContainer>
      </Data>
    </NativeBaseProvider>
    </StripeProvider>

  );
}