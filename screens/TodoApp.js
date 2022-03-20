import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { NativeConstants } from 'expo-constants';
//import locally
import ButtonIcon from '../components/buttonIcon';
import Spacer from '../components/Spacer';

//import external libs
import { Title, Card, Paragraph, Button, TextInput } from 'react-native-paper';
import { FontAwaresome as Icon } from '@expo/vector-icons';


import { connect } from 'react-redux';
import { addTodo, deleteTodo } from '../redux/todoSlice';



const TodoApp = ({todos_list, addTodo, deleteTodo, ...props})=>{
    const [ task, setTask ] = useState('');

    const handleAddTodo = () => {
        addTodo({task})
        setTask('')
    }

    return (
       <View style={styles.container}>
          <Card title='Card Title'>
            <Text style={styles.paragraph}>Todo App with React Native and Redux</Text>
          </Card>
          <Spacer />
          <Card>
              <Card.Content>
                  <Title>Add ToDO here</Title>
                  <TextInput 
                  mode="outlined"
                  label="Task"
                  value={task}
                  onChangeText={task => setTask(task)}

                  />
                  <Spacer />
                  <Button mode="contained" onPress={handleAddTodo}>
                      ADD TASK
                  </Button>
              </Card.Content>
          </Card>
          <Spacer />
          <FlatList 
            data={todos_list}
            keyExtractor={ (item) => item.id}
            renderItem={({item, index})=> {
                return (
                 <>
                    <Card>
                        <Card.Title 
                            title={`Task#${item.id}`}
                            left={(props) => <Icon name="tasks" size={24} color = "black"/>}
                            right={(props) => <ButtonIcon iconName= "close" color= "red" onPress={()=>deleteTodo(item.id)}/>}
                        />
                        <Card.Content>
                            <Paragraph>{item.task}</Paragraph>
                        </Card.Content>
                        <Spacer />
                    </Card>
                 </>
                )
            }}
          
          
          />
       </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 24,
        padding: 10,
        backgroundColor: "#ecf0f1"
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

const mapStateToProps = (state, myOwnProps) => {
    console.log(state.todos.todos_list)
    return {
         todos_list: state.todos.todos_list,
    }
}

const mapDispatchToProps = {
    addTodo,
    deleteTodo,
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);



