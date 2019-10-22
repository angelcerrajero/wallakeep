import React from 'react';
import api from "../../utils/api";
import '../../css/styles.css';
import '../../css/detailAd.scss';



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
      this.props.history.push("/register");
    }

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
        <div className="detail-container">
      {
        ad
        &&
        <div className="col-xs-12 cardcont nopadding">

          <div className="meta-data-container col-xs-12 col-md-8 push-md-4 col-lg-7 push-lg-5">
            <h1>{ad.name}</h1>

            {/* <span className="tagline">{data.tagline}</span> */}
            <p>{ad.description}</p>
            <div className="additional-details">
              <span className="genre-list">{ad.tags}</span>
              {/* <span className="production-list">{productionList}</span> */}
              <div className="row nopadding release-details">
                <div className="col-xs-6"> Created at: <span className="meta-data">{ad.createdAt}</span></div>
                <div className="col-xs-6"> Last Update: <span className="meta-data">{ad.updatedAt} mins</span> </div>
                <div className="col-xs-6"> Price: <span className="meta-data">{ad.price}</span></div>
                <div className="col-xs-6"> To: <span className="meta-data">{ad.type}</span></div>
              </div>
            </div>
          </div>
          <div className="poster-container nopadding col-xs-12 col-md-4 pull-md-8 col-lg-5 pull-lg-7 ">
            <img id="postertest" alt="" className='poster' src={`http://localhost:3001/${ad.photo}`}/>
          </div>
        </div>
        
      }
     </div>
     </React.Fragment>
    )}
    


  
}