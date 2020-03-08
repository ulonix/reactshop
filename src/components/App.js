import React from 'react';
import Catalogo from './Catalogo';

class App extends React.Component{

        getLocation(){

        }
       render(){
            window.navigator.geolocation.getCurrentPosition(
                (position) =>   console.log(position), 
                (err) => console.log(err) 
            );

        return (
            <div>
                <Catalogo />
            </div>);    
       }

}

export default App;