import React from "react";
import api from "../../utils/api";
import AdsList from "./AdsList"
import '../../css/styles.css';
import '../../css/bulma.css';
import { Navbar, Button, Form, FormControl, Nav  } from 'react-bootstrap';


const { getAds, findAds } = api();



export default class Adverts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };

    this.myAds();
  }

  componentWillMount(){
    console.log('compruebo user antes de montar componente registro');
    const user = localStorage.getItem('userData');
    if(user == null){
      this.props.history.push("/register");
    }

  }


myAds = () => {
    getAds().then(ad =>
      this.setState({
        ads: ad
      })
    );
  };


  search = (event) => {
    const query = event.target.value;
    if (query !== ''){
      return findAds(query).then(ad => this.setState({
        ads: ad
      }))
    }
    this.myAds();
    
  
    
  }

  render() {
    const { ads } = this.state;
    return (
      <React.Fragment >
        <Navbar collapseOnSelect bg="dark" variant="dark">
        <Navbar.Brand href="#home">
            <img
              src="https://es.seaicons.com/wp-content/uploads/2015/09/Online-Shopping-icon.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="WallaKeep"
            />{' '}
            WallaKeep
        </Navbar.Brand>
            <Nav className="mr-auto">
                {/* <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link> */}
              </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" onKeyUp={this.search} className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
  
        

        {
            ads 
            && 
            <AdsList ads={ads} />
        }
      </React.Fragment>
    );
  }
}
