import React, {Component} from 'react';
import RowTitle from './row_title';
import {FormGroup, FormControl, ControlLabel, Col, Form, Row, Button, Modal} from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import moment from 'moment';

export default class AddUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            source: '',
            date: moment(),
            isSubmitting: false,
            showErrorModal: false,
            showSuccessModal: false,
            showNetworkErrorModal: false
        };
    }

    handleTitleChange(title) {
        this.setState({title: title.target.value});
    }

    handleDateChange(date) {
        this.setState({date: date});
        console.log(this.state.date);
    }

    handleSourceChange(source) {
        this.setState({source: source.target.value});
    }

    handleDescriptionChange(description) {
        this.setState({description: description.target.value});
    }

    isInputValid() {
        const titleLength = this.state.title.length;
        const descriptionLength = this.state.description.length;
        const sourceLength = this.state.source.length;
        const date = this.state.date;
        const sourceUrl = this.state.source;
        const sourceUrlCheck = new RegExp(
            "^" +
            // protocol identifier
            "(?:(?:https?|ftp)://)" +
            // user:pass authentication
            "(?:\\S+(?::\\S*)?@)?" +
            "(?:" +
            // IP address exclusion
            // private & local networks
            "(?!(?:10|127)(?:\\.\\d{1,3}){3})" +
            "(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})" +
            "(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})" +
            // IP address dotted notation octets
            // excludes loopback network 0.0.0.0
            // excludes reserved space >= 224.0.0.0
            // excludes network & broacast addresses
            // (first & last IP address of each class)
            "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" +
            "(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" +
            "(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" +
            "|" +
            // host name
            "(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)" +
            // domain name
            "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*" +
            // TLD identifier
            "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))" +
            // TLD may end with dot
            "\\.?" +
            ")" +
            // port number
            "(?::\\d{2,5})?" +
            // resource path
            "(?:[/?#]\\S*)?" +
            "$", "i"
        );
        if (titleLength > 0 && titleLength < 30 && descriptionLength > 0 && descriptionLength < 300 && sourceLength > 0 && date != null && sourceUrlCheck.test(sourceUrl)) {
            return true;
        } else {
            return false;
        }
    }

    closeShowErrorModal() {
        this.setState({showErrorModal: false});
    }

    openShowErrorModal() {
        this.setState({showErrorModal: true});
    }

    closeShowNetworkErrorModal() {
        this.setState({showNetworkErrorModal: false});
    }

    openShowNetworkErrorModal() {
        this.setState({showNetworkErrorModal: true});
    }

    closeShowSuccessModal() {
        this.setState({showSuccessModal: false});
    }

    openShowSuccessModal() {
        this.setState({showSuccessModal: true});
    }

    handleSubmit() {
        if (!this.isInputValid()) {
            this.openShowErrorModal();
        } else {
            this.setState({isSubmitting: true});
            const title = this.state.title.trim();
            const description = this.state.description.trim();
            const source = this.state.source.trim();
            const date = this.state.date;

            // Make an `ajax` call below
            //use 'this.openShowNetworkErrorModal();' if the ajax call fails

            // Execute the below code after successful completion of Ajax Call
            this.setState({isSubmitting: false});
            this.clear();
            this.openShowSuccessModal();
        }
    }

    clear() {
        this.setState({title: ''});
        this.setState({description: ''});
        this.setState({source: ''});
        this.setState({date: Moment()});
    }

    render() {
        return (<div className="container">
                <RowTitle title="Add Update"/>
                <Modal show={this.state.showNetworkErrorModal} onHide={this.closeShowNetworkErrorModal.bind(this)}
                       className="show-network-error-modal-text-color">
                    <Modal.Header closeButton>
                        <Modal.Title>Network Error</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            Oops! Something went wrong with the network. Please refresh the page and try again.
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.closeShowNetworkErrorModal.bind(this)}>Close</Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={this.state.showSuccessModal} onHide={this.closeShowSuccessModal.bind(this)}
                       className="show-success-modal-text-color">
                    <Modal.Header closeButton>
                        <Modal.Title>Success</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            We have received your update. Thanks for contributing!
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.closeShowSuccessModal.bind(this)}>Close</Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={this.state.showErrorModal} onHide={this.closeShowErrorModal.bind(this)}
                       className="show-error-modal-text-color">
                    <Modal.Header closeButton>
                        <Modal.Title>Input Error</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            Oops! Looks like you missed something
                            <ul>
                                <li>The Project Title should not be more than 30 characters long</li>
                                <li>The Project Description should not be more than 300 characters long</li>
                                <li>The Source should be a valid URL</li>
                                <li>The Release Date should not be empty</li>
                            </ul>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.closeShowErrorModal.bind(this)}>Close</Button>
                    </Modal.Footer>
                </Modal>
                <Form horizontal>
                    <Row>
                        <Col sm={12} lg={3}>
                            <FormGroup
                                controlId="formBasicText"
                            >
                                <ControlLabel>Project Title</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.title}
                                    placeholder="Project Title"
                                    onChange={this.handleTitleChange.bind(this)}
                                />
                            </FormGroup>
                            <FormGroup
                                controlId="formBasicText"
                            >
                                <ControlLabel>Source</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.source}
                                    placeholder="http://www.example.com"
                                    onChange={this.handleSourceChange.bind(this)}
                                />
                            </FormGroup>
                            <FormGroup
                                controlId="formBasicText">
                                <ControlLabel>Release Date</ControlLabel>
                                <br />
                                <DatePicker
                                    selected={this.state.date}
                                    onChange={this.handleDateChange.bind(this)} className="date-text-color"/>
                            </FormGroup>
                        </Col>
                        <Col sm={12} lg={8} lgOffset={1}>
                            <FormGroup
                                controlId="formControlsTextarea"
                            >
                                <ControlLabel>Description</ControlLabel>
                                <FormControl
                                    componentClass="textarea"
                                    placeholder="Description"
                                    value={this.state.description}
                                    onChange={this.handleDescriptionChange.bind(this)}
                                    rows="15"
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Button bsStyle="primary"
                                disabled={this.state.isSubmitting}
                                onClick={!this.state.isSubmitting ? this.handleSubmit.bind(this) : null}>
                            {this.state.isSubmitting ? 'Submitting...' : 'Submit'}
                        </Button>
                        <span>  </span>
                        <Button bsStyle="primary" onClick={this.clear.bind(this)}>
                            Clear
                        </Button>
                    </Row>
                </Form>
            </div>
        );
    }
}