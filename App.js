import * as React from 'react';
import { Text, View, StyleSheet, Image, borderRadius, ProgressBarAndroid } from 'react-native';
import Constants from 'expo-constants';
import { Button } from 'react-native-paper';




export default function App() {
  return (

    <View>
      <View style={styles.container}>
        <Image source={require('./assets/photo.jpg')}
          style={{ width: 130, height: 130, top: 80, borderRadius: 70, }}
        />
         <View style={{width:20,height:20,backgroundColor:'green',borderRadius:50,top:50,left:40}}>
      </View>
      </View>
      <View style={titl.tit}>
        <Text style={styles.nam}>Mohamed Nasr</Text>
        <Text style={styles.nam}>FrontEnd Devloper</Text>
      </View>
      <View style={{backgroundColor:'#613854',width:411,justifyContent:'center' ,alignItems:'center'}}>
        <View style={{backgroundColor:'blue' , width:370,height:2,}}>
        </View>
      </View>
      <View style={Bigde.containers}>
        <View style={de.Age}>
          <View style={{ width: 80, height: 30, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Age</Text>
          </View>
        </View>
        <View style={{ width: 80, height: 30, position: 'absolute', right: 20, top: 50, alignItems: 'center', justifyContent: 'center' }}>
          <Text>24</Text>
        </View>
        <View style={{ width: 80, height: 30, left: -80, backgroundColor: 'yellow', alignItems: 'center', justifyContent: 'center' }}>
          <Text>Number</Text>
        </View>
        <View style={{ position: 'absolute', right: 20, top: 100, }}>
          <Text>120930</Text>
        </View>
        <View style={{ width: 80, height: 30, left: -80, top: 20, backgroundColor: 'yellow', alignItems: 'center', justifyContent: 'center' }}>
          <Text>FreeLanc</Text>
        </View>
        <View style={{ position: 'absolute', right: 20, top: 150, backgroundColor: 'green', }}>
          <Text >Avilabol</Text>
        </View>
        
      </View>
        
      <View style={{ backgroundColor: '#613854',top:-10, height: 230 }}>
      <View style={{backgroundColor:'#613854',width:411,justifyContent:'center' ,alignItems:'center'}}>
        <View style={{backgroundColor:'red' , width:370,height:2,}}>
        </View>
      </View>
        <View style={{ width: 80, height: 30, left: 20, top: 20, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Languge</Text>
        </View>
        <View style={{ top: 30, left: 35 }}>
          <Text style={{ top: -4 }}>English</Text>
          <Text style={{ right: -250, top: -17, }} >100%</Text>
          <View style={{ width: 300, height: 15, top: -10, backgroundColor: '#00c4ff', borderRadius: 20, justifyContent: 'center' }}>
            <View style={{ width: 290, height: 10, backgroundColor: '#fb8a2e', borderRadius: 20, left: 5 }}>
            </View>
          </View>
        </View>
        <View style={{ top: 30, left: 35 }}>
          <Text style={{ top: -4 }}>Banlga</Text>
          <Text style={{ right: -250, top: -17, }} >60%</Text>
          <View style={{ width: 300, height: 15, top: -10, backgroundColor: '#00c4ff', borderRadius: 20, justifyContent: 'center' }}>
            <View style={{ width: 200, height: 10, backgroundColor: '#fb8a2e', borderRadius: 20, left: 5 }}>
            </View>
          </View>
        </View>
        <View style={{ top: 30, left: 35 }}>
          <Text style={{ top: -4 }}>Spanish</Text>
          <Text style={{ right: -250, top: -17, }} >40%</Text>
          <View style={{ width: 300, height: 15, top: -10, backgroundColor: '#00c4ff', borderRadius: 20, justifyContent: 'center' }}>
            <View style={{ width: 150, height: 10, backgroundColor: '#fb8a2e', borderRadius: 20, left: 5 }}>
            </View>
          </View>
        </View>
      </View>

     <View style={{ backgroundColor: '#613854',top:-10, height: 230 }}>
     <View style={{justifyContent:'center',alignItems:'center'}}>
     <Button style={{width:200,height:40,backgroundColor:'#ff4e00',borderRadius:10, top:20,}}>Download CV</Button>
     </View>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#613854',
    padding: 200,
  }
});

const titl = StyleSheet.create({
  tit: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 200,
    left: 150,
    fontSize: 100,
    fontSize: 100,
  }
});

const Bigde = StyleSheet.create({
  containers: {
    backgroundColor: '#613854',
    padding: 100,
  },
});

const de = StyleSheet.create({
  Age: {
    position: 'absolute',
    top: 50,
    left: 20,
    backgroundColor: 'yellow',
  },
  example: {

    marginVertical: 100,
  },
})