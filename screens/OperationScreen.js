
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import AddOperation from '../screens/operations/AddOperation' 
import ShowOperation from '../screens/operations/ShowOperation'

const OperationNavigator = createBottomTabNavigator(
    {
        תצוגות: {  screen: ShowOperation  },
     משימות: {  screen: AddOperation  }
    },{
        swipeEnabled:false,
        animationEnabled: false,
        tabBarOptions: {
            activeTintColor: 'white',
    
            labelStyle: {
                fontSize: 16,
            },
            style: {
                backgroundColor: '#1c313a',
            },
    }
        
        
    });



export default createAppContainer(OperationNavigator);