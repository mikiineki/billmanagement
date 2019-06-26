import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import {withRouter} from 'react-router'
import {Form} from '../styled/Form'

import {  Col, FormControl, FormGroup, Button, Checkbox } from 'react-bootstrap'
 class Signin extends React.Component{
	constructor(props){
		super(props);

		this.state={
			form: {
		        username: '',
		        password: '',
		    },
		}
	}


	onChange = (key,e) => {
		let {form} = this.state;
		form[key] = e.target.value
		this.setState({ form });
	}

	onSubmit = (evt) => {
	  evt.preventDefault();
	  axios.post(`http://localhost:3000/api/signin`, this.state.form)
  		.then(res => {
  			sessionStorage.setItem('token',res.data.token);
				this.props.history.push('/');
			})

	  .catch(function (error) {
	    console.log(error);
	  });
    }

	render(){
		return(
			<Col sm={4} smOffset={4} style={{marginTop:'140px'}}>
				<Col>
				<Form className="well" onSubmit={this.onSubmit}>
					<h1 style={{textAlign:'center', marginBottom:'20px'}}>Login</h1>
				    <FormGroup>
              <FormControl type="text" placeholder="Username" onChange={this.onChange.bind(this,'username')} 
              style={{width: '100%', padding: '12px 20px', margin: '8px 0', display: 'inline-block', border: '1px solid #ccc', boxSizing: 'border-box'}}/>
				    </FormGroup>
				    <FormGroup>
              <FormControl type="password" placeholder="Password" onChange={this.onChange.bind(this,'password')} 
              style={{width: '100%', padding: '12px 20px', margin: '8px 0', display: 'inline-block', border: '1px solid #ccc', boxSizing: 'border-box'}}/>
				    </FormGroup>
				    <FormGroup>
				    <Col>
				      <Link className="pull-right" to="/signup">Don't have account?</Link>
				      </Col>
				    </FormGroup>
				    <FormGroup>
              <Button bsStyle="primary" 
              style={{backgroundColor: 'rgba(0, 181, 204, 1)', color: 'white', padding: '14px 20px', margin: '8px 0', border: 'none', cursor: 'pointer', width: '100%'}} onClick={this.onSubmit} type="submit">SUBMIT</Button>
				    </FormGroup>
				 </Form>
				 </Col>
			</Col>
		)
	}
}
export default withRouter(Signin)