import React, { PropTypes } from 'react';
import Button from '../components/Button'
const CurrentCount = ({ counters ,p }) => (
    <div>
        CurrentCount: { counters != 5 ? counters :  0}
        <Button
            OnIncrement={() => p(20)}
            name="Plus"/>
    </div>
)

 // CurrentCount.propTypes = {
 //     counters: PropTypes.number.isRequired
 // };
export default CurrentCount
