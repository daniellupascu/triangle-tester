import React from 'react';

import Button from '@material-ui/core/Button';
import './FormButtons.css'

const formButtons = (props) => (
    <div className='Form-buttons'>
        <Button variant='contained' color='secondary' onClick={props.submited}>Submit</Button>
        <Button variant='outlined' onClick={props.cleared}>Clear</Button>
    </div>
);

export default formButtons;