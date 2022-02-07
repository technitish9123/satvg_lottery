import React from 'react';
import { ThemeProvider } from 'styled-components'
import { light, dark , Row,Card,CardBody,CardFooter} from '@pancakeswap-libs/uikit'
const Lottery = () => {
  return ( <div style={{ padding: "32px", width: "500px" }}>
  <Card background="#f0c243" borderBackground="#b88700">
    <CardBody style={{ height: "150px" }}>Custom background</CardBody>
  </Card>
</div>);
};

export default Lottery;
