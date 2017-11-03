import React, { PropTypes } from 'react';

const CurrentCount = ({ counters }) => (
    <div>
        CurrentCount: { counters < 5 ? counters :  0}
    </div>
)

 // CurrentCount.propTypes = {
 //     counters: PropTypes.number.isRequired
 // };
export default CurrentCount
