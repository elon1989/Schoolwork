import Timbuktu from "./Timbuktu";
import Heltoff from './Heltoff';
import SvenskaAkademin from "./SvenskaAkademin";
import Test from './Test'

export default function Album() {
  
  return (
    <div>
      <h3>Albums</h3>
      <Timbuktu name={"The botten is nådd!"} />
      <Heltoff name={'I Huset'} />
      <SvenskaAkademin name={'Snapphaneklanen'} />
      <Test name={'Test'} songList={['test1', 'test2', 'test3']}/>
    </div>
  );
}
