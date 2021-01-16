import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';

class Layout extends React.Component {
    render() {
        return (
            <div>
                <Head>
                    <title>{this.props.title}</title>
                    <meta charSet='utf-8' />
                    <meta name='viewport' content='initial-scale=1.0,width=device-width' />
                </Head>
                <Header header={this.props.header} title={this.props.title} />
                { this.props.children}
                <Footer footer="ここはフッターです。" />
            </div>
        )
    }
}
export default Layout;