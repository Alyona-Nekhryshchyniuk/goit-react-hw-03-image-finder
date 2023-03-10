import PropTypes from 'prop-types';
const Button = ({ loadMore }) => {
  return <button onClick={() => loadMore()}>Load more</button>;
};

Button.propTypes = {
  loadMore: PropTypes.func,
};
export default Button;
