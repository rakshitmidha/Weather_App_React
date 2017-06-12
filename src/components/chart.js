import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';


export default (props) => {
  return (
    <div height={120} width={180}>
    <Sparklines data={props.data}>
    <SparklinesLine color={props.color} />
    </Sparklines>
    </div>
  );
}
