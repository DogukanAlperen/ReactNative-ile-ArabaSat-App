import React,{useState} from 'react';
import {View, Text, StyleSheet ,TextInput,Pressable, Image} from 'react-native'; 
import Loading from '../components/Loading';

const Login = ()=> {

  const [email,setEmail] = useState("")
  const [password,setPaswoord] = useState("")
  const [result,setResult]= useState('')
  const [isLoading, setisLoading] = useState(false)
  console.log(isLoading)
 



return(
  <View  style={styles.container}>
    <Image
      source={require('../../../images/Login.png')} 
     
      style={styles.image} />
    
    <Text>Welcome {result}</Text> 
    <Text >Email</Text>
    <TextInput  
      inputMode='email'
      placeholder='Email Giriniz' 
      style={styles.textInputstyle} 
      onChangeText={(value)=> setEmail}
      
    />
    
    
    <Text >Password</Text>
    <TextInput 
      secureTextEntry={true}
      placeholder='Şifrenizi Giriniz' 
      style={styles.textInputstyle}
      onChangeText={(value)=> setPaswoord}

    />
    <Pressable 
      onPress={()=>setisLoading(true) }
      
      style={({pressed})=>[{
        backgroundColor: pressed ? "gray" : 'blue'}
        ,styles.buton]}>

      <Text style={styles.butonText}>Giriş Yap</Text>


    </Pressable>
   
      {isLoading ? <Loading Loadingkapat={()=>setisLoading(false)} />:null}

    
  
  </View>

  

);
}

export default Login;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center'
  },
  textInputstyle:{
    borderWidth:1,
    width:'80%',
    height:50,
    borderRadius:5,
    marginVertical:10,
    textAlign:'center',
    fontWeight:'bold',
    

  },
  buton:{
    
    width:'30%',
    height:50,
    borderRadius:10,
    alignItems:'center',
    fontWeight:'bold',
    


  },
  butonText:{
    
    fontWeight:'bold',
    color:'white'


  },
  image:{
    width:100,
    height:100,
    
  }
  
})
