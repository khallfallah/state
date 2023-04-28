import logo from './logo.svg';
import './App.css';
class App extends React.Component {
  // eslint-disable-next-line react/require-render-return
  state = {
    fullName: "khallfallah wafa",
    bio: "systeme embarqué ",
    imgSrc: "vvvv",
    profession: "student ",
    timer:0,
    display: true
  }
  disbutton = () => {
    this.setState({ display: !this.state.display })
  }
  componentDidMount() {
    console.log("Counter Mounted");
    setInterval(() => {this.setState({timer:this.state.timer+1})}, 1000);
}
  render() {
    
  return (
    <div className="App">
     <div>
          <button onClick={this.disbutton}>{this.state.display ? "Hide" : "Show"}</button>
          {this.state.display ?
            <div>
              <span >profile </span>
              
              <span className='block'>fullName: {this.state.fullName} </span>
              <span className='block'> bio : {this.state.bio}</span>
              <span className='block'>photo :{this.state.imgSrc} </span>
              <span className='block'>profession: {this.state.profession} </span>
              <h4>Counter Timer:{this.state.timer}</h4>
            </div>
            : null}
        </div>
    </div>
  );
}

export default App;
