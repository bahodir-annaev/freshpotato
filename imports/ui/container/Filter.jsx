import React from 'react';
import QueryFilter from '../filter/QueryFilter';
import YearsFilter from '../filter/YearsFilter';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props.filter };
  }

  handleChange(partialChange) {
    this.setState({ [partialChange.key]: partialChange.value });
  }

  handleDoFilter() {
    const { doFilter } = this.props;
    const { filter } = this.state;
    doFilter(filter);
  }

  render() {
    const { filter } = this.state;
    return (
      <div>
        <form>
          <QueryFilter query={filter.query} />
          <YearsFilter years={filter.years} />
        </form>
      </div>
    );
  }
}

export default Filter;
