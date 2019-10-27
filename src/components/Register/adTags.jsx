import React from "react";
import api from "../../utils/api";
// import '../../css/styles.css';
// import '../../css/bulma.css';
// import { Link } from "react-router-dom";
import { Form, Row, Col } from 'react-bootstrap';

const { getTags } = api();

export default class Tags extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          tags: [],
          loading: true
        };
    
        this.myTags = this.myTags.bind(this);

   
      }

      componentWillMount(){
        this.myTags();
      }

    myTags = () => {
        getTags().then (tag => 
            this.setState({
                tags: tag,
                loading: false
              })
            );
    }

    render() {
        const { tags, loading } = this.state;
        
        

        if(loading){
            
            return null
        }
        
        return(
            
            <React.Fragment key="tagList">
            <div className="" >
            
            <Form.Group controlId="tagSelect">
                
                <Form.Control as="select" name="adTags" size="" autoFocus={true} required="required" onChange={this.props.tagHandle}>
                    <option className="field" value="" selected disabled>Choose your Tag</option>
            {
                tags.map(element =>(
                    
                    <option> {element}</option> 
                // <option value={element}>{element}</option> 
                
                ))
            }
             </Form.Control>
             </Form.Group>
            </div>
            </React.Fragment>
        )
    }
}