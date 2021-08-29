import React from "react";
import { Field, reduxForm } from "redux-form";
// reduxForm has the same functionality as connect()
import { connect } from 'react-redux';
import { createStream } from '../../actions';

class StreamCreate extends React.Component {

    renderError(meta) {
        if(meta.touched && meta.error) {
            return (
                <div className="ui error message">
                    <div className="header">{meta.error}</div>
                </div>
            );
        }

    }



    // renderInput(formProps) {
    //     return <input onChange={formProps.input.onChange} value={formProps.input.value}/>;
    // }
    renderInput = ({ input, label, meta }) => {
        //console.log("meta", meta);
        return (
            <div className={`field ${meta.touched && meta.error ? 'error' : ''}`}>
                <label>{label}</label>
                <input {...input} autoComplete='off'/>
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit(formValues) {
        console.log("onSubmit(formValues)", formValues);
    }

    render() {
        //console.log(this.props);
        return (
            <form
                className="ui form error"
                onSubmit={this.props.handleSubmit(this.onSubmit)}
            >
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field
                    name="description"
                    component={this.renderInput}
                    label="Enter Description"
                />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

const validate = (formValues) => {
    const errors = {};
    console.log('validate', formValues);

    if (!formValues.title) {
        // only ran if the user did not enter a title
        errors.title = "You must enter a title";
    }

    if (!formValues.description) {
        // only ran if the user did not enter a description
        errors.description = "You must enter a description";
    }
    return errors;
};

export default reduxForm({
    form: "streamCreate",
    validate: validate,
})(StreamCreate);
