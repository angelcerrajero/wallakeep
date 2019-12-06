import React from 'react';
import api from "../../utils/api";
import '../../css/bulma.css';
import '../../css/styles.css';
import { Link } from "react-router-dom";
import Tags from "../Register/Tags";
import { Nav, Navbar, Button, ButtonToolbar, Form, FormControl  } from 'react-bootstrap';


const { findAdByID, editAdvert, newAdvert } = api();

export default class Editnew extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        advert: {
            name: "",
            description: "",
            venta: "",
            price: "",
            tags: [],
            photo: "",
            edit: false,
        },
    }
 
    this.onSubmit = this.onSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  componentWillMount(){
    const user = localStorage.getItem('userData');
    if(user == null){
      this.props.history.push("/register");
    }

    const adId =this.props.match.params.adId;
    console.log('adId es:', adId)

    if(adId === undefined){
        console.log('adId es undefined, no hago setState y cargo el form con datos vacios')

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
        advert: {
            adId: ad._id,
            name: ad.name,
            type: ad.type,
            description: ad.description,
            price: ad.price,
            tags: ad.tags,
            photo: ad.photo,
            edit: true,
        },
     })
    )
  }

  onInputChange(event) {
    const { name, value } = event.target;
    
    this.setState({
        advert:{
            ...this.state.advert,
            [name]: value

        }
    })
    // this.setState({
    //   advert: {
    //     ...this.state.advert,
    //     [name]: value
    //   }
    // });
  }

  onSubmit(event) {
    event.preventDefault();
    console.log(this.state.advert)
    console.log(typeof this.state.advert.type)

    // if(this.state.advert.type === "true"){
    //     console.log('paso por true')
    //     this.setState({
    //         advert:{
    //             type: true,
    //         }
    //     });
    //     console.log(typeof this.state.advert.type)
    // }else if(this.state.advert.type === "false"){
    //     console.log('paso por false')
    //     this.setState({
    //         advert:{
    //             type: false,
    //         }
    //     });
    // }
    if (this.state.advert.edit === true) {
      return editAdvert(this.state.advert.adId, this.state.advert)
        .then((res) => {
          alert('Advert have been updated')
        })

    }
    
    newAdvert(this.state.advert).then(res => {
      alert('Advert have been created');
      this.setState({   //Una vez creamos el anuncio dejamos el formulario en blanco
        advert: {
          name: '',
          description: '',
          tags: [],
          price: '',
          type: '',
          photo: '',
          edit: false
        },
      })
    });
  }
  
  

  render(){
    const { advert } = this.state;
    

     

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
        advert
        &&
        
        <div className="formContainer">
        <form className="formHome"  onSubmit = {this.onSubmit}>
          <div className="field">
            <label className="label is-size-6"></label>
            <div className="control">
                Ad Name
              <input className="input" type="text" value={advert.adName}  name="name" onChange={this.onInputChange}/>
            </div>
          </div>

          <div className="field">
            <label className="label"></label>
            <div className="control">
                Description
              <input className="input" type="text" placeholder={advert.adDescription}  name="description" onChange={this.onInputChange} />
            </div>
          </div>

          <div className="field">
            <label className="label"></label>
            <div className="control">
                Price €:
              <input className="input" type="number" placeholder={advert.adPrice} name="price" onChange={this.onInputChange} />
            </div>
          </div>

          <div className="field">
            <label className="label"></label>
            <div className="control">
                Buy or  Sell:
                <br></br>
                <select className="select" name="type" placeholder={advert.adType} onChange={this.onInputChange}>
                            <option value="buy">buy</option>
                            <option value="sell">sell</option>
                          </select>
            </div>
          </div>

            Tags:
          <Tags tagHandle={this.onInputChange} />

          <div className="field">
            <label className="label"></label>
            <div className="control">
            Photo url:
            <input className="input" type="text" placeholder={advert.adPhoto} name="photo" onChange={this.onInputChange}/>
                <div class="column is-6-desktop"><img src={`http://localhost:3001/${advert.adPhoto}`} alt=""/></div>
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