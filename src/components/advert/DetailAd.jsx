import React from 'react';
import api from "../../utils/api";
import '../../css/bulma.css';
import '../../css/styles.css';
import { Link } from "react-router-dom";
import UserContext from '../../context/user';


import { Nav, Navbar, Button, ButtonToolbar, Form, FormControl  } from 'react-bootstrap';


const { findAdByID } = api();

export default class DetailAd extends React.Component {
  constructor(props){
    super(props)

    this.state = {}
    console.log(this.props)
  }

  componentWillMount(){
    const user = localStorage.getItem('userData');
    if(user == null){
      this.context.updateUser(user);
      this.props.history.push("/register");
    }

    // const userFromContext = this.context.user;
    // console.log('usuario del contexto es: ', userFromContext);
    // if(Object.entries(userFromContext).length === 0){
    //   this.props.history.push("/register");
    // }

  }
  
  componentDidMount(){
    
    const adId = this.props.match.params.adId;
    this.findByID(adId);
  }

  findByID = (adId) =>{
    findAdByID(adId).then(ad => 
      this.setState({
        ad
     })
    )
  }
  
  

  render(){
    const { ad } = this.state;
    
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
        // <div className="col-xs-12 cardcont nopadding">

        //   <div className="meta-data-container col-xs-12 col-md-8 push-md-4 col-lg-7 push-lg-5">
        //     <h1>{ad.name}</h1>

        //     {/* <span className="tagline">{data.tagline}</span> */}
        //     <p>{ad.description}</p>
        //     <div className="additional-details">
        //       <span className="genre-list">{ad.tags}</span>
        //       {/* <span className="production-list">{productionList}</span> */}
        //       <div className="row nopadding release-details">
        //         <div className="col-xs-6"> Created at: <span className="meta-data">{ad.createdAt}</span></div>
        //         <div className="col-xs-6"> Last Update: <span className="meta-data">{ad.updatedAt} mins</span> </div>
        //         <div className="col-xs-6"> Price: <span className="meta-data">{ad.price}</span></div>
        //         <div className="col-xs-6"> To: <span className="meta-data">{ad.type}</span></div>
        //       </div>
        //     </div>
        //   </div>
        //   <div className="poster-container nopadding  ">
        //     <img id="postertest" alt="" className='poster' src={`http://localhost:3001/${ad.photo}`}/>
        //   </div>
        // </div>
        <section class="section">
        <div class="container">
          <div class="columns is-desktop is-vcentered">
            <div class="column is-6-desktop"><img src={`http://localhost:3001/${ad.photo}`} alt=""/></div>
            <div class="column is-6-desktop">
              <div class="level is-mobile">
                
              </div>
              <h2 class="title is-spaced">{ad.name}</h2>
              <p class="subtitle">{ad.description}</p>
              <ButtonToolbar>
                        {
                            ad.tags.map(tag => (
                            
                            <Button className="tagButton" variant="outline-info"  size="">{tag}</Button>
                            ))
                            
                        
                        }
                </ButtonToolbar>
                <br></br>
              <div class="level is-mobile">
                <div class="level-left"><a class="level-item" href="#">
                    <div class="tag is-primary">&nbsp;</div></a><a class="level-item" href="#">
                    <div class="tag is-danger">&nbsp;</div></a><a class="level-item" href="#">
                    <div class="tag is-dark">&nbsp;</div></a><a class="level-item" href="#">
                    <div class="tag is-info">&nbsp;</div></a></div>
              </div>
              <div class="columns">
                <div class="column is-half">
                  <div class="field is-horizontal">
                    <div class="field-label is-normal">
                      <label class="label">{ad.price}€</label>
                    </div>
                    <div class="field-body">
                      <div class="field">
                        <div class="control">

                        </div>
                      </div>
                      <div class="field">
                        <div class="control">
                          <button class="button is-primary">To: {ad.type}</button>
                        </div>
                      </div>
                      <div><Link to={`/advert`}> <Button variant="outline-secondary">GoBack</Button></Link></div>
                    </div>
                  </div>
                </div>
              </div>
              <hr/>
              <div class="level is-mobile">
                <div class="level-left">
                  <div class="level-item"><a href="#">Add to favorites</a></div>
                </div>
                <div class="level-right">
                  {/* <div class="level-item">Share</div><a class="level-item" href="#"><img src="placeholder/icons/facebook-f.svg" alt=""/></a><a class="level-item" href="#"><img src="placeholder/icons/twitter.svg" alt=""/></a><a class="level-item" href="#"><img src="placeholder/icons/instagram.svg" alt=""/></a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        
      }
     
     </React.Fragment>
    )}
  
  
}
DetailAd.contextType = UserContext;