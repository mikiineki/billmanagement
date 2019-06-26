import {Form} from '../styled/Form'
import React from 'react'
import axios from 'axios'
import {  Col, FormControl, FormGroup, Button, Modal } from 'react-bootstrap'
import {FormCheck} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default class Pay extends React.Component{
    
	render(){
		let close = () => this.setState({ show: false });
		return(
			<Col sm={4} smOffset={4} style={{marginTop:'140px'}}>
				<Col>
				<Form onSubmit={this.onSubmit}>
					<h1 style={{textAlign:'center', marginBottom:'20px'}}>Pay your bill</h1>
				    <FormGroup>
							<FormControl type="bill" placeholder="Insert your bill number"  
							style={{width: '100%', padding: '12px 20px', margin: '8px 0', display: 'inline-block', border: '1px solid #ccc', boxSizing: 'border-box'}}/>
				    </FormGroup>
				    <FormGroup>
							<FormControl type="amount" placeholder="Enter amount to pay"  
							style={{width: '100%', padding: '12px 20px', margin: '8px 0', display: 'inline-block', border: '1px solid #ccc', boxSizing: 'border-box'}}/>
				    </FormGroup>
						<FormGroup>
							<FormControl type="company" placeholder="Enter company name"  
							style={{width: '100%', padding: '12px 20px', margin: '8px 0', display: 'inline-block', border: '1px solid #ccc', boxSizing: 'border-box'}}/>
				    </FormGroup>
						<FormGroup>
				    <Col>
				      <Link className="pull-right" to="/history">See your payment history.</Link>
				      </Col>
				    </FormGroup>

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