import React from 'react'
import { Link } from 'react-router-dom'

import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import FontIcon from 'material-ui/FontIcon';
import {List, ListItem} from 'material-ui/List';
import FloatingActionButton from 'material-ui/FloatingActionButton';

const MethodItem = ({method}) => {
  return (
    <div>
      <Divider />
      <Link to={`/admin/settings/shipping/${method.id}`} style={{ textDecoration: 'none' }}>
        <ListItem
          rightIcon={<FontIcon className="material-icons">keyboard_arrow_right</FontIcon>}
          style={!method.enabled ? {color: 'rgba(0, 0, 0, 0.3)'} : {}}
          primaryText={<div className="row">
            <div className="col-xs-6">{method.name}</div>
            <div className="col-xs-6" style={{ color: 'rgba(0, 0, 0, 0.4)' }}>{method.description}</div>
          </div>}
        />
      </Link>
    </div>
  )
}

export default class EmailSettings extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.onLoad();
  }

  gotoAddPage = () => {
    this.props.history.push('/admin/settings/shipping/add');
  }

  render() {
    const {shippingMethods} = this.props;
    let methods = shippingMethods.map((method, index) => <MethodItem key={index} method={method} />)

    return (
      <Paper className="paper-box" zDepth={1}>
          <div style={{width: '100%'}}>
            <List style={{ padding: 0 }}>
              {methods}
            </List>
          </div>
          <FloatingActionButton secondary={false} style={{position: 'fixed', right: '25px', bottom: '15px', zIndex: 1}} onClick={this.gotoAddPage}>
            <FontIcon className="material-icons">add</FontIcon>
          </FloatingActionButton>
      </Paper>
    )
  }
}
