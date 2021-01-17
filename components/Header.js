import React from 'react';
import Link from 'next/link';

class Header extends React.Component {
    render() {
        return (
            <header>
                <div><Link href='/'><a>{this.props.header}</a></Link></div>
                <h1>{this.props.title}</h1>
            </header>
        )
    }
}
export default Header;