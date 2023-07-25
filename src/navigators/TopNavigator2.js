import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import SeriesList from '../pages/Series/SeriesList/SeriesList';
import ReqSeriesList from '../pages/Series/ReqSeriesList/ReqSeriesList';
import ActiveSeriesList from '../pages/Series/ActiveSeriesList/ActiveSeriesList';

function TopNavigator2() {

  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator screenOptions={
      {
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
        tabBarLabelStyle: {
          textTransform: "capitalize",
          fontSize: 13,
          fontWeight: "bold",
        },
        tabBarIndicatorStyle: {
          backgroundColor: "black"
        }

      }
    }>
      <Tab.Screen name="SeriesList" component={SeriesList}
        options={
          {
            title: "Watched Series",
          }
        } />
        <Tab.Screen name="ActiveSeriesList" component={ActiveSeriesList}
        options={
          {
            title: "Watching Now",
          }
        } />
      <Tab.Screen name="ReqSeriesList" component={ReqSeriesList}
        options={
          {
            title: "Series to Watch",
          }
        } />
    </Tab.Navigator>
  );
}

export default TopNavigator2;
