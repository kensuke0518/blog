import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div>{this.props.footer}</div>
            </footer>
        )
    }
}
export default Footer;