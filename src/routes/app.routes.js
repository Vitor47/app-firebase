import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListTasks from '../pages/ListTasks';
import CreateTask from '../pages/CreateTask';
import EditTask from '../pages/EditTask';

const AuthStack = createNativeStackNavigator();

function AuthRoutes() {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen
                name="ListTasks"
                component={ListTasks}
                options={{
                    headerShown: false,
                }}
            />
            <AuthStack.Screen
                name="CreateTask"
                component={CreateTask}
                options={{
                    headerShown: false,
                }}
            />
            <AuthStack.Screen
                name="EditTask"
                component={EditTask}
                options={{
                    headerShown: false,
                }}
            />
        </AuthStack.Navigator>
    )
}

export default AuthRoutes;