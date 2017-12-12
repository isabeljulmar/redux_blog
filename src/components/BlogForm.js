import React from 'react';
import { Button } from 'semantic-ui-react';

class BlogForm extends React.Component {

    //handleChange = (e) => this.setState({ name: e.target.value })

    render() {
        return(
            <div>
                <Button >Show all blogs</Button>
            </div>
        )
    }
}

export default BlogForm;