import React from 'react';
import QueryFilter from '../filter/QueryFilter';
import YearsFilter from '../filter/YearsFilter';
import GenresFilter from '../filter/GenresFilter';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: props.filter.query,
      years: props.filter.years,
      genres: props.filter.genres || [],
      openFilter: false,
    };

    this.handleDoFilter = this.handleDoFilter.bind(this);
    this.changeGenres = this.changeGenres.bind(this);
    this.changeQuery = this.changeQuery.bind(this);
    this.changeYears = this.changeYears.bind(this);
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen() {
    this.setState(({ openFilter }) => ({ openFilter: !openFilter }));
  }

  handleChange(partialChange) {
    this.setState({ [partialChange.key]: partialChange.value });
  }

  handleDoFilter() {
    const { doFilter } = this.props;
    const { query, years, genres } = this.state;
    doFilter({ query, years, genres });
    this.setState({ openFilter: false });
  }

  changeQuery(event) {
    this.handleChange({ key: 'query', value: event.target.value });
  }

  changeYears(event) {
    this.handleChange({ key: 'years', value: event.target.value });
  }

  changeGenres(genreSlug) {
    const { genres } = this.state;
    if (genres.some(g => g === genreSlug)) {
      this.handleChange({ key: 'genres', value: genres.filter(g => g !== genreSlug) });
    } else {
      this.handleChange({ key: 'genres', value: [...genres, genreSlug] });
    }
  }

  render() {
    const {
      query, years, genres, openFilter,
    } = this.state;
    return (
      <div className="filter">
        <div>
          <button type="button" onClick={this.toggleOpen}>Filter</button>
        </div>
        {openFilter ? (
          <form>
            <QueryFilter query={query} handleChange={this.changeQuery} />
            <YearsFilter years={years} handleChange={this.changeYears} />
            <GenresFilter genres={genres} handleChange={this.changeGenres} />
            <button type="button" onClick={this.handleDoFilter}>Apply</button>
          </form>
        ) : null }

      </div>
    );
  }
}

export default Filter;
