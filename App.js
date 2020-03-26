import * as React from 'react';
import { Component} from 'react';
import { Button, 
      View, 
      Text, 
      StyleSheet,
      Image, 
      TextInput, 
      KeyboardAvoidingView, 
      SafeAreaView, ScrollView, 
      Alert} from 'react-native';
import { CheckBox } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Manually Importing the font library for the program to load upon boot-up
import * as Font from 'expo-font';

// Other resopurces
// https://react-native-elements.github.io/react-native-elements/docs/getting_started.html
// Checkbox: https://react-native-elements.github.io/react-native-elements/docs/checkbox.html
// logo: "https://www.freepik.com/free-photos-vectors/background"


class HomeScreen extends Component{
  render(){
  return (
    <View style={styles.container}>
      <Image source={require('./assets/Images/medLogo.png')} style={ styles.logo }/>
      <Text style={styles.welcomeText}>WELCOME!</Text>
      <Text style={styles.text}>This is the new patient questionnaire.</Text>
      <Text style={styles.text}>To start, you can fill up the form or you can view the Information summary.</Text>
      <View style={styles.startSurvey}>
        <Button
        title="Patient Form"
        color='blue'
        onPress={() => this.props.navigation.navigate('Patient Form')}
      /></View>
      <View style={styles.seeResults}>
        <Button
        title="View Summary"
        color='blue'
        fontSize='20'
        onPress={() => this.props.navigation.navigate('Summary')}
      /></View>
    </View>
  );
}
}

class SurveyScreen extends Component{
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      birthday:'',
      email:'',
      phone:'',
      address:'',
      physician:'',
      insurance:'',
      yes1: false,
      no1: false,
      lastExam:'',
      yes2: false,
      no2: false,
      illness:'',
      yes3: false,
      no3: false,
      lastOperation:'',
      rheumaticHD: false,
      congenitalHD: false,
      cardiovascular: false,
      };
    }
    submitHandler() {
        this.setState({
          name:'',
          birthday:'',
          email:'',
          phone:'',
          address:'',
          physician:'',
          insurance:'',
          yes1: false,
          no1: false,
          lastExam:'',
          yes2: false,
          no2: false,
          illness:'',
          yes3: false,
          no3: false,
          lastOperation:'',
          rheumaticHD: false,
          congenitalHD: false,
          cardiovascular: false,          
        });
        Alert.alert('Completed','Information submitted')
        num.count = num.count+1;
      }
    render()
    {
      return (
        <SafeAreaView style={styles.formContainer}>
        <KeyboardAvoidingView behavior="padding" enabled keyboardVerticalOffset='200'>
        <ScrollView style={styles.scrollView}>
          <View style={styles.formContainer}>

          <Text style={styles.surveyText}>Name:</Text>
          <TextInput
            style={styles.boxText}
            placeholderTextColor="gray"
            onChangeText={(name) => this.setState({ name })}
            value={this.state.name}
            />

          <Text style={styles.surveyText}>Birthday:</Text>
          <TextInput
            style={styles.boxText}
            placeholderTextColor="gray"
            onChangeText={(birthday) => this.setState({ birthday })}
            value={this.state.birthday}
            />

          <Text style={styles.surveyText}>E-mail:</Text>
          <TextInput
            style={styles.boxText}
            placeholderTextColor="gray"
            onChangeText={(email) => this.setState({ email })}
            value={this.state.email}
            />

          <Text style={styles.surveyText}>Phone(Home):</Text>
          <TextInput
            style={styles.boxText}
            placeholderTextColor="gray"
            onChangeText={(phone) => this.setState({ phone })}
            value={this.state.phone}
            />

          <Text style={styles.surveyText}>Address:</Text>
          <TextInput
            style={styles.boxText}
            placeholderTextColor="gray"
            onChangeText={(address) => this.setState({ address })}
            value={this.state.address}
            />

          <Text style={styles.surveyText}>Preferred Physician:</Text>
          <TextInput
            style={styles.boxText}
            placeholderTextColor="gray"
            onChangeText={(physician) => this.setState({ physician })}
            value={this.state.physician}
            />
          
          <Text style={styles.surveyText}>Insurance Card:</Text>
          <TextInput
            style={styles.boxText}
            placeholderTextColor="gray"
            onChangeText={(insurance) => this.setState({ insurance })}
            value={this.state.insurance}
            />

          <Text style={styles.surveyText}>Has there been any change in your general health in the past year?</Text>
          <CheckBox
            containerStyle={{ backgroundColor: "transparent", borderWidth: 0 }}
            title='Yes'
            checked={this.state.yes1}
            checkedColor='green'
            onPress={() => this.setState({ yes1: !this.state.yes1 })}
          />
          <CheckBox
            containerStyle={{ backgroundColor: "transparent", borderWidth: 0 }}
            title='No'
            checked={this.state.no1}
            checkedColor='green'
            onPress={() => this.setState({ no1: !this.state.no1 })}
          />

          <Text style={styles.surveyText}>My last physical examination was on:</Text>
          <TextInput
            style={styles.boxText}
            placeholderTextColor="gray"
            onChangeText={(lastExam) => this.setState({ lastExam })}
            value={this.state.lastExam}
            />

          <Text style={styles.surveyText}>Have you had a serious illness?</Text>
          <CheckBox
            containerStyle={{ backgroundColor: "transparent", borderWidth: 0 }}
            title='Yes'
            checked={this.state.yes2}
            checkedColor='green'
            onPress={() => this.setState({ yes2: !this.state.yes2 })}
          />
          <CheckBox
            containerStyle={{ backgroundColor: "transparent", borderWidth: 0 }}
            title='No'
            checked={this.state.no2}
            checkedColor='green'
            onPress={() => this.setState({ no2: !this.state.no2 })}
          />

          <Text style={styles.surveyText}>If so, what was the problem</Text>
          <TextInput
            style={styles.boxText}
            placeholderTextColor="gray"
            onChangeText={(illness) => this.setState({ illness })}
            value={this.state.illness}
            />

          <Text style={styles.surveyText}>Have you been hospitalized or had an operation?</Text>
          <CheckBox
            containerStyle={{ backgroundColor: "transparent", borderWidth: 0 }}
            title='Yes'
            checked={this.state.yes3}
            checkedColor='green'
            onPress={() => this.setState({ yes3: !this.state.yes3 })}
          />
          <CheckBox
            containerStyle={{ backgroundColor: "transparent", borderWidth: 0 }}
            title='No'
            checked={this.state.no3}
            checkedColor='green'
            onPress={() => this.setState({ no3: !this.state.no3 })}
          />

          <Text style={styles.surveyText}>If so, what was the problem</Text>
          <TextInput
            style={styles.boxText}
            placeholderTextColor="gray"
            onChangeText={(lastOperation) => this.setState({ lastOperation })}
            value={this.state.lastOperation}
            />

          <Text style={styles.surveyText}>Do you have or have you had any of the following diseases or problems</Text>
          <CheckBox
            containerStyle={{ backgroundColor: "transparent", borderWidth: 0 }}
            title='Rheumatic Fever or Rheumatic Heart Disease'
            checked={this.state.rheumaticHD}
            checkedColor='green'
            onPress={() => this.setState({ rheumaticHD: !this.state.rheumaticHD })}
          />
          <CheckBox
            containerStyle={{ backgroundColor: "transparent", borderWidth: 0 }}
            title='Congenital Heart Disease'
            checked={this.state.congenitalHD}
            checkedColor='green'
            onPress={() => this.setState({ congenitalHD: !this.state.congenitalHD })}
          />
          <CheckBox
            containerStyle={{ backgroundColor: "transparent", borderWidth: 0 }}
            title='Cardiovascular Disease'
            checked={this.state.cardiovascular}
            checkedColor='green'
            onPress={() => this.setState({ cardiovascular: !this.state.cardiovascular })}
          />

        <View style={styles.submit}>
            <Button
              title="Submit"
              color='white'
              onPress={() => this.submitHandler()}
            /></View>

          </View>
        </ScrollView>
        </KeyboardAvoidingView>
        </SafeAreaView>);
    }
  
}

