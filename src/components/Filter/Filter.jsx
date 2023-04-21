import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './Filter.module.css';

export class Filter extends Component {
    render() {
        return (
            <label className={css.label}>
                Find contacts by Name
                <input className={css.input}
                  type="text"
                  name="filter"
                  filter={this.props.filter}
                  onChange={this.props.onChange}
                />
            </label>
        );
    }
}

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
};