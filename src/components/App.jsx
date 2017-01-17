import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Profile from './github/Profile.jsx';



class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			username: 'Vinayui',
			userData: [],
			userRepos: [],
			perPage: 5
		}
	}
 //Get user data from github 
 getUserData(){

 	$.ajax({
 		url: 'https://api.github.com/users/' + this.state.username + '?client_id='+this.props.clientId + 
 		'&client_secret=' + this.props.clientSecret, 
 		dataType: 'json',
 		cache: false,
 		success: function(data){
 			this.setState({userData: data});
 			console.log(data);
 		}.bind(this),
 		error: function(xhr, status, err){
 			this.setState({userData: null});
 			alert(err);
 		}.bind(this)
 	});
 }
 

 componentDidMount(){
 	this.getUserData();
 }
	render() {
		return(
				<Profile userData = {this.state.userData} />
			  )
	}

}

App.propTypes =  {

	clientId: React.PropTypes.string,
	clientSecret : React.PropTypes.string
};

App.defaultProps = {
	clientId: 'b6b3477e6218874e7f29',
	clientSecret: 'e1aad81b3130f553a1cbfc1cef55c195884a68c6'
}


export default App