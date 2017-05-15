import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Well, FormGroup, ControlLabel } from 'react-bootstrap';
import IndicatorGraph from './IndicatorGraph';
import { buildIndicatorOptions } from '../../utils';

const IndicatorForm = ({ indicators, selectedIndicator, subjectJSONArray }) => {
  const data = subjectJSONArray.map(yearData => {
    const json = { year: yearData.year };
    json[selectedIndicator] = yearData[selectedIndicator];
    return json;
  });

  return(
    <Well>
      <form>
        <FormGroup>
          <ControlLabel>Indicator</ControlLabel>
          <Field name="stat" component="select" className="form-control">
            { buildIndicatorOptions(indicators, selectedIndicator) }
          </Field>
        </FormGroup>
      </form>

      { selectedIndicator && <IndicatorGraph data={data} yDataKey={selectedIndicator} /> }
    </Well>
  );
};

export default reduxForm({ form: 'graph' })(IndicatorForm);
