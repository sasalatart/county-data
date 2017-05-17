import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Measure from 'react-measure';
import { Field, reduxForm } from 'redux-form';
import { Well, FormGroup, ControlLabel } from 'react-bootstrap';
import IndicatorGraph from './IndicatorGraph';
import { buildIndicatorOptions, buildGraphData, WELL_PADDING } from '../../utils';

class IndicatorForm extends Component {
  state = { graphHeight: 0, graphWidth: 0 };

  onMeasureHandler(dimensions) {
    this.setState({
      graphHeight: (dimensions.width / 2) - (WELL_PADDING * 2),
      graphWidth: dimensions.width - (WELL_PADDING * 2)
    });
  }

  render() {
    const { availableSubjects, selectedSubject, selectedIndicator } = this.props;
    const { graphHeight, graphWidth } = this.state;

    const indicators = Object.keys(availableSubjects[selectedSubject][0]);

    return(
      <Measure onMeasure={this.onMeasureHandler.bind(this)}>
        <Well style={ { padding: WELL_PADDING } }>
          <form>
            <FormGroup>
              <ControlLabel>Indicator</ControlLabel>
              <Field name="stat" component="select" className="form-control">
                { buildIndicatorOptions(indicators, selectedIndicator) }
              </Field>
            </FormGroup>
          </form>

          {
            selectedIndicator &&
            <IndicatorGraph
              data={buildGraphData(availableSubjects[selectedSubject], selectedIndicator)}
              height={graphHeight}
              width={graphWidth}
              yDataKey={selectedIndicator} />
          }
        </Well>
      </Measure>
    );
  }
};

IndicatorForm.propTypes = {
  availableSubjects: PropTypes.object.isRequired,
  selectedSubject: PropTypes.string,
  selectedIndicator: PropTypes.string
};

export default reduxForm({ form: 'indicator' })(IndicatorForm);
