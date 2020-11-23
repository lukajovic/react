import React, { component } from 'react'
class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    handleChange = (event) => {
        event.preventDefault();
        const inputValue = event.target.value;
        this.setState({ value: event.target.value })
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state !== prevState) {
            this.props.onSearchValueChange(this.state.value);
        }
    }

    render = () => {
        return (
            <nav>
                <div className="nav-wrapper">
                    <form>
                        <div className="input-field">
                            <input
                                type="text"
                                value={this.state.value}
                                onChange={this.handleChange}
                                placeholder='   Search'
                                className='validate' />
                            <i className="material-icons"></i>
                            <i className="material-icons"></i>
                        </div>
                    </form>
                </div>
            </nav>

        )
    }
}


export default Search