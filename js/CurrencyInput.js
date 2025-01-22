class CurrencyInput extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return <input value={value} onChange={handleChange} type="number" />
  }
}

export default CurrencyInput;