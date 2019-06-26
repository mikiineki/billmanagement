import React from 'react'
import axios from 'axios'
import {  Col, FormControl, FormGroup, Button, Modal } from 'react-bootstrap'
import {FormCheck} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {Form} from '../styled/Form'
import Nav from "./Nav";
export default class Signup extends React.Component{
	constructor(props){
		super(props);

		this.state={
			form: {
		        username: '',
		        password: ''
		    },
		    show: false
		}

	}
	onChange = (key,e) => {
		let {form} = this.state;
		form[key] = e.target.value
		
	}
                
	onSubmit = (evt) => {
		evt.preventDefault();
		let self = this;
	axios.post(`http://localhost:3000/api/signup`, this.state.form)
		.then(function (response) {
			console.log(response);
		 if(response.data.status === 201)
				 self.setState({ show: true });
		})
		.catch(function (error) {
			console.log(error);
		});
	}
	login = () => {
		this.props.history.push('/signin')
	}

	render(){
		let close = () => this.setState({ show: false });
		return(
			<Col sm={4} smOffset={4} style={{marginTop:'140px'}}>
				<Col>
				<Form onSubmit={this.onSubmit}>
					<h1 style={{textAlign:'center', marginBottom:'20px'}}>Create your account</h1>
				    <FormGroup>
							<FormControl type="text" placeholder="Name" onChange={this.onChange.bind(this,'username')} 
							style={{width: '100%', padding: '12px 20px', margin: '8px 0', display: 'inline-block', border: '1px solid #ccc', boxSizing: 'border-box'}}/>
				    </FormGroup>
				    <FormGroup>
							<FormControl type="password" placeholder="Password" onChange={this.onChange.bind(this,'password')} 
							style={{width: '100%', padding: '12px 20px', margin: '8px 0', display: 'inline-block', border: '1px solid #ccc', boxSizing: 'border-box'}}/>
				    </FormGroup>
						<FormGroup>
							<FormControl type="confirmpassword" placeholder="Confirm Your Password"  
							style={{width: '100%', padding: '12px 20px', margin: '8px 0', display: 'inline-block', border: '1px solid #ccc', boxSizing: 'border-box'}}/>
				    </FormGroup>
						<FormGroup>
							<FormControl type="creditcard" placeholder="Credit Card Number"  
							style={{width: '100%', padding: '12px 20px', margin: '8px 0', display: 'inline-block', border: '1px solid #ccc', boxSizing: 'border-box'}}/>
				    </FormGroup>

						<FormGroup>
				    <Col>
				      <Link className="pull-right" to="/signin">Already have account?</Link>
				      </Col>
				    </FormGroup>

				    <Modal
				      bsSize="small"
			          show={this.state.show}
			          onHide={close}
			          container={this}
			          aria-labelledby="contained-modal-title"
			        >
			          <Modal.Header closeButton>
			          </Modal.Header>
			          <Modal.Body >
			          		<p><b>Register Successfully !</b></p>
			          </Modal.Body>
			          <Modal.Footer>
			            <Button block bsStyle="primary" onClick={this.login}>Login</Button>
			          </Modal.Footer>
			        </Modal>

				    <FormGroup>
							<Button style = {{backgroundColor: 'rgba(0, 181, 204, 1)', color: 'white', padding: '14px 20px', margin: '8px 0', border: 'none', cursor: 'pointer', width: '100%'}}
							type="submit">SUBMIT</Button>
				    </FormGroup>
				 </Form>
				 </Col>
			</Col>
		)
	}
}