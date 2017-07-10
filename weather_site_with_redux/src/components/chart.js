import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

class Chart extends Component{
    average(data) {
        return _.round(_.sum(data) / data.length);
    }

    render() {
        //enslist everything I'll be using in this function
        var {height, width, data, color, convertFunction, units} = this.props;
        var average = this.average(data);
        if (convertFunction) {
            average = convertFunction(average).toFixed(2);
        }
        return (
            <div>
                <Sparklines height={height} width={width} data={data}>
                    <SparklinesLine color={color} />
                    <SparklinesReferenceLine type="avg" />
                </Sparklines>
                <div>
                    {average} {units}
                </div>
            </div>
        );
    }
}

Chart.propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
    color: PropTypes.string,
    units: PropTypes.string,
    data: PropTypes.array,
    convertFunction: PropTypes.func
};

export default Chart;
