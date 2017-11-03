import React, { PropTypes } from 'react';

const CurrentCount = ({ counters }) => (
    <div>
        CurrentCount: {counters}
    </div>
)

 // CurrentCount.propTypes = {
 //     counters: PropTypes.number.isRequired
 // };
export default CurrentCount
