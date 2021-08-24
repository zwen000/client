import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            //initialize client
            // callback function: only invoked after this client:auth2 library has been loaded up into API
            window.gapi.client.init({
                clientId: '360100302157-v7gtn76rs91ahu9u1mrclpsi9c2bvb3e.apps.googleusercontent.com',
                scope: 'email'
            }).then(()=>{
                // invoke when our entire GAPI library is ready
                this.auth = window.gapi.auth2.getAuthInstance();

                //this.setState({ isSignedIn: this.auth.isSignedIn.get() });
                this.onAuthChange(this.auth.isSignedIn.get());

                // Listen when the isSignedIn status changes
                this.auth.isSignedIn.listen(this.onAuthChange);
            });

        });
    }

    onAuthChange = (isSignedIn) => {
        //this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        
        if (isSignedIn) {
            this.props.signIn();
        } else {
            this.props.signOut();
        }
    };

    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (
                <button className="ui red google button" onClick={this.onSignOutClick }>
                    <i className="google icon"/>
                    Sign Out
                </button>
            );
        } else  {
            return (
                <button className="ui red google button" onClick={this.onSignInClick }>
                    <i className="google icon"/>
                    Sign In with Google
                </button>
            );
        }
    }

    render() {
        return <div>{ this.renderAuthButton() } </div>;
    }
};

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut }) (GoogleAuth);