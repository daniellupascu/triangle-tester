import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// functional component navigation, which returns the navigation bar at the top of the page
const navigation = () => (
    <AppBar color='primary' position='sticky'>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Triangle tester
          </Typography>
        </Toolbar>
    </AppBar>
);

export default navigation;