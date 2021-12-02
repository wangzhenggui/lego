import { Input } from 'antd';

const ColProportion = ({ value = [], onChange }) => {
  const handlePaste = (e) => {
    console.debug('阻止用户粘贴；防止布局错乱')
    e.preventDefault();
  }
  const handleChange = (e) => {
    const inputValue = e.target.value;
    const reg = /^[\d:]*$/
    if (reg.test(inputValue)) {
      const finalValue = inputValue.split(':')
      onChange(finalValue)
    }
  }
  return <Input value={value.join(':')} onChange={handleChange} onPaste={handlePaste} />
}

export default ColProportion;
