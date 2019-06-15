
// ReactDOM.render(
//     React.createElement('h1', null, 'Hello World')
//     ,
//     document.getElementById('content')
// );

















// var h1 = React.createElement('h1', null, 'Hello World');
// var content = document.getElementById('content');

// ReactDOM.render(h1, content);
















// var a = React.createElement('a', { href: 'https://www.google.com', target: '_blank', title: 'Google Link' }, 'Google');
// var content = document.getElementById('content');

// ReactDOM.render(a, content);

























// class FirstComponent extends React.Component {
//     render() {
//         return (
//             React.createElement('div', null,
//                 React.createElement('h1', null, 'inside component'),
//                 React.createElement('p', null, 'inside para')
//             )
//         )
//     }
// }




// var h1Component = React.createElement(FirstComponent, null);
// var content = document.getElementById('content');

// ReactDOM.render(h1Component, content);



































class CustomeLink extends React.Component {
    render() {
        console.log(this.props)

        return (
            //React.createElement('a', this.props, this.props.linktext)
            <a href="https://www.google.com">Google</a>
            // React.createElement('a', {href:'https://www.google.com'},'Google')


        )
    }
}

var myLinks = React.createElement('div', null,
    React.createElement(CustomeLink, { href: 'https://www.google.com', target:"_blank", linktext: 'Google' }),
    React.createElement(CustomeLink, { href: 'https://www.youtube.com', linktext: 'Youtube' }),
    React.createElement(CustomeLink, { href: 'https://www.facebook.com', linktext: 'Facebook' })

)

var content = document.getElementById('content');

ReactDOM.render(myLinks, content);


