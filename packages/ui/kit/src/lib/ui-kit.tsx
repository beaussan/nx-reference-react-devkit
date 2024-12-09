import styles from './ui-kit.module.css';
import { utils } from '@nx-reference-react-devkit/utils';

export function UiKit() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiKit!{utils(1, 2)}</h1>
    </div>
  );
}

export default UiKit;