class SummaryScreen extends Component{
  constructor(props) {
    super(props);
    this.state = {
      count: num.count,
    };
  }
  render(){
  return (
    <View style={styles.container}>
      <Text style={styles.counterTitle}>Patient Number:</Text>
  <Text style={styles.counterText}>{this.state.count}</Text>
      <Text style={styles.counterTitle}>Patient with Physician:</Text>
      <Text style={styles.counterText}>0</Text>
      <Text style={styles.counterTitle}>Patient without Physician:</Text>
      <Text style={styles.counterText}>0</Text>
      
      <View style={styles.home}>
        <Button
        title="Home"
        color='black'
        onPress={() => this.props.navigation.navigate('Home')}
      /></View>
    </View>
  );
}
}

const Stack = createStackNavigator();
const num = {count: 0};

class App extends Component {
  render(){
    
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Patient Form" component={SurveyScreen} />
        <Stack.Screen name="Summary" component={SummaryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
}

const styles = StyleSheet.create({
  formContainer:{
    flex: 1, 
    padding: 20,
  },
  logo:{
    margin: 10,
    resizeMode: "contain",
    height: 70,
    width: 350,
    position: 'absolute',
    top: 30,
  },
  container:{
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#B5E1F6', 
  },
  welcomeText:{
    paddingTop: 150,
    paddingBottom: 30,
    fontSize: 60,
    fontFamily: 'Helvetica',
    color:'#323232'
  },
  text:{
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 10,
    paddingTop: 10,
    fontSize: 20,
    textAlign: 'center',
    color: '#696A69',
  },
  counterTitle:{
    paddingTop: 30,
    paddingBottom: 30,
    fontSize: 30,
    fontFamily: 'Avenir-Medium'
  },
  counterText:{
    marginTop: 0,
    fontSize: 80,
    textAlign: 'center',
    color: '#696A69',
  },

  // Button styles
  startSurvey:{
    marginTop: 50,
    marginBottom: 20,
    padding: 10,
    textAlign: "center",
    borderRadius: 10,
    width: 380,
    backgroundColor: 'white',
  },
  seeResults:{
    margin: 20,
    padding: 10,
    textAlign: "center",
    borderRadius: 10,
    width: 380,
    backgroundColor: '#E8EAEC',
  },
  submit:{
    marginTop: 80,
    padding: 10,
    textAlign: "center",
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: 'green',
  },
  home:{
    padding: 10,
    textAlign: "center",
    borderRadius: 10,
    width: 380,
    backgroundColor: '#E8EAEC',
    marginTop: 40
  },

  // survey text
  surveyText:{
    fontSize: 18,
    marginTop: 20,
  },

  //Text Boxes
  boxText: {
    width: 350,
    padding: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    fontSize: 20,
    margin: 10,
    backgroundColor: 'white'
  },

})

export default App;
