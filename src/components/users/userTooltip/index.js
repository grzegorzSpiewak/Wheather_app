/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
/* Actions */
import * as wheatherActions from 'modules/fetchWheather/actions';
/* Components */
import Spinner from 'styles/images/spinner.gif';
import AnimatedWrapper from 'components/common/animatedWrapper';

const mapStateToProps = ({ wheather }) => ({
  wheatherState: wheather
});

const mapDispatchToProps = (dispatch) => ({
  wheatherActions: bindActionCreators(wheatherActions, dispatch),
});

class Tooltip extends Component {
  constructor() {
    super(),
    this.state = {
      show: false
    };
  }

  componentWillMount() {
    const { fetchWheather } = this.props.wheatherActions;
    const { city } = this.props;
    fetchWheather(city);
  }

  componentDidMount() {
    this.toggleShow();
  }

  componentWillUnmount() {
    const { cleanTollpip } = this.props.wheatherActions;
    this.toggleShow();
    cleanTollpip();
  }

  toggleShow() {
    this.setState({
      show: !this.state.show
    });
  }

  render() {
    const { name, surname, city, country } = this.props;
    const { isFetching, wheather } = this.props.wheatherState;
    const { description, icon, id, main } = this.props.wheatherState.wheather;

    return (
      <AnimatedWrapper
        in={this.state.show}
        animation="pop"
      >
        <span className="toolpip">
          <div className="toolpip__details">
            <h1 className="toolpip__details__user">
              Name: { name }
            </h1>
            <h1 className="toolpip__details__user">
              Surname: { surname }
            </h1>
            <h1 className="toolpip__details__user">
              City: { city }
            </h1>
            <h1 className="toolpip__details__user">
              Country: { country }
            </h1>
          </div>
          {
            isFetching ?
              <img
                className="toolpip__wheather__pic__icon"
                src={Spinner}
                alt="icon"
              />
            :
              typeof (wheather) === 'object' ?
                <div className="toolpip__wheather">
                  <div className="toolpip__wheather__pic">
                    <img
                      className="toolpip__wheather__pic__icon"
                      src={`http://openweathermap.org/img/w/${icon}.png`}
                      alt="icon"
                    />
                  </div>
                  <p className="toolpip__wheather__description">
                  Wheather: { description }
                  </p>
                </div>
              :
                <div className="toolpip__wheather">
                  <p className="toolpip__wheather__description">
                    Something is wrong, try again later
                  </p>
                </div>
            }
        </span>
      </AnimatedWrapper>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tooltip);
