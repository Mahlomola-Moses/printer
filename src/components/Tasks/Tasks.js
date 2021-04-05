import React from "react";
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Hidden from "@material-ui/core/Hidden";
import Poppers from "@material-ui/core/Popper";
// @material-ui/icons
import Notifications from "@material-ui/icons/Notifications";
//core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-dashboard-react/dropdownStyle.js";
import Select from 'react-select'

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import { ReportOutlined } from "@material-ui/icons";
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(styles);



export default function Dropdown(props) {
  console.log("s:",props.tasks)
  const USB_VIEW =()=>{
    return (
      <>
      <GridContainer>
      <GridItem xs={12} sm={6} md={3}>
        <p>Interface Number</p>
      <Select options={options} />
      </GridItem>
      <GridItem xs={12} sm={6} md={3}>
      <p>Output Endpoint</p>
      <Select options={options} />
      </GridItem>
      </GridContainer>
      <p></p>
     
      </>
    )
  
  } 

  const NETWORK_VIEW =()=>{
    return (
      <>
      <GridContainer>
      <GridItem xs={12} sm={6} md={3}>
        <p>IP Address</p>
        <TextField
          id="standard-number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </GridItem>
      </GridContainer>
      <p></p>
     
      </>
    )
  
  } 

  const SERIAL_VIEW =()=>{
    return (
      <>
      <GridContainer>
      <GridItem xs={12} sm={6} md={3}>
        <p>COM Number</p>
      <Select options={options} />
      </GridItem>
      </GridContainer>
      <p></p>
     
      </>
    )
  
  }
  const classes = useStyles();
  const options = [
    { value: 'xx', label: 'xx' },
    { value: 'yy', label: 'yy' },
    { value: 'zz', label: 'zz' }
  ]
  return (
    <div>
      <div className={classes.manager}>
        {props.tasks == 1 && <USB_VIEW/>}
        {props.tasks == 2 && <NETWORK_VIEW/>}
        {props.tasks == 3 && <SERIAL_VIEW/>}
        <Button type="button" color="info">Configurate</Button>
      </div>
    </div>
  );
}