import React from 'react';
import { Divider, Typography } from '@material-ui/core';

import Logo from '../../assets/FoodGo.png';
import Android from '../../assets/android.png';
import Ios from '../../assets/appstore.png';

const Footer = () => {
  return <div style={{
    width: '100%',
    height: '160px',
    background: '#737373',
    marginTop: 'calc(100vh - 64px - 28vh - 35vh - 180px)'
  }}>
    <div style={{ padding: 10 }}>
      <img alt="" src={Logo} width="100" height="35" />
    </div>
    <div style={{ display: 'flex', flexDirection: 'row', paddingBottom: 10, marginLeft: 10 }}>
      <img alt="" src={Ios} width="120" height="35" style={{ paddingRight: 20 }} />
      <img alt="" src={Android} width="120" height="35" />
    </div>
    <Divider style={{ color: 'white', marginBottom: 5 }}></Divider>
    <Typography>© 2019 FoodGo Technologies Inc.</Typography>
  </div>

}

export default Footer;