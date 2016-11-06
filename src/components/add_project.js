import React, {Component} from 'react';
import RowTitle from './row_title';
import {FormGroup, FormControl, ControlLabel, Col, Form, Row, Button, Modal} from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import moment from 'moment';

export default class AddProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            company: '',
            source: '',
            description: '',
            date: moment(),
            tags: '',
            tagsOnDisplay:[],
            isSubmitting: false,
            showErrorModal: false,
            showSuccessModal: false,
            showNetworkErrorModal: false
        };
        this.productCategory = '';
    }

    handleTitleChange(title) {
        this.setState({title: title.target.value});
    }

    handleDateChange(date) {
        console.log(date);
        this.setState({date: date});
    }

    handleCompanyChange(company) {
        this.setState({company: company.target.value});
    }

    handleSourceChange(source) {
        this.setState({source: source.target.value});
    }

    handleDescriptionChange(description) {
        this.setState({description: description.target.value});
    }

    handleProjectCategoryChange(category) {
      console.log(category.target.value);
      this.productCategory = category.target.value;
    }

    handleTagsChange(tags) {
      this.setState({tags: tags.target.value});
      let tagstemp = tags.target.value.split(" ");
      console.log(tagstemp);
      for(let i=0; i< tagstemp.length; i++) {
        if(tagstemp[i] === "") {
            tagstemp.splice(i, 1);
            i--;
        } else {
          tagstemp[i] = tagstemp[i].toLowerCase();
        }
      }
      console.log(tagstemp);
      this.setState({tagsOnDisplay: tagstemp});
    }

    isInputValid() {
        const title = this.state.title.replace(' ', '');
        console.log(title);
        const titleCheckRegex = new RegExp("[A-Za-z0-9]{1,30}");
        const company = this.state.company.replace(' ', '');
        console.log(company);
        const companyCheckRegex = new RegExp("[A-Za-z0-9]{1,30}");
        const descriptionLength = this.state.description.length;
        const date = this.state.date;
        console.log(date);
        const productCategory = this.productCategory;
        console.log(productCategory);
        const sourceLength = this.state.source.length;
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

        if (titleCheckRegex.test(title) && companyCheckRegex.test(company) && descriptionLength > 0 && descriptionLength <= 300 && productCategory != '' && sourceUrlCheck.test(sourceUrl)){
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
            const company = this.state.company.trim();
            const date = this.state.date;
            const source = this.state.source.trim();
            const tags = this.state.tagsOnDisplay.push(title, company, this.productCategory);
            console.log("submit"+title);
            console.log("submit"+date);
            console.log("submit"+description);
            console.log("submit"+company);
            console.log("submit"+source);
            console.log("submit"+tags);

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
        this.setState({company: ''});
        this.setState({date: moment()});
        this.setState({source: ''});
        this.state.tags = '';
        this.state.tagsOnDisplay = [];
        this.productCategory = '';
    }

    render() {
      const projectCategories = () => {
        let projectCategories = [];
        let distinctCategories = new Set();
        for(let i=0; i < this.props.projects.length; i++) {
            distinctCategories.add(this.props.projects[i].category);
        }
        projectCategories = Array.from(distinctCategories).map((option)=>{
          return <option value={option}>{option}</option>;
        });
        console.log(projectCategories);
        return projectCategories;

      };

      const displayTags = () => {
        console.log("from displayTags");
        let tags = this.state.tagsOnDisplay.map((tag) => {
          console.log(tag);
          return `#${tag} `;
        });
        return <FormControl.Static>{tags}</FormControl.Static>;
      };
        return (<div className="container">
                <RowTitle title="Add Project"/>
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
                                <ControlLabel>Title</ControlLabel>
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
                                <ControlLabel>Company</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.company}
                                    placeholder="Project Company"
                                    onChange={this.handleCompanyChange.bind(this)}
                                />
                            </FormGroup>
                            <FormGroup controlId="formControlsSelect">
                              <ControlLabel>Project Categories</ControlLabel>
                              <FormControl componentClass="select" onChange={this.handleProjectCategoryChange.bind(this)}>
                              {projectCategories()}
                              </FormControl>
                              </FormGroup>
                              <FormGroup
                                  controlId="formBasicText"
                              >
                                  <ControlLabel>Add Source</ControlLabel>
                                  <FormControl
                                      type="text"
                                      value={this.state.source}
                                      placeholder="http://www.example.com"
                                      onChange={this.handleSourceChange.bind(this)}
                                  />
                              </FormGroup>
                              <FormGroup
                                  controlId="formBasicText"
                              >
                                  <ControlLabel>Tags</ControlLabel>
                                  <FormControl
                                      type="text"
                                      value={this.state.tags}
                                      placeholder="Eg: tag1 tag2 tag3..."
                                      onChange={this.handleTagsChange.bind(this)}
                                  />
                              </FormGroup>
                              <FormGroup>
                              <ControlLabel>Title and Company are auto tagged</ControlLabel>
                                <ControlLabel>Tags Added By You</ControlLabel>
                                {displayTags()}
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
                                <ControlLabel>Project Description</ControlLabel>
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
