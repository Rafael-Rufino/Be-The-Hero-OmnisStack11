import React from "react";
import { NavigationContainer } from "@react-navigation/native"; // funciona igual browserroutes
import { createStackNavigator } from "@react-navigation/stack";
import { Incidents } from "./pages/Incidents";
import { Details } from "./pages/Details";
const AppStack = createStackNavigator();

export function Routes() {
  /* rotas */

  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Incident" component={Incidents} />
        <AppStack.Screen name="Detail" component={Details} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
