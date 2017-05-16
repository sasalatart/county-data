import React, { Component } from 'react';
import Measure from 'react-measure';
import { Field, reduxForm } from 'redux-form';
import { Well, FormGroup, ControlLabel } from 'react-bootstrap';
import IndicatorGraph from './IndicatorGraph';
import { buildIndicatorOptions, WELL_PADDING } from '../../utils';

class IndicatorForm extends Component {
  state = { graphHeight: 0, graphWidth: 0 };

  onMeasureHandler(dimensions) {
    this.setState({
      graphHeight: (dimensions.width / 2) - (WELL_PADDING * 2),
      graphWidth: dimensions.width - (WELL_PADDING * 2)
    });
  }

  render() {
    const { currentCounty, selectedSubject, selectedIndicator } = this.props;
    const { graphHeight, graphWidth } = this.state;

    const indicators = Object.keys(currentCounty.statistics[selectedSubject][0]);

    const data = currentCounty.statistics[selectedSubject].map(yearData => {
      const json = { year: yearData.year };
      json[selectedIndicator] = yearData[selectedIndicator];
      return json;
    });

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
              data={data}
              height={graphHeight}
              width={graphWidth}
              yDataKey={selectedIndicator} />
          }
        </Well>
      </Measure>
    );
  }
};

export default reduxForm({ form: 'indicator' })(IndicatorForm);
