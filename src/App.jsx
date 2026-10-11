
import Profile from './components/content/Profile.jsx';
import Header from './components/header/Header.jsx';
import Navigation from './components/navigation/Navigation.jsx';
import Footer from './components/footer/Footer.jsx';


function App() {
  let flexdef={display:'flex',gap:'20px'};
  let flexchildnav={flex:1};
  let flexchildpro={flex:11};
  return (
    <div>
      <Header/>
      <div style={flexdef}>
        <div style={flexchildnav}><Navigation/></div>
        <div style={flexchildpro} id='profile'><Profile/></div>
      </div>
      <Footer/>
    </div>
    
  );
}

export default App;
