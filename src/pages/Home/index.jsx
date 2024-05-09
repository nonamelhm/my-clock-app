import React, {useState, Suspense, lazy} from 'react';
import {debounce} from 'lodash';
import home from './index.module.css';
// Lazy route lazy loading using React.lazy
const Clock = lazy(() => import('@/components/Clock'));

const Home = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [clocks, setClocks] = useState([]); // 用数组存储时钟组件
    const [loading, setLoading] = useState(false); // loading状态
    const [isRefreshing, setIsRefreshing] = useState(false); // 是否正在刷新中

    // Click Refresh time to use debounce for anti-shake optimization
    const refreshTime = debounce(() => {
        // Set to refreshing
        setIsRefreshing(true);
        setCurrentTime(new Date());
        setTimeout(() => {
            // After refreshing is complete, cancel the refreshing state
            setIsRefreshing(false);
        }, 500);
    }, 500);

    // Create the clock and use debounce for anti-shake optimization
    const createClock = debounce(() => {
        // Displays loading when loading begins
        setLoading(true);
        setTimeout(() => {
            // Add a new clock component
            setClocks(prevClocks => [...prevClocks, <Clock key={prevClocks.length}/>]);
            // Cancel loading when finished
            setLoading(false);
        }, 500);
    }, 500);

    return (<div id={home.box}>
        <table>
            <tbody>
            <tr>
                <td>
                    <h2>Aria Lai —— Front-end engineer</h2>
                </td>
            </tr>
            <tr>
                <td>
                    <h2>{currentTime.toLocaleTimeString()}</h2>
                </td>
                <td>
                    {/* Display a different button text depending on the isRefreshing status */}
                    <button className={home.button}
                            onClick={refreshTime}>{isRefreshing ? "Loading..." : "Refresh Time"}</button>
                </td>
            </tr>
            <tr>
                <td>
                    <button className={home.button} onClick={createClock}>
                        {loading ? "Loading..." : "Create Another Clock"}
                    </button>
                    <Suspense fallback={<div>Loading...</div>}>
                        {clocks.map((clock, index) => (<div key={index}>{clock}</div>))}
                    </Suspense>
                </td>
            </tr>
            </tbody>
        </table>
    </div>);
};

export default Home;
