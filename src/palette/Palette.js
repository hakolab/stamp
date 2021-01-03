import React from 'react'
import { Grid } from '@material-ui/core'
import { HuePicker } from 'react-color'
import CustomSlider from './slider/CustomSlider'
import Preview from './preview/Preview'
import { connect } from 'react-redux'

class Palette extends React.Component {

    palette_style = {
        marginBottom: "10px"
    }

    handleChangeColor = (color) => {
        let event = {
            target: {
                id: this.props.conf.backgroundColor.id,
            }
        }
        this.props.onChange(event, color.hex)
    }

    render(){
        return (
            <div style={this.palette_style}>
                <Grid container spacing={6} alignItems="center" justify="center">
                    <Grid item xs={6}>
                        <Grid item xs={12}>
                            <CustomSlider
                                id={this.props.conf.width.id}
                                step={this.props.conf.width.step}
                                max={this.props.conf.width.max}
                                value={this.props.conf.width.value}
                                onChange={this.props.onChange}
                                />
                        </Grid>
                        <Grid item xs={12}>
                            <CustomSlider
                                id={this.props.conf.height.id}
                                step={this.props.conf.height.step}
                                max={this.props.conf.height.max}
                                value={this.props.conf.height.value}
                                onChange={this.props.onChange}
                                />
                        </Grid>
                        <Grid item xs={12}>
                            <CustomSlider
                                id={this.props.conf.borderRadius.id}
                                step={this.props.conf.borderRadius.step}
                                max={this.props.conf.borderRadius.max}
                                value={this.props.conf.borderRadius.value}
                                onChange={this.props.onChange}
                                />
                        </Grid>
                        <Grid item xs={12}>
                            <CustomSlider
                                id={this.props.conf.opacity.id}
                                step={this.props.conf.opacity.step}
                                max={this.props.conf.opacity.max}
                                value={this.props.conf.opacity.value}
                                onChange={this.props.onChange}
                                />
                        </Grid>
                        <Grid item xs={12}>
                            <h3>{this.props.conf.backgroundColor.id}: {this.props.conf.backgroundColor.value}</h3>
                            <HuePicker
                                color={this.props.conf.backgroundColor.value}
                                onChange={this.handleChangeColor}
                                width={this.props.conf.backgroundColor.width}
                                />
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container spacing={6} alignItems="center" justify="center">
                            <Preview preview={this.props.preview}/>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

Palette = connect((state) => state)(Palette)
export default Palette