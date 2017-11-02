import React, { PropTypes } from 'react';

const IncrementButton = () => {
    return(
        <button onClick={this.props.increment}>Click me</button>
    )
}
IncrementButton.propTypes = {                    // The @provide decorator will match our
   increment: PropTypes.func.isRequired  // `counter` provider to this component and
 };
export default IncrementButton
