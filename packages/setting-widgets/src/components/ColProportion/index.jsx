import { Input } from 'antd';

const ColProportion = ({ value = [], onChange }) => {
  console.log('value', value)
  const handleChange = (e) => {
    const inputValue = e.target.value;
    const reg = /^[\d:]+$/
    if (reg.test(inputValue)) {
      const finalValue = inputValue.split(':')
      // .map(item => {
      //   const newItem = Number(item);
      //   if (isNaN(newItem) || newItem === 0) return 1;
      //   return newItem
      // })
      onChange(finalValue)
    }
  }
  return <Input value={value.join(':')} onChange={handleChange}/>
}

export default ColProportion;
