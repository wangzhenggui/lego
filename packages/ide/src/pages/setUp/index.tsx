import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import ToolsBar from '@/components/ToolsBar';
import Left from './components/Left';
import Container from './components/Container';
import Right from './components/Right';
import FunctionExpressionModal from './components/FunctionExpressionModal';
import styles from './index.less';

const SetUp = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <ToolsBar />
      <div className={styles.container}>
        <FunctionExpressionModal />
        <Left />
        <Container />
        <Right />
      </div>
    </DndProvider>
  );
};

export default SetUp;
