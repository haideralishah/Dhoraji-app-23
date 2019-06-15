import React from 'react';
import CustomeLinks from './Customlinks';

class Bookmarks extends React.Component {
    render() {
        return (
            <div>
                <CustomeLinks href='https://www.google.com' linktext='Google' />
                <br />
                <CustomeLinks href='https://www.facebook.com' linktext='Facebook' />
                <br />
                <CustomeLinks href='https://www.youtube.com' linktext='Youtube' />
            </div>
        )
    }
}

export default Bookmarks;