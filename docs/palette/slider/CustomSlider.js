import React, { Fragment } from 'react'
import { Grid, Typography, Slider, Box } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { isIOS } from 'react-device-detect'

const iOSBoxShadow =
'0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

export const IOSSlider = withStyles({
  root: {
    color: '#3880ff',
    height: 2,
    padding: '12px 0',
  },
  thumb: {
    height: 20,
    width: 20,
    backgroundColor: '#fff',
    boxShadow: iOSBoxShadow,
    marginTop: -10,
    marginLeft: -10,
    '&:focus, &:hover, &$active': {
      boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        boxShadow: iOSBoxShadow,
      },
    },
  },
  active: {},
  track: {
    height: 2,
  },
  rail: {
    height: 2,
    opacity: 0.5,
    backgroundColor: '#808080',
  },
})(Slider);

function CustomSlider(props){
    return(
        <Fragment>
            <Grid container spacing={2}>
                <Grid item>
                    <Typography variant="subtitle2">
                        {props.displayName}
                    </Typography>
                </Grid>
                <Grid item xs>
                    {isIOS
                        ? <IOSSlider 
                            id={props.id}
                            step={props.step}
                            max={props.max}
                            onChange={props.onChange}
                            value={props.value}
                            />
                        : <Slider
                            id={props.id}
                            step={props.step}
                            max={props.max}
                            onChange={props.onChange}
                            value={props.value}
                            />
                    }
                </Grid>
                <Grid item xs={2}>
                    <Typography variant="subtitle2">
                        <Box textAlign="right">
                            {props.value}/{props.max}
                        </Box>
                    </Typography>
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default CustomSlider