import * as React from "react";
import { Button, Icon } from "semantic-ui-react";
import * as moment from "moment";
import "./style.scss";
class CustomDatePicker extends React.Component<{
  onClick?: () => void;
  value: moment.Moment;
  placeholder: string;
}> {
  render() {
    const {value,placeholder,onClick}=this.props;
    return (
      <div className="custom-date-picker" onClick={onClick}>
        <span>{value || placeholder}</span>
        <Icon name="calendar" />
      </div>
    );
  }
}

export default CustomDatePicker;
