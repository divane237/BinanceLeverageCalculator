import BLCalculator from './BLCalculator';
import BinanceReferal from './BinanceReferal';
import NavBar from './NavBar';

function App() {
    /*
 Darkmode : #393E46

    */
    return (
        <div style={{ backgroundColor: '#EEEEEE' }} className="">
            <NavBar />
            <BLCalculator />
            <BinanceReferal />
        </div>
    );
}

export default App;
