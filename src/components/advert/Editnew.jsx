import React from 'react';
import api from "../../utils/api";
import '../../css/bulma.css';
import '../../css/styles.css';
import { Link } from "react-router-dom";
import { Nav, Navbar, Button, ButtonToolbar, Form, FormControl  } from 'react-bootstrap';


const { findAdByID } = api();

export default class Editnew extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      ad: "",
      tags:[],
      price:"",
      type:"",
    }
    console.log(this.props)
    console.log(this.state)
  }

  componentWillMount(){
    const user = localStorage.getItem('userData');
    if(user == null){
      this.props.history.push("/register");
    }

    const adId =this.props.match.params.adId;
    console.log('adId es:', adId)

    if(adId === undefined){
        console.log('adId es undefined, no hago setState')
    }else{
        console.log('setState con la info del articulo')
        this.findByID(adId);
    }

  }
  
//   componentDidMount(){
    
//     const adId = this.props.match.params.adId;
    
//   }

  findByID = (adId) =>{
    findAdByID(adId).then(ad => 
      this.setState({
        ad

     })
    )
  }
  
  

  render(){
    const { ad } = this.state;
      console.log(this.state)
    return(
      <React.Fragment>
         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
<Link to="/advert"><Navbar.Brand>
            <img
              src="https://es.seaicons.com/wp-content/uploads/2015/09/Online-Shopping-icon.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="WallaKeep"
            />{' '}
            WallaKeep
        </Navbar.Brand>
        </Link>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      
    </Nav>
    <Nav>
    <Form inline>
            <FormControl type="text" placeholder="Search" onKeyUp={this.search} className="mr-sm-2" />
            <Button variant="outline-info">New</Button>
          </Form>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        
      {
        ad
        &&
        <div className="formContainer">
        <form className="formHome" onSubmit = {this.onSubmit}>
          <div className="field">
            <label className="label is-size-6"></label>
            <div className="control">
              <input className="input" type="text" placeholder="Name" name="name" onChange={this.onInputChange}/>
            </div>
          </div>

          <div className="field">
            <label className="label"></label>
            <div className="control">
              <input className="input" type="text" placeholder="Surnname" name="surname" onChange={this.onInputChange} />
            </div>
          </div>
        
        <div className="field is-grouped">
            <div className="control">
                <button className="button is-warning">Submit</button>
            </div>
                      
        </div>
          
          </form>
        </div>




    //     <section class="section">
    //     <div class="container">
    //       <div class="columns is-desktop is-vcentered">
    //         <div class="column is-6-desktop"><img src={`http://localhost:3001/${ad.photo}`} alt=""/></div>
    //         <div class="column is-6-desktop">
    //           <div class="level is-mobile">
                
    //           </div>
    //           <h2 class="title is-spaced">{ad.name}</h2>
    //           <p class="subtitle">{ad.description}</p>
    //           <ButtonToolbar>
    //                     {
    //                         ad.tags.map(tag => (
                            
    //                         <Button className="tagButton" variant="outline-info"  size="">{tag}</Button>
    //                         ))
                            
                        
    //                     }
    //             </ButtonToolbar>
    //             <br></br>
    //           <div class="level is-mobile">
    //             <div class="level-left"><a class="level-item" href="#">
    //                 <div class="tag is-primary">&nbsp;</div></a><a class="level-item" href="#">
    //                 <div class="tag is-danger">&nbsp;</div></a><a class="level-item" href="#">
    //                 <div class="tag is-dark">&nbsp;</div></a><a class="level-item" href="#">
    //                 <div class="tag is-info">&nbsp;</div></a></div>
    //           </div>
    //           <div class="columns">
    //             <div class="column is-half">
    //               <div class="field is-horizontal">
    //                 <div class="field-label is-normal">
    //                   <label class="label">{ad.price}€</label>
    //                 </div>
    //                 <div class="field-body">
    //                   <div class="field">
    //                     <div class="control">

    //                     </div>
    //                   </div>
    //                   <div class="field">
    //                     <div class="control">
    //                       <button class="button is-primary">To: {ad.type}</button>
    //                     </div>
    //                   </div>
    //                   <div><Link to={`/advert`}> <Button variant="outline-secondary">GoBack</Button></Link></div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           <hr/>
    //           <div class="level is-mobile">
    //             <div class="level-left">
    //               <div class="level-item"><a href="#">Add to favorites</a></div>
    //             </div>
    //             <div class="level-right">
    //               {/* <div class="level-item">Share</div><a class="level-item" href="#"><img src="placeholder/icons/facebook-f.svg" alt=""/></a><a class="level-item" href="#"><img src="placeholder/icons/twitter.svg" alt=""/></a><a class="level-item" href="#"><img src="placeholder/icons/instagram.svg" alt=""/></a> */}
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
        
      }
     
     </React.Fragment>
    )}
    


  
}