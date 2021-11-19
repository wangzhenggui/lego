import { connect } from 'dva';
  
const Preview = ({ context }) => {
  return (
    <div>{JSON.stringify(context)}</div>
  );
};

export default connect((state) => {
  return {
    context: state?.editModal?.renderTree,
  }
})(Preview);
